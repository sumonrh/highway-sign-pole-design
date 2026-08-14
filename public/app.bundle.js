
(()=>{var FM=Object.create;var a0=Object.defineProperty;var HM=Object.getOwnPropertyDescriptor;var VM=Object.getOwnPropertyNames;var GM=Object.getPrototypeOf,kM=Object.prototype.hasOwnProperty;var Ni=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var WM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of VM(t))!kM.call(e,s)&&s!==n&&a0(e,s,{get:()=>t[s],enumerable:!(i=HM(t,s))||i.enumerable});return e};var ma=(e,t,n)=>(n=e!=null?FM(GM(e)):{},WM(t||!e||!e.__esModule?a0(n,"default",{value:e,enumerable:!0}):n,e));var g0=Ni(Ht=>{"use strict";var uf=Symbol.for("react.transitional.element"),XM=Symbol.for("react.portal"),qM=Symbol.for("react.fragment"),YM=Symbol.for("react.strict_mode"),ZM=Symbol.for("react.profiler"),KM=Symbol.for("react.consumer"),JM=Symbol.for("react.context"),QM=Symbol.for("react.forward_ref"),jM=Symbol.for("react.suspense"),$M=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),tb=Symbol.for("react.activity"),r0=Symbol.iterator;function eb(e){return e===null||typeof e!="object"?null:(e=r0&&e[r0]||e["@@iterator"],typeof e=="function"?e:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,d0={};function rr(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||h0}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function p0(){}p0.prototype=rr.prototype;function hf(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||h0}var ff=hf.prototype=new p0;ff.constructor=hf;f0(ff,rr.prototype);ff.isPureReactComponent=!0;var o0=Array.isArray;function cf(){}var Ae={H:null,A:null,T:null,S:null},m0=Object.prototype.hasOwnProperty;function df(e,t,n){var i=n.ref;return{$$typeof:uf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function nb(e,t){return df(e.type,t,e.props)}function pf(e){return typeof e=="object"&&e!==null&&e.$$typeof===uf}function ib(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var l0=/\/+/g;function lf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ib(""+e.key):t.toString(36)}function sb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(cf,cf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ar(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case uf:case XM:r=!0;break;case u0:return r=e._init,ar(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+lf(e,0):i,o0(s)?(n="",r!=null&&(n=r.replace(l0,"$&/")+"/"),ar(s,t,n,"",function(c){return c})):s!=null&&(pf(s)&&(s=nb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(l0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(o0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+lf(i,l),r+=ar(i,t,n,a,s);else if(l=eb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+lf(i,l++),r+=ar(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return ar(sb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function rc(e,t,n){if(e==null)return e;var i=[],s=0;return ar(e,i,"","",function(a){return t.call(n,a,s++)}),i}function ab(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var c0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rb={map:rc,forEach:function(e,t,n){rc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rc(e,function(){t++}),t},toArray:function(e){return rc(e,function(t){return t})||[]},only:function(e){if(!pf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ht.Activity=tb;Ht.Children=rb;Ht.Component=rr;Ht.Fragment=qM;Ht.Profiler=ZM;Ht.PureComponent=hf;Ht.StrictMode=YM;Ht.Suspense=jM;Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ae;Ht.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ae.H.useMemoCache(e)}};Ht.cache=function(e){return function(){return e.apply(null,arguments)}};Ht.cacheSignal=function(){return null};Ht.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=f0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!m0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return df(e.type,s,i)};Ht.createContext=function(e){return e={$$typeof:JM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:KM,_context:e},e};Ht.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)m0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return df(e,a,s)};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(e){return{$$typeof:QM,render:e}};Ht.isValidElement=pf;Ht.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:ab}};Ht.memo=function(e,t){return{$$typeof:$M,type:e,compare:t===void 0?null:t}};Ht.startTransition=function(e){var t=Ae.T,n={};Ae.T=n;try{var i=e(),s=Ae.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(cf,c0)}catch(a){c0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ae.T=t}};Ht.unstable_useCacheRefresh=function(){return Ae.H.useCacheRefresh()};Ht.use=function(e){return Ae.H.use(e)};Ht.useActionState=function(e,t,n){return Ae.H.useActionState(e,t,n)};Ht.useCallback=function(e,t){return Ae.H.useCallback(e,t)};Ht.useContext=function(e){return Ae.H.useContext(e)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(e,t){return Ae.H.useDeferredValue(e,t)};Ht.useEffect=function(e,t){return Ae.H.useEffect(e,t)};Ht.useEffectEvent=function(e){return Ae.H.useEffectEvent(e)};Ht.useId=function(){return Ae.H.useId()};Ht.useImperativeHandle=function(e,t,n){return Ae.H.useImperativeHandle(e,t,n)};Ht.useInsertionEffect=function(e,t){return Ae.H.useInsertionEffect(e,t)};Ht.useLayoutEffect=function(e,t){return Ae.H.useLayoutEffect(e,t)};Ht.useMemo=function(e,t){return Ae.H.useMemo(e,t)};Ht.useOptimistic=function(e,t){return Ae.H.useOptimistic(e,t)};Ht.useReducer=function(e,t,n){return Ae.H.useReducer(e,t,n)};Ht.useRef=function(e){return Ae.H.useRef(e)};Ht.useState=function(e){return Ae.H.useState(e)};Ht.useSyncExternalStore=function(e,t,n){return Ae.H.useSyncExternalStore(e,t,n)};Ht.useTransition=function(){return Ae.H.useTransition()};Ht.version="19.2.8"});var Uo=Ni((S3,_0)=>{"use strict";_0.exports=g0()});var $_=Ni(wu=>{"use strict";var N2=Symbol.for("react.transitional.element"),U2=Symbol.for("react.fragment");function j_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:N2,type:e,key:i,ref:t!==void 0?t:null,props:n}}wu.Fragment=U2;wu.jsx=j_;wu.jsxs=j_});var sl=Ni((A3,tv)=>{"use strict";tv.exports=$_()});var dv=Ni(Oe=>{"use strict";function Cp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ru(s,t))e[i]=t,e[n]=s,n=i;else break t}}function zi(e){return e.length===0?null:e[0]}function Nu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ru(o,n))l<s&&0>Ru(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ru(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ru(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(sv=performance,Oe.unstable_now=function(){return sv.now()}):(Tp=Date,av=Tp.now(),Oe.unstable_now=function(){return Tp.now()-av});var sv,Tp,av,rs=[],Vs=[],W2=1,oi=null,En=3,Rp=!1,al=!1,rl=!1,Dp=!1,lv=typeof setTimeout=="function"?setTimeout:null,cv=typeof clearTimeout=="function"?clearTimeout:null,rv=typeof setImmediate<"u"?setImmediate:null;function Du(e){for(var t=zi(Vs);t!==null;){if(t.callback===null)Nu(Vs);else if(t.startTime<=e)Nu(Vs),t.sortIndex=t.expirationTime,Cp(rs,t);else break;t=zi(Vs)}}function Np(e){if(rl=!1,Du(e),!al)if(zi(rs)!==null)al=!0,Vr||(Vr=!0,Hr());else{var t=zi(Vs);t!==null&&Up(Np,t.startTime-e)}}var Vr=!1,ol=-1,uv=5,hv=-1;function fv(){return Dp?!0:!(Oe.unstable_now()-hv<uv)}function Ap(){if(Dp=!1,Vr){var e=Oe.unstable_now();hv=e;var t=!0;try{t:{al=!1,rl&&(rl=!1,cv(ol),ol=-1),Rp=!0;var n=En;try{e:{for(Du(e),oi=zi(rs);oi!==null&&!(oi.expirationTime>e&&fv());){var i=oi.callback;if(typeof i=="function"){oi.callback=null,En=oi.priorityLevel;var s=i(oi.expirationTime<=e);if(e=Oe.unstable_now(),typeof s=="function"){oi.callback=s,Du(e),t=!0;break e}oi===zi(rs)&&Nu(rs),Du(e)}else Nu(rs);oi=zi(rs)}if(oi!==null)t=!0;else{var a=zi(Vs);a!==null&&Up(Np,a.startTime-e),t=!1}}break t}finally{oi=null,En=n,Rp=!1}t=void 0}}finally{t?Hr():Vr=!1}}}var Hr;typeof rv=="function"?Hr=function(){rv(Ap)}:typeof MessageChannel<"u"?(wp=new MessageChannel,ov=wp.port2,wp.port1.onmessage=Ap,Hr=function(){ov.postMessage(null)}):Hr=function(){lv(Ap,0)};var wp,ov;function Up(e,t){ol=lv(function(){e(Oe.unstable_now())},t)}Oe.unstable_IdlePriority=5;Oe.unstable_ImmediatePriority=1;Oe.unstable_LowPriority=4;Oe.unstable_NormalPriority=3;Oe.unstable_Profiling=null;Oe.unstable_UserBlockingPriority=2;Oe.unstable_cancelCallback=function(e){e.callback=null};Oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):uv=0<e?Math.floor(1e3/e):5};Oe.unstable_getCurrentPriorityLevel=function(){return En};Oe.unstable_next=function(e){switch(En){case 1:case 2:case 3:var t=3;break;default:t=En}var n=En;En=t;try{return e()}finally{En=n}};Oe.unstable_requestPaint=function(){Dp=!0};Oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=En;En=e;try{return t()}finally{En=n}};Oe.unstable_scheduleCallback=function(e,t,n){var i=Oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:W2++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Cp(Vs,e),zi(rs)===null&&e===zi(Vs)&&(rl?(cv(ol),ol=-1):rl=!0,Up(Np,n-i))):(e.sortIndex=s,Cp(rs,e),al||Rp||(al=!0,Vr||(Vr=!0,Hr()))),e};Oe.unstable_shouldYield=fv;Oe.unstable_wrapCallback=function(e){var t=En;return function(){var n=En;En=t;try{return e.apply(this,arguments)}finally{En=n}}}});var mv=Ni((D3,pv)=>{"use strict";pv.exports=dv()});var _v=Ni(Rn=>{"use strict";var X2=Uo();function gv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gs(){}var Cn={d:{f:Gs,r:function(){throw Error(gv(522))},D:Gs,C:Gs,L:Gs,m:Gs,X:Gs,S:Gs,M:Gs},p:0,findDOMNode:null},q2=Symbol.for("react.portal");function Y2(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q2,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var ll=X2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Uu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Cn;Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(gv(299));return Y2(e,t,null,n)};Rn.flushSync=function(e){var t=ll.T,n=Cn.p;try{if(ll.T=null,Cn.p=2,e)return e()}finally{ll.T=t,Cn.p=n,Cn.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Cn.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&Cn.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Uu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Cn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Cn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Uu(t.as,t.crossOrigin);Cn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Cn.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Uu(n,t.crossOrigin);Cn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Uu(t.as,t.crossOrigin);Cn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Cn.d.m(e)};Rn.requestFormReset=function(e){Cn.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return ll.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return ll.H.useHostTransitionStatus()};Rn.version="19.2.8"});var xv=Ni((U3,yv)=>{"use strict";function vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)}catch(e){console.error(e)}}vv(),yv.exports=_v()});var UM=Ni(sf=>{"use strict";var rn=mv(),qy=Uo(),Z2=xv();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Yy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ky(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sv(e){if(Zl(e)!==e)throw Error(J(188))}function K2(e){var t=e.alternate;if(!t){if(t=Zl(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Sv(s),e;if(a===i)return Sv(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function Jy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Jy(e),t!==null)return t;e=e.sibling}return null}var Ne=Object.assign,J2=Symbol.for("react.element"),Lu=Symbol.for("react.transitional.element"),gl=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),jy=Symbol.for("react.consumer"),ps=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),pm=Symbol.for("react.suspense_list"),lg=Symbol.for("react.memo"),ks=Symbol.for("react.lazy"),mm=Symbol.for("react.activity"),Q2=Symbol.for("react.memo_cache_sentinel"),Mv=Symbol.iterator;function cl(e){return e===null||typeof e!="object"?null:(e=Mv&&e[Mv]||e["@@iterator"],typeof e=="function"?e:null)}var j2=Symbol.for("react.client.reference");function gm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yr:return"Fragment";case fm:return"Profiler";case Qy:return"StrictMode";case dm:return"Suspense";case pm:return"SuspenseList";case mm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case gl:return"Portal";case ps:return e.displayName||"Context";case jy:return(e._context.displayName||"Context")+".Consumer";case og:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lg:return t=e.displayName||null,t!==null?t:gm(e.type)||"Memo";case ks:t=e._payload,e=e._init;try{return gm(e(t))}catch{}}return null}var _l=Array.isArray,It=qy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=Z2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},_m=[],Zr=-1;function Gi(e){return{current:e}}function un(e){0>Zr||(e.current=_m[Zr],_m[Zr]=null,Zr--)}function Te(e,t){Zr++,_m[Zr]=e.current,e.current=t}var Vi=Gi(null),Ol=Gi(null),ta=Gi(null),fh=Gi(null);function dh(e,t){switch(Te(ta,t),Te(Ol,e),Te(Vi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ry(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ry(t),e=vM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(Vi),Te(Vi,e)}function fo(){un(Vi),un(Ol),un(ta)}function vm(e){e.memoizedState!==null&&Te(fh,e);var t=Vi.current,n=vM(t,e.type);t!==n&&(Te(Ol,e),Te(Vi,n))}function ph(e){Ol.current===e&&(un(Vi),un(Ol)),fh.current===e&&(un(fh),Xl._currentValue=Va)}var Lp,bv;function za(e){if(Lp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lp=t&&t[1]||"",bv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lp+e+bv}var Op=!1;function Pp(e,t){if(!e||Op)return"";Op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Op=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?za(n):""}function $2(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Pp(e.type,!1);case 11:return Pp(e.type.render,!1);case 1:return Pp(e.type,!0);case 31:return za("Activity");default:return""}}function Ev(e){try{var t="",n=null;do t+=$2(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ym=Object.prototype.hasOwnProperty,cg=rn.unstable_scheduleCallback,Ip=rn.unstable_cancelCallback,tC=rn.unstable_shouldYield,eC=rn.unstable_requestPaint,Jn=rn.unstable_now,nC=rn.unstable_getCurrentPriorityLevel,$y=rn.unstable_ImmediatePriority,tx=rn.unstable_UserBlockingPriority,mh=rn.unstable_NormalPriority,iC=rn.unstable_LowPriority,ex=rn.unstable_IdlePriority,sC=rn.log,aC=rn.unstable_setDisableYieldValue,Kl=null,Qn=null;function Ks(e){if(typeof sC=="function"&&aC(e),Qn&&typeof Qn.setStrictMode=="function")try{Qn.setStrictMode(Kl,e)}catch{}}var jn=Math.clz32?Math.clz32:lC,rC=Math.log,oC=Math.LN2;function lC(e){return e>>>=0,e===0?32:31-(rC(e)/oC|0)|0}var Ou=256,Pu=262144,Iu=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ba(i):(r&=o,r!==0?s=Ba(r):n||(n=o&~e,n!==0&&(s=Ba(n))))):(o=i&~a,o!==0?s=Ba(o):r!==0?s=Ba(r):n||(n=i&~e,n!==0&&(s=Ba(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cC(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(){var e=Iu;return Iu<<=1,(Iu&62914560)===0&&(Iu=4194304),e}function zp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uC(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-jn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&ix(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ix(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-jn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function sx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-jn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function ax(e,t){var n=t&-t;return n=(n&42)!==0?1:ug(n),(n&(e.suspendedLanes|t))!==0?0:n}function ug(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rx(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:RM(e.type))}function Tv(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var da=Math.random().toString(36).slice(2),dn="__reactFiber$"+da,Fn="__reactProps$"+da,Eo="__reactContainer$"+da,xm="__reactEvents$"+da,hC="__reactListeners$"+da,fC="__reactHandles$"+da,Av="__reactResources$"+da,jl="__reactMarker$"+da;function fg(e){delete e[dn],delete e[Fn],delete e[xm],delete e[hC],delete e[fC]}function Kr(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Eo]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oy(e);e!==null;){if(n=e[dn])return n;e=Oy(e)}return t}e=n,n=e.parentNode}return null}function To(e){if(e=e[dn]||e[Eo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function ao(e){var t=e[Av];return t||(t=e[Av]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function cn(e){e[jl]=!0}var ox=new Set,lx={};function Qa(e,t){po(e,t),po(e+"Capture",t)}function po(e,t){for(lx[e]=t,e=0;e<t.length;e++)ox.add(t[e])}var dC=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wv={},Cv={};function pC(e){return ym.call(Cv,e)?!0:ym.call(wv,e)?!1:dC.test(e)?Cv[e]=!0:(wv[e]=!0,!1)}function Qu(e,t,n){if(pC(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function zu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function os(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ci(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mC(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sm(e){if(!e._valueTracker){var t=cx(e)?"checked":"value";e._valueTracker=mC(e,t,""+e[t])}}function ux(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=cx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function gh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gC=/[\n"\\]/g;function fi(e){return e.replace(gC,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ci(t)):e.value!==""+ci(t)&&(e.value=""+ci(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?bm(e,r,ci(t)):n!=null?bm(e,r,ci(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ci(o):e.removeAttribute("name")}function hx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Sm(e);return}n=n!=null?""+ci(n):"",t=t!=null?""+ci(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Sm(e)}function bm(e,t,n){t==="number"&&gh(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ro(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ci(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function fx(e,t,n){if(t!=null&&(t=""+ci(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ci(n):""}function dx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(_l(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ci(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Sm(e)}function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _C=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||_C.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function px(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Rv(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Rv(e,a,t[a])}function dg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ju(e){return yC.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ms(){}var Em=null;function pg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,oo=null;function Dv(e){var t=To(e);if(t&&(e=t.stateNode)){var n=e[Fn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Mm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Fn]||null;if(!s)throw Error(J(90));Mm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ux(i)}break t;case"textarea":fx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ro(e,!!n.multiple,t,!1)}}}var Bp=!1;function mx(e,t,n){if(Bp)return e(t,n);Bp=!0;try{var i=e(t);return i}finally{if(Bp=!1,(Jr!==null||oo!==null)&&($h(),Jr&&(t=Jr,e=oo,oo=Jr=null,Dv(t),e)))for(t=0;t<e.length;t++)Dv(e[t])}}function Pl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var xs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tm=!1;if(xs)try{Gr={},Object.defineProperty(Gr,"passive",{get:function(){Tm=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Tm=!1}var Gr,Js=null,mg=null,$u=null;function gx(){if($u)return $u;var e,t=mg,n=t.length,i,s="value"in Js?Js.value:Js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return $u=s.slice(e,1<i?1-i:void 0)}function th(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bu(){return!0}function Nv(){return!1}function Hn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Bu:Nv,this.isPropagationStopped=Nv,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gh=Hn(ja),$l=Ne({},ja,{view:0,detail:0}),xC=Hn($l),Fp,Hp,ul,kh=Ne({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ul&&(ul&&e.type==="mousemove"?(Fp=e.screenX-ul.screenX,Hp=e.screenY-ul.screenY):Hp=Fp=0,ul=e),Fp)},movementY:function(e){return"movementY"in e?e.movementY:Hp}}),Uv=Hn(kh),SC=Ne({},kh,{dataTransfer:0}),MC=Hn(SC),bC=Ne({},$l,{relatedTarget:0}),Vp=Hn(bC),EC=Ne({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),TC=Hn(EC),AC=Ne({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wC=Hn(AC),CC=Ne({},ja,{data:0}),Lv=Hn(CC),RC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=NC[e])?!!t[e]:!1}function gg(){return UC}var LC=Ne({},$l,{key:function(e){if(e.key){var t=RC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=th(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(e){return e.type==="keypress"?th(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?th(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),OC=Hn(LC),PC=Ne({},kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ov=Hn(PC),IC=Ne({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),zC=Hn(IC),BC=Ne({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),FC=Hn(BC),HC=Ne({},kh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),VC=Hn(HC),GC=Ne({},ja,{newState:0,oldState:0}),kC=Hn(GC),WC=[9,13,27,32],_g=xs&&"CompositionEvent"in window,Sl=null;xs&&"documentMode"in document&&(Sl=document.documentMode);var XC=xs&&"TextEvent"in window&&!Sl,_x=xs&&(!_g||Sl&&8<Sl&&11>=Sl),Pv=" ",Iv=!1;function vx(e,t){switch(e){case"keyup":return WC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function qC(e,t){switch(e){case"compositionend":return yx(t);case"keypress":return t.which!==32?null:(Iv=!0,Pv);case"textInput":return e=t.data,e===Pv&&Iv?null:e;default:return null}}function YC(e,t){if(Qr)return e==="compositionend"||!_g&&vx(e,t)?(e=gx(),$u=mg=Js=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _x&&t.locale!=="ko"?null:t.data;default:return null}}var ZC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZC[e.type]:t==="textarea"}function xx(e,t,n,i){Jr?oo?oo.push(i):oo=[i]:Jr=i,t=Oh(t,"onChange"),0<t.length&&(n=new Gh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ml=null,Il=null;function KC(e){mM(e,0)}function Wh(e){var t=vl(e);if(ux(t))return e}function Bv(e,t){if(e==="change")return t}var Sx=!1;xs&&(xs?(Hu="oninput"in document,Hu||(Gp=document.createElement("div"),Gp.setAttribute("oninput","return;"),Hu=typeof Gp.oninput=="function"),Fu=Hu):Fu=!1,Sx=Fu&&(!document.documentMode||9<document.documentMode));var Fu,Hu,Gp;function Fv(){Ml&&(Ml.detachEvent("onpropertychange",Mx),Il=Ml=null)}function Mx(e){if(e.propertyName==="value"&&Wh(Il)){var t=[];xx(t,Il,e,pg(e)),mx(KC,t)}}function JC(e,t,n){e==="focusin"?(Fv(),Ml=t,Il=n,Ml.attachEvent("onpropertychange",Mx)):e==="focusout"&&Fv()}function QC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wh(Il)}function jC(e,t){if(e==="click")return Wh(t)}function $C(e,t){if(e==="input"||e==="change")return Wh(t)}function tR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ti=typeof Object.is=="function"?Object.is:tR;function zl(e,t){if(ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!ym.call(t,s)||!ti(e[s],t[s]))return!1}return!0}function Hv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vv(e,t){var n=Hv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Hv(n)}}function bx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ex(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gh(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gh(e.document)}return t}function vg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var eR=xs&&"documentMode"in document&&11>=document.documentMode,jr=null,Am=null,bl=null,wm=!1;function Gv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wm||jr==null||jr!==gh(i)||(i=jr,"selectionStart"in i&&vg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&zl(bl,i)||(bl=i,i=Oh(Am,"onSelect"),0<i.length&&(t=new Gh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=jr)))}function Ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},kp={},Tx={};xs&&(Tx=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function $a(e){if(kp[e])return kp[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tx)return kp[e]=t[n];return e}var Ax=$a("animationend"),wx=$a("animationiteration"),Cx=$a("animationstart"),nR=$a("transitionrun"),iR=$a("transitionstart"),sR=$a("transitioncancel"),Rx=$a("transitionend"),Dx=new Map,Cm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cm.push("scrollEnd");function Di(e,t){Dx.set(e,t),Qa(t,[e])}var _h=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],to=0,yg=0;function Xh(){for(var e=to,t=yg=to=0;t<e;){var n=li[t];li[t++]=null;var i=li[t];li[t++]=null;var s=li[t];li[t++]=null;var a=li[t];if(li[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Nx(n,s,a)}}function qh(e,t,n,i){li[to++]=e,li[to++]=t,li[to++]=n,li[to++]=i,yg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xg(e,t,n,i){return qh(e,t,n,i),vh(e)}function tr(e,t){return qh(e,null,null,t),vh(e)}function Nx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-jn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function vh(e){if(50<Ul)throw Ul=0,Km=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var eo={};function aR(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,t,n,i){return new aR(e,t,n,i)}function Sg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _s(e,t){var n=e.alternate;return n===null?(n=Zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ux(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function eh(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Sg(e)&&(r=1);else if(typeof e=="string")r=l3(e,n,Vi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mm:return e=Zn(31,n,t,s),e.elementType=mm,e.lanes=a,e;case Yr:return Ga(n.children,s,a,t);case Qy:r=8,s|=24;break;case fm:return e=Zn(12,n,t,s|2),e.elementType=fm,e.lanes=a,e;case dm:return e=Zn(13,n,t,s),e.elementType=dm,e.lanes=a,e;case pm:return e=Zn(19,n,t,s),e.elementType=pm,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ps:r=10;break t;case jy:r=9;break t;case og:r=11;break t;case lg:r=14;break t;case ks:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Zn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ga(e,t,n,i){return e=Zn(7,e,i,t),e.lanes=n,e}function Wp(e,t,n){return e=Zn(6,e,null,t),e.lanes=n,e}function Lx(e){var t=Zn(18,null,null,0);return t.stateNode=e,t}function Xp(e,t,n){return t=Zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kv=new WeakMap;function di(e,t){if(typeof e=="object"&&e!==null){var n=kv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ev(t)},kv.set(e,t),t)}return{value:e,source:t,stack:Ev(t)}}var no=[],io=0,yh=null,Bl=0,ui=[],hi=0,ca=null,Bi=1,Fi="";function fs(e,t){no[io++]=Bl,no[io++]=yh,yh=e,Bl=t}function Ox(e,t,n){ui[hi++]=Bi,ui[hi++]=Fi,ui[hi++]=ca,ca=e;var i=Bi;e=Fi;var s=32-jn(i)-1;i&=~(1<<s),n+=1;var a=32-jn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Bi=1<<32-jn(t)+s|n<<s|i,Fi=a+e}else Bi=1<<a|n<<s|i,Fi=e}function Mg(e){e.return!==null&&(fs(e,1),Ox(e,1,0))}function bg(e){for(;e===yh;)yh=no[--io],no[io]=null,Bl=no[--io],no[io]=null;for(;e===ca;)ca=ui[--hi],ui[hi]=null,Fi=ui[--hi],ui[hi]=null,Bi=ui[--hi],ui[hi]=null}function Px(e,t){ui[hi++]=Bi,ui[hi++]=Fi,ui[hi++]=ca,Bi=t.id,Fi=t.overflow,ca=e}var pn=null,De=null,re=!1,ea=null,pi=!1,Rm=Error(J(519));function ua(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(di(t,e)),Rm}function Wv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[dn]=e,t[Fn]=i,n){case"dialog":$t("cancel",t),$t("close",t);break;case"iframe":case"object":case"embed":$t("load",t);break;case"video":case"audio":for(n=0;n<kl.length;n++)$t(kl[n],t);break;case"source":$t("error",t);break;case"img":case"image":case"link":$t("error",t),$t("load",t);break;case"details":$t("toggle",t);break;case"input":$t("invalid",t),hx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$t("invalid",t);break;case"textarea":$t("invalid",t),dx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||_M(t.textContent,n)?(i.popover!=null&&($t("beforetoggle",t),$t("toggle",t)),i.onScroll!=null&&$t("scroll",t),i.onScrollEnd!=null&&$t("scrollend",t),i.onClick!=null&&(t.onclick=ms),t=!0):t=!1,t||ua(e,!0)}function Xv(e){for(pn=e.return;pn;)switch(pn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:pn=pn.return}}function kr(e){if(e!==pn)return!1;if(!re)return Xv(e),re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tg(e.type,e.memoizedProps)),n=!n),n&&De&&ua(e),Xv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));De=Ly(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));De=Ly(e)}else t===27?(t=De,pa(e.type)?(e=sg,sg=null,De=e):De=t):De=pn?gi(e.stateNode.nextSibling):null;return!0}function qa(){De=pn=null,re=!1}function qp(){var e=ea;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ea=null),e}function Fl(e){ea===null?ea=[e]:ea.push(e)}var Dm=Gi(null),er=null,gs=null;function Xs(e,t,n){Te(Dm,t._currentValue),t._currentValue=n}function vs(e){e._currentValue=Dm.current,un(Dm)}function Nm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Um(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nm(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Nm(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ao(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;ti(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===fh.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Xl):e=[Xl])}s=s.return}e!==null&&Um(t,e,n,i),t.flags|=262144}function xh(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){er=e,gs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mn(e){return Ix(er,e)}function Vu(e,t){return er===null&&Ya(e),Ix(e,t)}function Ix(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gs===null){if(e===null)throw Error(J(308));gs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gs=gs.next=t;return n}var rR=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},oR=rn.unstable_scheduleCallback,lR=rn.unstable_NormalPriority,Je={$$typeof:ps,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eg(){return{controller:new rR,data:new Map,refCount:0}}function tc(e){e.refCount--,e.refCount===0&&oR(lR,function(){e.controller.abort()})}var El=null,Lm=0,go=0,lo=null;function cR(e,t){if(El===null){var n=El=[];Lm=0,go=Kg(),lo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Lm++,t.then(qv,qv),t}function qv(){if(--Lm===0&&El!==null){lo!==null&&(lo.status="fulfilled");var e=El;El=null,go=0,lo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uR(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Yv=It.S;It.S=function(e,t){JS=Jn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cR(e,t),Yv!==null&&Yv(e,t)};var ka=Gi(null);function Tg(){var e=ka.current;return e!==null?e:be.pooledCache}function nh(e,t){t===null?Te(ka,ka.current):Te(ka,t.pool)}function zx(){var e=Tg();return e===null?null:{parent:Je._currentValue,pool:e}}var wo=Error(J(460)),Ag=Error(J(474)),Yh=Error(J(542)),Sh={then:function(){}};function Zv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ms,ms),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jv(e),e;default:if(typeof t.status=="string")t.then(ms,ms);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jv(e),e}throw Wa=t,wo}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,wo):n}}var Wa=null;function Kv(){if(Wa===null)throw Error(J(459));var e=Wa;return Wa=null,e}function Jv(e){if(e===wo||e===Yh)throw Error(J(483))}var co=null,Hl=0;function Gu(e){var t=Hl;return Hl+=1,co===null&&(co=[]),Bx(co,e,t)}function hl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ku(e,t){throw t.$$typeof===J2?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fx(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(u,g){return u=_s(u,g),u.index=0,u.sibling=null,u}function a(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,S){return g===null||g.tag!==6?(g=Wp(_,u.mode,S),g.return=u,g):(g=s(g,_),g.return=u,g)}function l(u,g,_,S){var R=_.type;return R===Yr?h(u,g,_.props.children,S,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ks&&Fa(R)===g.type)?(g=s(g,_.props),hl(g,_),g.return=u,g):(g=eh(_.type,_.key,_.props,null,u.mode,S),hl(g,_),g.return=u,g)}function c(u,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Xp(_,u.mode,S),g.return=u,g):(g=s(g,_.children||[]),g.return=u,g)}function h(u,g,_,S,R){return g===null||g.tag!==7?(g=Ga(_,u.mode,S,R),g.return=u,g):(g=s(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Wp(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lu:return _=eh(g.type,g.key,g.props,null,u.mode,_),hl(_,g),_.return=u,_;case gl:return g=Xp(g,u.mode,_),g.return=u,g;case ks:return g=Fa(g),d(u,g,_)}if(_l(g)||cl(g))return g=Ga(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,Gu(g),_);if(g.$$typeof===ps)return d(u,Vu(u,g),_);ku(u,g)}return null}function f(u,g,_,S){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return R!==null?null:o(u,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Lu:return _.key===R?l(u,g,_,S):null;case gl:return _.key===R?c(u,g,_,S):null;case ks:return _=Fa(_),f(u,g,_,S)}if(_l(_)||cl(_))return R!==null?null:h(u,g,_,S,null);if(typeof _.then=="function")return f(u,g,Gu(_),S);if(_.$$typeof===ps)return f(u,g,Vu(u,_),S);ku(u,_)}return null}function p(u,g,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return u=u.get(_)||null,o(g,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lu:return u=u.get(S.key===null?_:S.key)||null,l(g,u,S,R);case gl:return u=u.get(S.key===null?_:S.key)||null,c(g,u,S,R);case ks:return S=Fa(S),p(u,g,_,S,R)}if(_l(S)||cl(S))return u=u.get(_)||null,h(g,u,S,R,null);if(typeof S.then=="function")return p(u,g,_,Gu(S),R);if(S.$$typeof===ps)return p(u,g,_,Vu(g,S),R);ku(g,S)}return null}function v(u,g,_,S){for(var R=null,C=null,T=g,D=g=0,k=null;T!==null&&D<_.length;D++){T.index>D?(k=T,T=null):k=T.sibling;var y=f(u,T,_[D],S);if(y===null){T===null&&(T=k);break}e&&T&&y.alternate===null&&t(u,T),g=a(y,g,D),C===null?R=y:C.sibling=y,C=y,T=k}if(D===_.length)return n(u,T),re&&fs(u,D),R;if(T===null){for(;D<_.length;D++)T=d(u,_[D],S),T!==null&&(g=a(T,g,D),C===null?R=T:C.sibling=T,C=T);return re&&fs(u,D),R}for(T=i(T);D<_.length;D++)k=p(T,u,D,_[D],S),k!==null&&(e&&k.alternate!==null&&T.delete(k.key===null?D:k.key),g=a(k,g,D),C===null?R=k:C.sibling=k,C=k);return e&&T.forEach(function(E){return t(u,E)}),re&&fs(u,D),R}function x(u,g,_,S){if(_==null)throw Error(J(151));for(var R=null,C=null,T=g,D=g=0,k=null,y=_.next();T!==null&&!y.done;D++,y=_.next()){T.index>D?(k=T,T=null):k=T.sibling;var E=f(u,T,y.value,S);if(E===null){T===null&&(T=k);break}e&&T&&E.alternate===null&&t(u,T),g=a(E,g,D),C===null?R=E:C.sibling=E,C=E,T=k}if(y.done)return n(u,T),re&&fs(u,D),R;if(T===null){for(;!y.done;D++,y=_.next())y=d(u,y.value,S),y!==null&&(g=a(y,g,D),C===null?R=y:C.sibling=y,C=y);return re&&fs(u,D),R}for(T=i(T);!y.done;D++,y=_.next())y=p(T,u,D,y.value,S),y!==null&&(e&&y.alternate!==null&&T.delete(y.key===null?D:y.key),g=a(y,g,D),C===null?R=y:C.sibling=y,C=y);return e&&T.forEach(function(V){return t(u,V)}),re&&fs(u,D),R}function m(u,g,_,S){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Lu:t:{for(var R=_.key;g!==null;){if(g.key===R){if(R=_.type,R===Yr){if(g.tag===7){n(u,g.sibling),S=s(g,_.props.children),S.return=u,u=S;break t}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ks&&Fa(R)===g.type){n(u,g.sibling),S=s(g,_.props),hl(S,_),S.return=u,u=S;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Yr?(S=Ga(_.props.children,u.mode,S,_.key),S.return=u,u=S):(S=eh(_.type,_.key,_.props,null,u.mode,S),hl(S,_),S.return=u,u=S)}return r(u);case gl:t:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),S=s(g,_.children||[]),S.return=u,u=S;break t}else{n(u,g);break}else t(u,g);g=g.sibling}S=Xp(_,u.mode,S),S.return=u,u=S}return r(u);case ks:return _=Fa(_),m(u,g,_,S)}if(_l(_))return v(u,g,_,S);if(cl(_)){if(R=cl(_),typeof R!="function")throw Error(J(150));return _=R.call(_),x(u,g,_,S)}if(typeof _.then=="function")return m(u,g,Gu(_),S);if(_.$$typeof===ps)return m(u,g,Vu(u,_),S);ku(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),S=s(g,_),S.return=u,u=S):(n(u,g),S=Wp(_,u.mode,S),S.return=u,u=S),r(u)):n(u,g)}return function(u,g,_,S){try{Hl=0;var R=m(u,g,_,S);return co=null,R}catch(T){if(T===wo||T===Yh)throw T;var C=Zn(29,T,null,u.mode);return C.lanes=S,C.return=u,C}}}var Za=Fx(!0),Hx=Fx(!1),Ws=!1;function wg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(fe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=vh(e),Nx(e,null,n),t}return qh(e,i,t,n),vh(e)}function Tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sx(e,n)}}function Yp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pm=!1;function Al(){if(Pm){var e=lo;if(e!==null)throw e}}function wl(e,t,n,i){Pm=!1;var s=e.updateQueue;Ws=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(ie&f)===f:(i&f)===f){f!==0&&f===go&&(Pm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=Ne({},d,f);break t;case 2:Ws=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),fa|=r,e.lanes=r,e.memoizedState=d}}function Vx(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function Gx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vx(n[e],t)}var _o=Gi(null),Mh=Gi(0);function Qv(e,t){e=Es,Te(Mh,e),Te(_o,t),Es=e|t.baseLanes}function Im(){Te(Mh,Es),Te(_o,_o.current)}function Cg(){Es=Mh.current,un(_o),un(Mh)}var ei=Gi(null),mi=null;function qs(e){var t=e.alternate;Te(ke,ke.current&1),Te(ei,e),mi===null&&(t===null||_o.current!==null||t.memoizedState!==null)&&(mi=e)}function zm(e){Te(ke,ke.current),Te(ei,e),mi===null&&(mi=e)}function kx(e){e.tag===22?(Te(ke,ke.current),Te(ei,e),mi===null&&(mi=e)):Ys(e)}function Ys(){Te(ke,ke.current),Te(ei,ei.current)}function Yn(e){un(ei),mi===e&&(mi=null),un(ke)}var ke=Gi(0);function bh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ng(n)||ig(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=0,Gt=null,Me=null,Ze=null,Eh=!1,uo=!1,Ka=!1,Th=0,Vl=0,ho=null,hR=0;function Fe(){throw Error(J(321))}function Rg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ti(e[n],t[n]))return!1;return!0}function Dg(e,t,n,i,s,a){return Ss=a,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?xS:Vg,Ka=!1,a=n(i,s),Ka=!1,uo&&(a=Xx(t,n,i,s)),Wx(e),a}function Wx(e){It.H=Gl;var t=Me!==null&&Me.next!==null;if(Ss=0,Ze=Me=Gt=null,Eh=!1,Vl=0,ho=null,t)throw Error(J(300));e===null||Qe||(e=e.dependencies,e!==null&&xh(e)&&(Qe=!0))}function Xx(e,t,n,i){Gt=e;var s=0;do{if(uo&&(ho=null),Vl=0,uo=!1,25<=s)throw Error(J(301));if(s+=1,Ze=Me=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=SS,a=t(n,i)}while(uo);return a}function fR(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?ec(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(Gt.flags|=1024),t}function Ng(){var e=Th!==0;return Th=0,e}function Ug(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Lg(e){if(Eh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eh=!1}Ss=0,Ze=Me=Gt=null,uo=!1,Vl=Th=0,ho=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Gt.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function We(){if(Me===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ze===null?Gt.memoizedState:Ze.next;if(t!==null)Ze=t,Me=e;else{if(e===null)throw Gt.alternate===null?Error(J(467)):Error(J(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ze===null?Gt.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Zh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ec(e){var t=Vl;return Vl+=1,ho===null&&(ho=[]),e=Bx(ho,e,t),t=Gt,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?xS:Vg),e}function Kh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ec(e);if(e.$$typeof===ps)return mn(e)}throw Error(J(438,String(e)))}function Og(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zh(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Q2;return t.index++,n}function Ms(e,t){return typeof t=="function"?t(e):t}function ih(e){var t=We();return Pg(t,Me,e)}function Pg(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ie&d)===d:(Ss&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===go&&(h=!0);else if((Ss&f)===f){c=c.next,f===go&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Gt.lanes|=f,fa|=f;d=c.action,Ka&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Gt.lanes|=d,fa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ti(a,e.memoizedState)&&(Qe=!0,h&&(n=lo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zp(e){var t=We(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ti(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function qx(e,t,n){var i=Gt,s=We(),a=re;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!ti((Me||s).memoizedState,n);if(r&&(s.memoizedState=n,Qe=!0),s=s.queue,Ig(Kx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,vo(9,{destroy:void 0},Zx.bind(null,i,s,n,t),null),be===null)throw Error(J(349));a||(Ss&127)!==0||Yx(i,t,n)}return n}function Yx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Zh(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zx(e,t,n,i){t.value=n,t.getSnapshot=i,Jx(t)&&Qx(e)}function Kx(e,t,n){return n(function(){Jx(t)&&Qx(e)})}function Jx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ti(e,n)}catch{return!0}}function Qx(e){var t=tr(e,2);t!==null&&Bn(t,e,2)}function Bm(e){var t=Dn();if(typeof e=="function"){var n=e;if(e=n(),Ka){Ks(!0);try{n()}finally{Ks(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},t}function jx(e,t,n,i){return e.baseState=n,Pg(e,Me,typeof i=="function"?i:Ms)}function dR(e,t,n,i,s){if(Qh(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,$x(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $x(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),jv(e,t,o)}catch(c){Fm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),jv(e,t,a)}catch(c){Fm(e,t,c)}}function jv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){$v(e,t,i)},function(i){return Fm(e,t,i)}):$v(e,t,n)}function $v(e,t,n){t.status="fulfilled",t.value=n,tS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$x(e,n)))}function Fm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,tS(t),t=t.next;while(t!==i)}e.action=null}function tS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function eS(e,t){return t}function ty(e,t){if(re){var n=be.formState;if(n!==null){t:{var i=Gt;if(re){if(De){e:{for(var s=De,a=pi;s.nodeType!==8;){if(!a){s=null;break e}if(s=gi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){De=gi(s.nextSibling),i=s.data==="F!";break t}}ua(i)}i=!1}i&&(t=n[0])}}return n=Dn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eS,lastRenderedState:t},n.queue=i,n=_S.bind(null,Gt,i),i.dispatch=n,i=Bm(!1),a=Hg.bind(null,Gt,!1,i.queue),i=Dn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=dR.bind(null,Gt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ey(e){var t=We();return nS(t,Me,e)}function nS(e,t,n){if(t=Pg(e,t,eS)[0],e=ih(Ms)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ec(t)}catch(r){throw r===wo?Yh:r}else i=t;t=We();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,vo(9,{destroy:void 0},pR.bind(null,s,n),null)),[i,a,e]}function pR(e,t){e.action=t}function ny(e){var t=We(),n=Me;if(n!==null)return nS(t,n,e);We(),t=t.memoizedState,n=We();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function vo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Zh(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function iS(){return We().memoizedState}function sh(e,t,n,i){var s=Dn();Gt.flags|=e,s.memoizedState=vo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Jh(e,t,n,i){var s=We();i=i===void 0?null:i;var a=s.memoizedState.inst;Me!==null&&i!==null&&Rg(i,Me.memoizedState.deps)?s.memoizedState=vo(t,a,n,i):(Gt.flags|=e,s.memoizedState=vo(1|t,a,n,i))}function iy(e,t){sh(8390656,8,e,t)}function Ig(e,t){Jh(2048,8,e,t)}function mR(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=Zh(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function sS(e){var t=We().memoizedState;return mR({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function aS(e,t){return Jh(4,2,e,t)}function rS(e,t){return Jh(4,4,e,t)}function oS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lS(e,t,n){n=n!=null?n.concat([e]):null,Jh(4,4,oS.bind(null,t,e),n)}function zg(){}function cS(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function uS(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rg(t,i[1]))return i[0];if(i=e(),Ka){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i}function Bg(e,t,n){return n===void 0||(Ss&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=jS(),Gt.lanes|=e,fa|=e,n)}function hS(e,t,n,i){return ti(n,t)?n:_o.current!==null?(e=Bg(e,n,i),ti(e,t)||(Qe=!0),e):(Ss&42)===0||(Ss&1073741824)!==0&&(ie&261930)===0?(Qe=!0,e.memoizedState=n):(e=jS(),Gt.lanes|=e,fa|=e,t)}function fS(e,t,n,i,s){var a=de.p;de.p=a!==0&&8>a?a:8;var r=It.T,o={};It.T=o,Hg(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=uR(l,i);Cl(e,t,h,$n(e))}else Cl(e,t,i,$n(e))}catch(d){Cl(e,t,{then:function(){},status:"rejected",reason:d},$n())}finally{de.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function gR(){}function Hm(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=dS(e).queue;fS(e,s,t,Va,n===null?gR:function(){return pS(e),n(i)})}function dS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:Va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pS(e){var t=dS(e);t.next===null&&(t=e.alternate.memoizedState),Cl(e,t.next.queue,{},$n())}function Fg(){return mn(Xl)}function mS(){return We().memoizedState}function gS(){return We().memoizedState}function _R(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$n();e=na(n);var i=ia(t,e,n);i!==null&&(Bn(i,t,n),Tl(i,t,n)),t={cache:Eg()},e.payload=t;return}t=t.return}}function vR(e,t,n){var i=$n();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qh(e)?vS(t,n):(n=xg(e,t,n,i),n!==null&&(Bn(n,e,i),yS(n,t,i)))}function _S(e,t,n){var i=$n();Cl(e,t,n,i)}function Cl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qh(e))vS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ti(o,r))return qh(e,t,s,0),be===null&&Xh(),!1}catch{}if(n=xg(e,t,s,i),n!==null)return Bn(n,e,i),yS(n,t,i),!0}return!1}function Hg(e,t,n,i){if(i={lane:2,revertLane:Kg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Qh(e)){if(t)throw Error(J(479))}else t=xg(e,n,i,2),t!==null&&Bn(t,e,2)}function Qh(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function vS(e,t){uo=Eh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sx(e,n)}}var Gl={readContext:mn,use:Kh,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};Gl.useEffectEvent=Fe;var xS={readContext:mn,use:Kh,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:iy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sh(4194308,4,oS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sh(4194308,4,e,t)},useInsertionEffect:function(e,t){sh(4,2,e,t)},useMemo:function(e,t){var n=Dn();t=t===void 0?null:t;var i=e();if(Ka){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Dn();if(n!==void 0){var s=n(t);if(Ka){Ks(!0);try{n(t)}finally{Ks(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=vR.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=Bm(e);var t=e.queue,n=_S.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zg,useDeferredValue:function(e,t){var n=Dn();return Bg(n,e,t)},useTransition:function(){var e=Bm(!1);return e=fS.bind(null,Gt,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,s=Dn();if(re){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),be===null)throw Error(J(349));(ie&127)!==0||Yx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,iy(Kx.bind(null,i,a,e),[e]),i.flags|=2048,vo(9,{destroy:void 0},Zx.bind(null,i,a,n,t),null),n},useId:function(){var e=Dn(),t=be.identifierPrefix;if(re){var n=Fi,i=Bi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Th++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=hR++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fg,useFormState:ty,useActionState:ty,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hg.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Og,useCacheRefresh:function(){return Dn().memoizedState=_R.bind(null,Gt)},useEffectEvent:function(e){var t=Dn(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Vg={readContext:mn,use:Kh,useCallback:cS,useContext:mn,useEffect:Ig,useImperativeHandle:lS,useInsertionEffect:aS,useLayoutEffect:rS,useMemo:uS,useReducer:ih,useRef:iS,useState:function(){return ih(Ms)},useDebugValue:zg,useDeferredValue:function(e,t){var n=We();return hS(n,Me.memoizedState,e,t)},useTransition:function(){var e=ih(Ms)[0],t=We().memoizedState;return[typeof e=="boolean"?e:ec(e),t]},useSyncExternalStore:qx,useId:mS,useHostTransitionStatus:Fg,useFormState:ey,useActionState:ey,useOptimistic:function(e,t){var n=We();return jx(n,Me,e,t)},useMemoCache:Og,useCacheRefresh:gS};Vg.useEffectEvent=sS;var SS={readContext:mn,use:Kh,useCallback:cS,useContext:mn,useEffect:Ig,useImperativeHandle:lS,useInsertionEffect:aS,useLayoutEffect:rS,useMemo:uS,useReducer:Zp,useRef:iS,useState:function(){return Zp(Ms)},useDebugValue:zg,useDeferredValue:function(e,t){var n=We();return Me===null?Bg(n,e,t):hS(n,Me.memoizedState,e,t)},useTransition:function(){var e=Zp(Ms)[0],t=We().memoizedState;return[typeof e=="boolean"?e:ec(e),t]},useSyncExternalStore:qx,useId:mS,useHostTransitionStatus:Fg,useFormState:ny,useActionState:ny,useOptimistic:function(e,t){var n=We();return Me!==null?jx(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Og,useCacheRefresh:gS};SS.useEffectEvent=sS;function Kp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=$n(),s=na(i);s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(Bn(t,e,i),Tl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=$n(),s=na(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(Bn(t,e,i),Tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$n(),i=na(n);i.tag=2,t!=null&&(i.callback=t),t=ia(e,i,n),t!==null&&(Bn(t,e,n),Tl(t,e,n))}};function sy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!zl(n,i)||!zl(s,a):!0}function ay(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Vm.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ne({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function MS(e){_h(e)}function bS(e){console.error(e)}function ES(e){_h(e)}function Ah(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ry(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Gm(e,t,n){return n=na(n),n.tag=3,n.payload={element:null},n.callback=function(){Ah(e,t)},n}function TS(e){return e=na(e),e.tag=3,e}function AS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){ry(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ry(t,n,i),typeof s!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function yR(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ao(t,n,s,!0),n=ei.current,n!==null){switch(n.tag){case 31:case 13:return mi===null?Nh():n.alternate===null&&He===0&&(He=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Sh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rm(e,i,s)),!1;case 22:return n.flags|=65536,i===Sh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rm(e,i,s)),!1}throw Error(J(435,n.tag))}return rm(e,i,s),Nh(),!1}if(re)return t=ei.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Rm&&(e=Error(J(422),{cause:i}),Fl(di(e,n)))):(i!==Rm&&(t=Error(J(423),{cause:i}),Fl(di(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=di(i,n),s=Gm(e.stateNode,i,s),Yp(e,s),He!==4&&(He=2)),!1;var a=Error(J(520),{cause:i});if(a=di(a,n),Nl===null?Nl=[a]:Nl.push(a),He!==4&&(He=2),t===null)return!0;i=di(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Gm(n.stateNode,i,e),Yp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=TS(s),AS(s,e,n,i),Yp(n,s),!1}n=n.return}while(n!==null);return!1}var Gg=Error(J(461)),Qe=!1;function fn(e,t,n,i){t.child=e===null?Hx(t,null,n,i):Za(t,e.child,n,i)}function oy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ya(t),i=Dg(e,t,n,r,a,s),o=Ng(),e!==null&&!Qe?(Ug(e,t,s),bs(e,t,s)):(re&&o&&Mg(t),t.flags|=1,fn(e,t,i,s),t.child)}function ly(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Sg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,wS(e,t,a,i,s)):(e=eh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(r,i)&&e.ref===t.ref)return bs(e,t,s)}return t.flags|=1,e=_s(a,i),e.ref=t.ref,e.return=t,t.child=e}function wS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(zl(a,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=a,kg(e,s))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,bs(e,t,s)}return km(e,t,n,i,s)}function CS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return cy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nh(t,a!==null?a.cachePool:null),a!==null?Qv(t,a):Im(),kx(t);else return i=t.lanes=536870912,cy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(nh(t,a.cachePool),Qv(t,a),Ys(t),t.memoizedState=null):(e!==null&&nh(t,null),Im(),Ys(t));return fn(e,t,s,n),t.child}function yl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cy(e,t,n,i,s){var a=Tg();return a=a===null?null:{parent:Je._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&nh(t,null),Im(),kx(t),e!==null&&Ao(e,t,i,!0),t.childLanes=s,null}function ah(e,t){return t=wh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uy(e,t,n){return Za(t,e.child,null,n),e=ah(t,t.pendingProps),e.flags|=2,Yn(t),t.memoizedState=null,e}function xR(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(i.mode==="hidden")return e=ah(t,i),t.lanes=536870912,yl(null,e);if(zm(t),(e=De)?(e=xM(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},n=Lx(e),n.return=t,t.child=n,pn=t,De=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return ah(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(zm(t),s)if(t.flags&256)t.flags&=-257,t=uy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Qe||Ao(e,t,n,!1),s=(n&e.childLanes)!==0,Qe||s){if(i=be,i!==null&&(r=ax(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,tr(e,r),Bn(i,e,r),Gg;Nh(),t=uy(e,t,n)}else e=a.treeContext,De=gi(r.nextSibling),pn=t,re=!0,ea=null,pi=!1,e!==null&&Px(t,e),t=ah(t,i),t.flags|=4096;return t}return e=_s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rh(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function km(e,t,n,i,s){return Ya(t),n=Dg(e,t,n,i,void 0,s),i=Ng(),e!==null&&!Qe?(Ug(e,t,s),bs(e,t,s)):(re&&i&&Mg(t),t.flags|=1,fn(e,t,n,s),t.child)}function hy(e,t,n,i,s,a){return Ya(t),t.updateQueue=null,n=Xx(t,i,n,s),Wx(e),i=Ng(),e!==null&&!Qe?(Ug(e,t,a),bs(e,t,a)):(re&&i&&Mg(t),t.flags|=1,fn(e,t,n,a),t.child)}function fy(e,t,n,i,s){if(Ya(t),t.stateNode===null){var a=eo,r=n.contextType;typeof r=="object"&&r!==null&&(a=mn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},wg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?mn(r):eo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Kp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Vm.enqueueReplaceState(a,a.state,null),wl(t,i,a,s),Al(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ja(n,o);a.props=l;var c=a.context,h=n.contextType;r=eo,typeof h=="object"&&h!==null&&(r=mn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ay(t,a,i,r),Ws=!1;var f=t.memoizedState;a.state=f,wl(t,i,a,s),Al(),c=t.memoizedState,o||f!==c||Ws?(typeof d=="function"&&(Kp(t,n,d,i),c=t.memoizedState),(l=Ws||sy(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Om(e,t),r=t.memoizedProps,h=Ja(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=eo,typeof c=="object"&&c!==null&&(l=mn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&ay(t,a,i,l),Ws=!1,f=t.memoizedState,a.state=f,wl(t,i,a,s),Al();var p=t.memoizedState;r!==d||f!==p||Ws||e!==null&&e.dependencies!==null&&xh(e.dependencies)?(typeof o=="function"&&(Kp(t,n,o,i),p=t.memoizedState),(h=Ws||sy(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&xh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,rh(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Za(t,e.child,null,s),t.child=Za(t,null,n,s)):fn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=bs(e,t,s),e}function dy(e,t,n,i){return qa(),t.flags|=256,fn(e,t,n,i),t.child}var Jp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qp(e){return{baseLanes:e,cachePool:zx()}}function jp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kn),e}function RS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(s?qs(t):Ys(t),(e=De)?(e=xM(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},n=Lx(e),n.return=t,t.child=n,pn=t,De=null)):e=null,e===null)throw ua(t);return ig(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ys(t),s=t.mode,o=wh({mode:"hidden",children:o},s),i=Ga(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Qp(n),i.childLanes=jp(e,r,n),t.memoizedState=Jp,yl(null,i)):(qs(t),Wm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(qs(t),t.flags&=-257,t=$p(e,t,n)):t.memoizedState!==null?(Ys(t),t.child=e.child,t.flags|=128,t=null):(Ys(t),o=i.fallback,s=t.mode,i=wh({mode:"visible",children:i.children},s),o=Ga(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Za(t,e.child,null,n),i=t.child,i.memoizedState=Qp(n),i.childLanes=jp(e,r,n),t.memoizedState=Jp,t=yl(null,i));else if(qs(t),ig(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Fl({value:i,source:null,stack:null}),t=$p(e,t,n)}else if(Qe||Ao(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(r=be,r!==null&&(i=ax(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,tr(e,i),Bn(r,e,i),Gg;ng(o)||Nh(),t=$p(e,t,n)}else ng(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,De=gi(o.nextSibling),pn=t,re=!0,ea=null,pi=!1,e!==null&&Px(t,e),t=Wm(t,i.children),t.flags|=4096);return t}return s?(Ys(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=_s(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=_s(c,o):(o=Ga(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,yl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Qp(n):(s=o.cachePool,s!==null?(l=Je._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=zx(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=jp(e,r,n),t.memoizedState=Jp,yl(e.child,i)):(qs(t),n=e.child,e=n.sibling,n=_s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Wm(e,t){return t=wh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wh(e,t){return e=Zn(22,e,null,t),e.lanes=0,e}function $p(e,t,n){return Za(t,e.child,null,n),e=Wm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function py(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Nm(e.return,t,n)}function tm(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function DS(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ke.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Te(ke,r),fn(e,t,i,n),i=re?Bl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&py(e,n,t);else if(e.tag===19)py(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&bh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),tm(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&bh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}tm(t,!0,n,null,a,i);break;case"together":tm(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function bs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ao(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=_s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xh(e)))}function SR(e,t,n){switch(t.tag){case 3:dh(t,t.stateNode.containerInfo),Xs(t,Je,e.memoizedState.cache),qa();break;case 27:case 5:vm(t);break;case 4:dh(t,t.stateNode.containerInfo);break;case 10:Xs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zm(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(qs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?RS(e,t,n):(qs(t),e=bs(e,t,n),e!==null?e.sibling:null);qs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ao(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return DS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Te(ke,ke.current),i)break;return null;case 22:return t.lanes=0,CS(e,t,n,t.pendingProps);case 24:Xs(t,Je,e.memoizedState.cache)}return bs(e,t,n)}function NS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!kg(e,n)&&(t.flags&128)===0)return Qe=!1,SR(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,re&&(t.flags&1048576)!==0&&Ox(t,Bl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")Sg(e)?(i=Ja(e,i),t.tag=1,t=fy(null,t,e,i,n)):(t.tag=0,t=km(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===og){t.tag=11,t=oy(null,t,e,i,n);break t}else if(s===lg){t.tag=14,t=ly(null,t,e,i,n);break t}}throw t=gm(e)||e,Error(J(306,t,""))}}return t;case 0:return km(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ja(i,t.pendingProps),fy(e,t,i,s,n);case 3:t:{if(dh(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Om(e,t),wl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Xs(t,Je,i),i!==a.cache&&Um(t,[Je],n,!0),Al(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=dy(e,t,i,n);break t}else if(i!==s){s=di(Error(J(424)),t),Fl(s),t=dy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=gi(e.firstChild),pn=t,re=!0,ea=null,pi=!0,n=Hx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qa(),i===s){t=bs(e,t,n);break t}fn(e,t,i,n)}t=t.child}return t;case 26:return rh(e,t),e===null?(n=Iy(t.type,null,t.pendingProps,null))?t.memoizedState=n:re||(n=t.type,e=t.pendingProps,i=Ph(ta.current).createElement(n),i[dn]=t,i[Fn]=e,gn(i,n,e),cn(i),t.stateNode=i):t.memoizedState=Iy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vm(t),e===null&&re&&(i=t.stateNode=SM(t.type,t.pendingProps,ta.current),pn=t,pi=!0,s=De,pa(t.type)?(sg=s,De=gi(i.firstChild)):De=s),fn(e,t,t.pendingProps.children,n),rh(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((s=i=De)&&(i=KR(i,t.type,t.pendingProps,pi),i!==null?(t.stateNode=i,pn=t,De=gi(i.firstChild),pi=!1,s=!0):s=!1),s||ua(t)),vm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,tg(s,a)?i=null:r!==null&&tg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Dg(e,t,fR,null,null,n),Xl._currentValue=s),rh(e,t),fn(e,t,i,n),t.child;case 6:return e===null&&re&&((e=n=De)&&(n=JR(n,t.pendingProps,pi),n!==null?(t.stateNode=n,pn=t,De=null,e=!0):e=!1),e||ua(t)),null;case 13:return RS(e,t,n);case 4:return dh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Za(t,null,i,n):fn(e,t,i,n),t.child;case 11:return oy(e,t,t.type,t.pendingProps,n);case 7:return fn(e,t,t.pendingProps,n),t.child;case 8:return fn(e,t,t.pendingProps.children,n),t.child;case 12:return fn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Xs(t,t.type,i.value),fn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ya(t),s=mn(s),i=i(s),t.flags|=1,fn(e,t,i,n),t.child;case 14:return ly(e,t,t.type,t.pendingProps,n);case 15:return wS(e,t,t.type,t.pendingProps,n);case 19:return DS(e,t,n);case 31:return xR(e,t,n);case 22:return CS(e,t,n,t.pendingProps);case 24:return Ya(t),i=mn(Je),e===null?(s=Tg(),s===null&&(s=be,a=Eg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},wg(t),Xs(t,Je,s)):((e.lanes&n)!==0&&(Om(e,t),wl(t,null,null,n),Al()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Xs(t,Je,i)):(i=a.cache,Xs(t,Je,i),i!==s.cache&&Um(t,[Je],n,!0))),fn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function ls(e){e.flags|=4}function em(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(eM())e.flags|=8192;else throw Wa=Sh,Ag}else e.flags&=-16777217}function my(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!EM(t))if(eM())e.flags|=8192;else throw Wa=Sh,Ag}function Wu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nx():536870912,e.lanes|=t,yo|=t)}function fl(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function MR(e,t,n){var i=t.pendingProps;switch(bg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vs(Je),fo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kr(t)?ls(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qp())),Re(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ls(t),a!==null?(Re(t),my(t,a)):(Re(t),em(t,s,null,i,n))):a?a!==e.memoizedState?(ls(t),Re(t),my(t,a)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ls(t),Re(t),em(t,s,e,i,n)),null;case 27:if(ph(t),n=ta.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ls(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),null}e=Vi.current,kr(t)?Wv(t,e):(e=SM(s,i,n),t.stateNode=e,ls(t))}return Re(t),null;case 5:if(ph(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ls(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),null}if(a=Vi.current,kr(t))Wv(t,a);else{var r=Ph(ta.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[dn]=t,a[Fn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(gn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ls(t)}}return Re(t),em(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ls(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=ta.current,kr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=pn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[dn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||_M(e.nodeValue,n)),e||ua(t,!0)}else e=Ph(e).createTextNode(i),e[dn]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=kr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[dn]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Yn(t),t):(Yn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=kr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[dn]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else s=qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Yn(t),t):(Yn(t),null)}return Yn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wu(t,t.updateQueue),Re(t),null);case 4:return fo(),e===null&&Jg(t.stateNode.containerInfo),Re(t),null;case 10:return vs(t.type),Re(t),null;case 19:if(un(ke),i=t.memoizedState,i===null)return Re(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)fl(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=bh(e),a!==null){for(t.flags|=128,fl(i,!1),e=a.updateQueue,t.updateQueue=e,Wu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ux(n,e),n=n.sibling;return Te(ke,ke.current&1|2),re&&fs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Jn()>Rh&&(t.flags|=128,s=!0,fl(i,!1),t.lanes=4194304)}else{if(!s)if(e=bh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Wu(t,e),fl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!re)return Re(t),null}else 2*Jn()-i.renderingStartTime>Rh&&n!==536870912&&(t.flags|=128,s=!0,fl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Jn(),e.sibling=null,n=ke.current,Te(ke,s?n&1|2:n&1),re&&fs(t,i.treeForkCount),e):(Re(t),null);case 22:case 23:return Yn(t),Cg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Wu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&un(ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vs(Je),Re(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function bR(e,t){switch(bg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vs(Je),fo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ph(t),null;case 31:if(t.memoizedState!==null){if(Yn(t),t.alternate===null)throw Error(J(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return un(ke),null;case 4:return fo(),null;case 10:return vs(t.type),null;case 22:case 23:return Yn(t),Cg(),e!==null&&un(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vs(Je),null;case 25:return null;default:return null}}function US(e,t){switch(bg(t),t.tag){case 3:vs(Je),fo();break;case 26:case 27:case 5:ph(t);break;case 4:fo();break;case 31:t.memoizedState!==null&&Yn(t);break;case 13:Yn(t);break;case 19:un(ke);break;case 10:vs(t.type);break;case 22:case 23:Yn(t),Cg(),e!==null&&un(ka);break;case 24:vs(Je)}}function nc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ye(t,t.return,o)}}function ha(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ye(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ye(t,t.return,h)}}function LS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Gx(t,n)}catch(i){ye(e,e.return,i)}}}function OS(e,t,n){n.props=Ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ye(e,t,i)}}function Rl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ye(e,t,s)}}function Hi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ye(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ye(e,t,s)}else n.current=null}function PS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ye(e,e.return,s)}}function nm(e,t,n){try{var i=e.stateNode;kR(i,e.type,n,t),i[Fn]=t}catch(s){ye(e,e.return,s)}}function IS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function im(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||IS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ms));else if(i!==4&&(i===27&&pa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xm(e,t,n),e=e.sibling;e!==null;)Xm(e,t,n),e=e.sibling}function Ch(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&pa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ch(e,t,n),e=e.sibling;e!==null;)Ch(e,t,n),e=e.sibling}function zS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gn(t,i,n),t[dn]=e,t[Fn]=n}catch(a){ye(e,e.return,a)}}var ds=!1,Ke=!1,sm=!1,gy=typeof WeakSet=="function"?WeakSet:Set,ln=null;function ER(e,t){if(e=e.containerInfo,jm=Fh,e=Ex(e),vg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($m={focusedElem:e,selectionRange:n},Fh=!1,ln=t;ln!==null;)if(t=ln,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ln=e;else for(;ln!==null;){switch(t=ln,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=Ja(n.type,s);e=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){ye(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)eg(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,ln=e;break}ln=t.return}}function BS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:us(e,n),i&4&&nc(5,n);break;case 1:if(us(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ye(n,n.return,r)}else{var s=Ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ye(n,n.return,r)}}i&64&&LS(n),i&512&&Rl(n,n.return);break;case 3:if(us(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Gx(e,t)}catch(r){ye(n,n.return,r)}}break;case 27:t===null&&i&4&&zS(n);case 26:case 5:us(e,n),t===null&&i&4&&PS(n),i&512&&Rl(n,n.return);break;case 12:us(e,n);break;case 31:us(e,n),i&4&&VS(e,n);break;case 13:us(e,n),i&4&&GS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=LR.bind(null,n),QR(e,n))));break;case 22:if(i=n.memoizedState!==null||ds,!i){t=t!==null&&t.memoizedState!==null||Ke,s=ds;var a=Ke;ds=i,(Ke=t)&&!a?hs(e,n,(n.subtreeFlags&8772)!==0):us(e,n),ds=s,Ke=a}break;case 30:break;default:us(e,n)}}function FS(e){var t=e.alternate;t!==null&&(e.alternate=null,FS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,In=!1;function cs(e,t,n){for(n=n.child;n!==null;)HS(e,t,n),n=n.sibling}function HS(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 26:Ke||Hi(n,t),cs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||Hi(n,t);var i=Pe,s=In;pa(n.type)&&(Pe=n.stateNode,In=!1),cs(e,t,n),Ll(n.stateNode),Pe=i,In=s;break;case 5:Ke||Hi(n,t);case 6:if(i=Pe,s=In,Pe=null,cs(e,t,n),Pe=i,In=s,Pe!==null)if(In)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(a){ye(n,t,a)}else try{Pe.removeChild(n.stateNode)}catch(a){ye(n,t,a)}break;case 18:Pe!==null&&(In?(e=Pe,Ny(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),bo(e)):Ny(Pe,n.stateNode));break;case 4:i=Pe,s=In,Pe=n.stateNode.containerInfo,In=!0,cs(e,t,n),Pe=i,In=s;break;case 0:case 11:case 14:case 15:ha(2,n,t),Ke||ha(4,n,t),cs(e,t,n);break;case 1:Ke||(Hi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&OS(n,t,i)),cs(e,t,n);break;case 21:cs(e,t,n);break;case 22:Ke=(i=Ke)||n.memoizedState!==null,cs(e,t,n),Ke=i;break;default:cs(e,t,n)}}function VS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bo(e)}catch(n){ye(t,t.return,n)}}}function GS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(n){ye(t,t.return,n)}}function TR(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gy),t;default:throw Error(J(435,e.tag))}}function Xu(e,t){var n=TR(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=OR.bind(null,e,i);i.then(s,s)}})}function On(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(pa(o.type)){Pe=o.stateNode,In=!1;break t}break;case 5:Pe=o.stateNode,In=!1;break t;case 3:case 4:Pe=o.stateNode.containerInfo,In=!0;break t}o=o.return}if(Pe===null)throw Error(J(160));HS(a,r,s),Pe=null,In=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kS(t,e),t=t.sibling}var Ri=null;function kS(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:On(t,e),Pn(e),i&4&&(ha(3,e,e.return),nc(3,e),ha(5,e,e.return));break;case 1:On(t,e),Pn(e),i&512&&(Ke||n===null||Hi(n,n.return)),i&64&&ds&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Ri;if(On(t,e),Pn(e),i&512&&(Ke||n===null||Hi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[jl]||a[dn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),gn(a,i,n),a[dn]=e,cn(a),i=a;break t;case"link":var r=By("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),gn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=By("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),gn(a,i,n),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[dn]=e,cn(a),i=a}e.stateNode=i}else Fy(s,e.type,e.stateNode);else e.stateNode=zy(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?Fy(s,e.type,e.stateNode):zy(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&nm(e,e.memoizedProps,n.memoizedProps)}break;case 27:On(t,e),Pn(e),i&512&&(Ke||n===null||Hi(n,n.return)),n!==null&&i&4&&nm(e,e.memoizedProps,n.memoizedProps);break;case 5:if(On(t,e),Pn(e),i&512&&(Ke||n===null||Hi(n,n.return)),e.flags&32){s=e.stateNode;try{mo(s,"")}catch(v){ye(e,e.return,v)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,nm(e,s,n!==null?n.memoizedProps:s)),i&1024&&(sm=!0);break;case 6:if(On(t,e),Pn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ye(e,e.return,v)}}break;case 3:if(ch=null,s=Ri,Ri=Ih(t.containerInfo),On(t,e),Ri=s,Pn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(v){ye(e,e.return,v)}sm&&(sm=!1,WS(e));break;case 4:i=Ri,Ri=Ih(e.stateNode.containerInfo),On(t,e),Pn(e),Ri=i;break;case 12:On(t,e),Pn(e);break;case 31:On(t,e),Pn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xu(e,i)));break;case 13:On(t,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jh=Jn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xu(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ds,h=Ke;if(ds=c||s,Ke=h||l,On(t,e),Ke=h,ds=c,Pn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ds||Ke||Ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(v){ye(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(v){ye(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Uy(p,!0):Uy(l.stateNode,!1)}catch(v){ye(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Xu(e,n))));break;case 19:On(t,e),Pn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xu(e,i)));break;case 30:break;case 21:break;default:On(t,e),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(IS(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var s=n.stateNode,a=im(e);Ch(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(mo(r,""),n.flags&=-33);var o=im(e);Ch(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=im(e);Xm(e,c,l);break;default:throw Error(J(161))}}catch(h){ye(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function WS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;WS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function us(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)BS(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),Ha(t);break;case 1:Hi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&OS(t,t.return,n),Ha(t);break;case 27:Ll(t.stateNode);case 26:case 5:Hi(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function hs(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:hs(s,a,n),nc(4,a);break;case 1:if(hs(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ye(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Vx(l[s],o)}catch(c){ye(i,i.return,c)}}n&&r&64&&LS(a),Rl(a,a.return);break;case 27:zS(a);case 26:case 5:hs(s,a,n),n&&i===null&&r&4&&PS(a),Rl(a,a.return);break;case 12:hs(s,a,n);break;case 31:hs(s,a,n),n&&r&4&&VS(s,a);break;case 13:hs(s,a,n),n&&r&4&&GS(s,a);break;case 22:a.memoizedState===null&&hs(s,a,n),Rl(a,a.return);break;case 30:break;default:hs(s,a,n)}t=t.sibling}}function Wg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&tc(n))}function Xg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tc(e))}function Ci(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)XS(e,t,n,i),t=t.sibling}function XS(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ci(e,t,n,i),s&2048&&nc(9,t);break;case 1:Ci(e,t,n,i);break;case 3:Ci(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tc(e)));break;case 12:if(s&2048){Ci(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ye(t,t.return,l)}}else Ci(e,t,n,i);break;case 31:Ci(e,t,n,i);break;case 13:Ci(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Ci(e,t,n,i):Dl(e,t):a._visibility&2?Ci(e,t,n,i):(a._visibility|=2,Xr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Wg(r,t);break;case 24:Ci(e,t,n,i),s&2048&&Xg(t.alternate,t);break;default:Ci(e,t,n,i)}}function Xr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Xr(a,r,o,l,s),nc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Xr(a,r,o,l,s):Dl(a,r):(h._visibility|=2,Xr(a,r,o,l,s)),s&&c&2048&&Wg(r.alternate,r);break;case 24:Xr(a,r,o,l,s),s&&c&2048&&Xg(r.alternate,r);break;default:Xr(a,r,o,l,s)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Dl(n,i),s&2048&&Wg(i.alternate,i);break;case 24:Dl(n,i),s&2048&&Xg(i.alternate,i);break;default:Dl(n,i)}t=t.sibling}}var xl=8192;function Wr(e,t,n){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)qS(e,t,n),e=e.sibling}function qS(e,t,n){switch(e.tag){case 26:Wr(e,t,n),e.flags&xl&&e.memoizedState!==null&&c3(n,Ri,e.memoizedState,e.memoizedProps);break;case 5:Wr(e,t,n);break;case 3:case 4:var i=Ri;Ri=Ih(e.stateNode.containerInfo),Wr(e,t,n),Ri=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=xl,xl=16777216,Wr(e,t,n),xl=i):Wr(e,t,n));break;default:Wr(e,t,n)}}function YS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,KS(i,e)}YS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ZS(e),e=e.sibling}function ZS(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&ha(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oh(e)):dl(e);break;default:dl(e)}}function oh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,KS(i,e)}YS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ha(8,t,t.return),oh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,oh(t));break;default:oh(t)}e=e.sibling}}function KS(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:ha(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:tc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ln=i;else t:for(n=e;ln!==null;){i=ln;var s=i.sibling,a=i.return;if(FS(i),i===n){ln=null;break t}if(s!==null){s.return=a,ln=s;break t}ln=a}}}var AR={getCacheForType:function(e){var t=mn(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return mn(Je).controller.signal}},wR=typeof WeakMap=="function"?WeakMap:Map,fe=0,be=null,te=null,ie=0,ve=0,qn=null,Qs=!1,Co=!1,qg=!1,Es=0,He=0,fa=0,Xa=0,Yg=0,Kn=0,yo=0,Nl=null,zn=null,qm=!1,jh=0,JS=0,Rh=1/0,Dh=null,sa=null,an=0,aa=null,xo=null,ys=0,Ym=0,Zm=null,QS=null,Ul=0,Km=null;function $n(){return(fe&2)!==0&&ie!==0?ie&-ie:It.T!==null?Kg():rx()}function jS(){if(Kn===0)if((ie&536870912)===0||re){var e=Pu;Pu<<=1,(Pu&3932160)===0&&(Pu=262144),Kn=e}else Kn=536870912;return e=ei.current,e!==null&&(e.flags|=32),Kn}function Bn(e,t,n){(e===be&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(So(e,0),js(e,ie,Kn,!1)),Ql(e,n),((fe&2)===0||e!==be)&&(e===be&&((fe&2)===0&&(Xa|=n),He===4&&js(e,ie,Kn,!1)),ki(e))}function $S(e,t,n){if((fe&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),s=i?DR(e,t):am(e,t,!0),a=i;do{if(s===0){Co&&!i&&js(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!CR(n)){s=am(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Nl;var l=o.current.memoizedState.isDehydrated;if(l&&(So(o,r).flags|=256),r=am(o,r,!1),r!==2){if(qg&&!l){o.errorRecoveryDisabledLanes|=a,Xa|=a,s=4;break t}a=zn,zn=s,a!==null&&(zn===null?zn=a:zn.push.apply(zn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){So(e,0),js(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:js(i,t,Kn,!Qs);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=jh+300-Jn(),10<s)){if(js(i,t,Kn,!Qs),Vh(i,0,!0)!==0)break t;ys=t,i.timeoutHandle=yM(_y.bind(null,i,n,zn,Dh,qm,t,Kn,Xa,yo,Qs,a,"Throttled",-0,0),s);break t}_y(i,n,zn,Dh,qm,t,Kn,Xa,yo,Qs,a,null,-0,0)}}break}while(!0);ki(e)}function _y(e,t,n,i,s,a,r,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ms},qS(t,a,d);var v=(a&62914560)===a?jh-Jn():(a&4194048)===a?JS-Jn():0;if(v=u3(d,v),v!==null){ys=a,e.cancelPendingCommit=v(yy.bind(null,e,t,a,n,i,s,r,o,l,h,d,null,f,p)),js(e,a,r,!c);return}}yy(e,t,a,n,i,s,r,o,l)}function CR(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ti(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function js(e,t,n,i){t&=~Yg,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-jn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ix(e,n,t)}function $h(){return(fe&6)===0?(ic(0,!1),!1):!0}function Zg(){if(te!==null){if(ve===0)var e=te.return;else e=te,gs=er=null,Lg(e),co=null,Hl=0,e=te;for(;e!==null;)US(e.alternate,e),e=e.return;te=null}}function So(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ys=0,Zg(),be=e,te=n=_s(e.current,null),ie=t,ve=0,qn=null,Qs=!1,Co=Jl(e,t),qg=!1,yo=Kn=Yg=Xa=fa=He=0,zn=Nl=null,qm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-jn(i),a=1<<s;t|=e[s],i&=~a}return Es=t,Xh(),n}function tM(e,t){Gt=null,It.H=Gl,t===wo||t===Yh?(t=Kv(),ve=3):t===Ag?(t=Kv(),ve=4):ve=t===Gg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qn=t,te===null&&(He=1,Ah(e,di(t,e.current)))}function eM(){var e=ei.current;return e===null?!0:(ie&4194048)===ie?mi===null:(ie&62914560)===ie||(ie&536870912)!==0?e===mi:!1}function nM(){var e=It.H;return It.H=Gl,e===null?Gl:e}function iM(){var e=It.A;return It.A=AR,e}function Nh(){He=4,Qs||(ie&4194048)!==ie&&ei.current!==null||(Co=!0),(fa&134217727)===0&&(Xa&134217727)===0||be===null||js(be,ie,Kn,!1)}function am(e,t,n){var i=fe;fe|=2;var s=nM(),a=iM();(be!==e||ie!==t)&&(Dh=null,So(e,t)),t=!1;var r=He;t:do try{if(ve!==0&&te!==null){var o=te,l=qn;switch(ve){case 8:Zg(),r=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(t=!0);var c=ve;if(ve=0,qn=null,so(e,o,l,c),n&&Co){r=0;break t}break;default:c=ve,ve=0,qn=null,so(e,o,l,c)}}RR(),r=He;break}catch(h){tM(e,h)}while(!0);return t&&e.shellSuspendCounter++,gs=er=null,fe=i,It.H=s,It.A=a,te===null&&(be=null,ie=0,Xh()),r}function RR(){for(;te!==null;)sM(te)}function DR(e,t){var n=fe;fe|=2;var i=nM(),s=iM();be!==e||ie!==t?(Dh=null,Rh=Jn()+500,So(e,t)):Co=Jl(e,t);t:do try{if(ve!==0&&te!==null){t=te;var a=qn;e:switch(ve){case 1:ve=0,qn=null,so(e,t,a,1);break;case 2:case 9:if(Zv(a)){ve=0,qn=null,vy(t);break}t=function(){ve!==2&&ve!==9||be!==e||(ve=7),ki(e)},a.then(t,t);break t;case 3:ve=7;break t;case 4:ve=5;break t;case 7:Zv(a)?(ve=0,qn=null,vy(t)):(ve=0,qn=null,so(e,t,a,7));break;case 5:var r=null;switch(te.tag){case 26:r=te.memoizedState;case 5:case 27:var o=te;if(r?EM(r):o.stateNode.complete){ve=0,qn=null;var l=o.sibling;if(l!==null)te=l;else{var c=o.return;c!==null?(te=c,tf(c)):te=null}break e}}ve=0,qn=null,so(e,t,a,5);break;case 6:ve=0,qn=null,so(e,t,a,6);break;case 8:Zg(),He=6;break t;default:throw Error(J(462))}}NR();break}catch(h){tM(e,h)}while(!0);return gs=er=null,It.H=i,It.A=s,fe=n,te!==null?0:(be=null,ie=0,Xh(),He)}function NR(){for(;te!==null&&!tC();)sM(te)}function sM(e){var t=NS(e.alternate,e,Es);e.memoizedProps=e.pendingProps,t===null?tf(e):te=t}function vy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hy(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=hy(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Lg(t);default:US(n,t),t=te=Ux(t,Es),t=NS(n,t,Es)}e.memoizedProps=e.pendingProps,t===null?tf(e):te=t}function so(e,t,n,i){gs=er=null,Lg(t),co=null,Hl=0;var s=t.return;try{if(yR(e,s,t,n,ie)){He=1,Ah(e,di(n,e.current)),te=null;return}}catch(a){if(s!==null)throw te=s,a;He=1,Ah(e,di(n,e.current)),te=null;return}t.flags&32768?(re||i===1?e=!0:Co||(ie&536870912)!==0?e=!1:(Qs=e=!0,(i===2||i===9||i===3||i===6)&&(i=ei.current,i!==null&&i.tag===13&&(i.flags|=16384))),aM(t,e)):tf(t)}function tf(e){var t=e;do{if((t.flags&32768)!==0){aM(t,Qs);return}e=t.return;var n=MR(t.alternate,t,Es);if(n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);He===0&&(He=5)}function aM(e,t){do{var n=bR(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);He=6,te=null}function yy(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do ef();while(an!==0);if((fe&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(a=t.lanes|t.childLanes,a|=yg,uC(e,n,a,r,o,l),e===be&&(te=be=null,ie=0),xo=t,aa=e,ys=n,Ym=a,Zm=s,QS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,PR(mh,function(){return uM(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=de.p,de.p=2,r=fe,fe|=4;try{ER(e,t,n)}finally{fe=r,de.p=s,It.T=i}}an=1,rM(),oM(),lM()}}function rM(){if(an===1){an=0;var e=aa,t=xo,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=It.T,It.T=null;var i=de.p;de.p=2;var s=fe;fe|=4;try{kS(t,e);var a=$m,r=Ex(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&bx(o.ownerDocument.documentElement,o)){if(l!==null&&vg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!p.extend&&x>m&&(r=m,m=x,x=r);var u=Vv(o,x),g=Vv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var S=d[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Fh=!!jm,$m=jm=null}finally{fe=s,de.p=i,It.T=n}}e.current=t,an=2}}function oM(){if(an===2){an=0;var e=aa,t=xo,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=de.p;de.p=2;var s=fe;fe|=4;try{BS(e,t.alternate,t)}finally{fe=s,de.p=i,It.T=n}}an=3}}function lM(){if(an===4||an===3){an=0,eC();var e=aa,t=xo,n=ys,i=QS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?an=5:(an=0,xo=aa=null,cM(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(sa=null),hg(n),t=t.stateNode,Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=It.T,s=de.p,de.p=2,It.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{It.T=t,de.p=s}}(ys&3)!==0&&ef(),ki(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Km?Ul++:(Ul=0,Km=e):Ul=0,ic(0,!1)}}function cM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tc(t)))}function ef(){return rM(),oM(),lM(),uM()}function uM(){if(an!==5)return!1;var e=aa,t=Ym;Ym=0;var n=hg(ys),i=It.T,s=de.p;try{de.p=32>n?32:n,It.T=null,n=Zm,Zm=null;var a=aa,r=ys;if(an=0,xo=aa=null,ys=0,(fe&6)!==0)throw Error(J(331));var o=fe;if(fe|=4,ZS(a.current),XS(a,a.current,r,n),fe=o,ic(0,!1),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Kl,a)}catch{}return!0}finally{de.p=s,It.T=i,cM(e,t)}}function xy(e,t,n){t=di(n,t),t=Gm(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Ql(e,2),ki(e))}function ye(e,t,n){if(e.tag===3)xy(e,e,n);else for(;t!==null;){if(t.tag===3){xy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))){e=di(n,e),n=TS(2),i=ia(t,n,2),i!==null&&(AS(n,i,t,e),Ql(i,2),ki(i));break}}t=t.return}}function rm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new wR;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(qg=!0,s.add(n),e=UR.bind(null,e,t,n),t.then(e,e))}function UR(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,be===e&&(ie&n)===n&&(He===4||He===3&&(ie&62914560)===ie&&300>Jn()-jh?(fe&2)===0&&So(e,0):Yg|=n,yo===ie&&(yo=0)),ki(e)}function hM(e,t){t===0&&(t=nx()),e=tr(e,t),e!==null&&(Ql(e,t),ki(e))}function LR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hM(e,n)}function OR(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),hM(e,n)}function PR(e,t){return cg(e,t)}var Uh=null,qr=null,Jm=!1,Lh=!1,om=!1,$s=0;function ki(e){e!==qr&&e.next===null&&(qr===null?Uh=qr=e:qr=qr.next=e),Lh=!0,Jm||(Jm=!0,zR())}function ic(e,t){if(!om&&Lh){om=!0;do for(var n=!1,i=Uh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-jn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sy(i,a))}else a=ie,a=Vh(i,i===be?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Jl(i,a)||(n=!0,Sy(i,a));i=i.next}while(n);om=!1}}function IR(){fM()}function fM(){Lh=Jm=!1;var e=0;$s!==0&&XR()&&(e=$s);for(var t=Jn(),n=null,i=Uh;i!==null;){var s=i.next,a=dM(i,t);a===0?(i.next=null,n===null?Uh=s:n.next=s,s===null&&(qr=n)):(n=i,(e!==0||(a&3)!==0)&&(Lh=!0)),i=s}an!==0&&an!==5||ic(e,!1),$s!==0&&($s=0)}function dM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-jn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=cC(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=be,n=ie,n=Vh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ip(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ip(i),hg(n)){case 2:case 8:n=tx;break;case 32:n=mh;break;case 268435456:n=ex;break;default:n=mh}return i=pM.bind(null,e),n=cg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ip(i),e.callbackPriority=2,e.callbackNode=null,2}function pM(e,t){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ef()&&e.callbackNode!==n)return null;var i=ie;return i=Vh(e,e===be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:($S(e,i,t),dM(e,Jn()),e.callbackNode!=null&&e.callbackNode===n?pM.bind(null,e):null)}function Sy(e,t){if(ef())return null;$S(e,t,!0)}function zR(){YR(function(){(fe&6)!==0?cg($y,IR):fM()})}function Kg(){if($s===0){var e=go;e===0&&(e=Ou,Ou<<=1,(Ou&261888)===0&&(Ou=256)),$s=e}return $s}function My(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ju(""+e)}function by(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function BR(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=My((s[Fn]||null).action),r=i.submitter;r&&(t=(t=r[Fn]||null)?My(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Gh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($s!==0){var l=r?by(s,r):new FormData(s);Hm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?by(s,r):new FormData(s),Hm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(qu=0;qu<Cm.length;qu++)Yu=Cm[qu],Ey=Yu.toLowerCase(),Ty=Yu[0].toUpperCase()+Yu.slice(1),Di(Ey,"on"+Ty);var Yu,Ey,Ty,qu;Di(Ax,"onAnimationEnd");Di(wx,"onAnimationIteration");Di(Cx,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(nR,"onTransitionRun");Di(iR,"onTransitionStart");Di(sR,"onTransitionCancel");Di(Rx,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function mM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){_h(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){_h(h)}s.currentTarget=null,a=l}}}}function $t(e,t){var n=t[xm];n===void 0&&(n=t[xm]=new Set);var i=e+"__bubble";n.has(i)||(gM(t,e,2,!1),n.add(i))}function lm(e,t,n){var i=0;t&&(i|=4),gM(n,e,i,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function Jg(e){if(!e[Zu]){e[Zu]=!0,ox.forEach(function(n){n!=="selectionchange"&&(FR.has(n)||lm(n,!1,e),lm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zu]||(t[Zu]=!0,lm("selectionchange",!1,t))}}function gM(e,t,n,i){switch(RM(t)){case 2:var s=d3;break;case 8:s=p3;break;default:s=t0}n=s.bind(null,t,n,e),s=void 0,!Tm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cm(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Kr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}mx(function(){var c=a,h=pg(n),d=[];t:{var f=Dx.get(e);if(f!==void 0){var p=Gh,v=e;switch(e){case"keypress":if(th(n)===0)break t;case"keydown":case"keyup":p=OC;break;case"focusin":v="focus",p=Vp;break;case"focusout":v="blur",p=Vp;break;case"beforeblur":case"afterblur":p=Vp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=MC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zC;break;case Ax:case wx:case Cx:p=TC;break;case Rx:p=FC;break;case"scroll":case"scrollend":p=xC;break;case"wheel":p=VC;break;case"copy":case"cut":case"paste":p=wC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ov;break;case"toggle":case"beforetoggle":p=kC}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,_;g!==null;){var S=g;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||u===null||(S=Pl(g,u),S!=null&&x.push(Wl(g,S,_))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Em&&(v=n.relatedTarget||n.fromElement)&&(Kr(v)||v[Eo]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Kr(v):null,v!==null&&(m=Zl(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Uv,S="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ov,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:vl(p),_=v==null?f:vl(v),f=new x(S,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,S=null,Kr(h)===c&&(x=new x(u,g+"enter",v,n,h),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)e:{for(x=HR,u=p,g=v,_=0,S=u;S;S=x(S))_++;S=0;for(var R=g;R;R=x(R))S++;for(;0<_-S;)u=x(u),_--;for(;0<S-_;)g=x(g),S--;for(;_--;){if(u===g||g!==null&&u===g.alternate){x=u;break e}u=x(u),g=x(g)}x=null}else x=null;p!==null&&Ay(d,f,p,x,!1),v!==null&&m!==null&&Ay(d,m,v,x,!0)}}t:{if(f=c?vl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Bv;else if(zv(f))if(Sx)C=$C;else{C=QC;var T=JC}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&dg(c.elementType)&&(C=Bv):C=jC;if(C&&(C=C(e,c))){xx(d,C,n,h);break t}T&&T(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&bm(f,"number",f.value)}switch(T=c?vl(c):window,e){case"focusin":(zv(T)||T.contentEditable==="true")&&(jr=T,Am=c,bl=null);break;case"focusout":bl=Am=jr=null;break;case"mousedown":wm=!0;break;case"contextmenu":case"mouseup":case"dragend":wm=!1,Gv(d,n,h);break;case"selectionchange":if(eR)break;case"keydown":case"keyup":Gv(d,n,h)}var D;if(_g)t:{switch(e){case"compositionstart":var k="onCompositionStart";break t;case"compositionend":k="onCompositionEnd";break t;case"compositionupdate":k="onCompositionUpdate";break t}k=void 0}else Qr?vx(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(_x&&n.locale!=="ko"&&(Qr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Qr&&(D=gx()):(Js=h,mg="value"in Js?Js.value:Js.textContent,Qr=!0)),T=Oh(c,k),0<T.length&&(k=new Lv(k,e,null,n,h),d.push({event:k,listeners:T}),D?k.data=D:(D=yx(n),D!==null&&(k.data=D)))),(D=XC?qC(e,n):YC(e,n))&&(k=Oh(c,"onBeforeInput"),0<k.length&&(T=new Lv("onBeforeInput","beforeinput",null,n,h),d.push({event:T,listeners:k}),T.data=D)),BR(d,e,c,n,h)}mM(d,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Pl(e,n),s!=null&&i.unshift(Wl(e,s,a)),s=Pl(e,t),s!=null&&i.push(Wl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function HR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ay(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Pl(n,a),c!=null&&r.unshift(Wl(n,c,l))):s||(c=Pl(n,a),c!=null&&r.push(Wl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var VR=/\r\n?/g,GR=/\u0000|\uFFFD/g;function wy(e){return(typeof e=="string"?e:""+e).replace(VR,`
`).replace(GR,"")}function _M(e,t){return t=wy(t),wy(e)===t}function Se(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||mo(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&mo(e,""+i);break;case"className":zu(e,"class",i);break;case"tabIndex":zu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zu(e,n,i);break;case"style":px(e,i,a);break;case"data":if(t!=="object"){zu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ju(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",s.name,s,null),Se(e,t,"formEncType",s.formEncType,s,null),Se(e,t,"formMethod",s.formMethod,s,null),Se(e,t,"formTarget",s.formTarget,s,null)):(Se(e,t,"encType",s.encType,s,null),Se(e,t,"method",s.method,s,null),Se(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ju(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ms);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ju(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":$t("beforetoggle",e),$t("toggle",e),Qu(e,"popover",i);break;case"xlinkActuate":os(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":os(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":os(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":os(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":os(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":os(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":os(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":os(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":os(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Qu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vC.get(n)||n,Qu(e,n,i))}}function Qm(e,t,n,i,s,a){switch(n){case"style":px(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?mo(e,i):(typeof i=="number"||typeof i=="bigint")&&mo(e,""+i);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ms);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Fn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Qu(e,n,i)}}}function gn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",e),$t("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Se(e,t,a,r,n,null)}}s&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":$t("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:Se(e,t,i,h,n,null)}}hx(e,a,o,l,c,r,s,!1);return;case"select":$t("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Se(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?ro(e,!!i,t,!1):n!=null&&ro(e,!!i,n,!0);return;case"textarea":$t("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:Se(e,t,r,o,n,null)}dx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Se(e,t,l,i,n,null));return;case"dialog":$t("beforetoggle",e),$t("toggle",e),$t("cancel",e),$t("close",e);break;case"iframe":case"object":$t("load",e);break;case"video":case"audio":for(i=0;i<kl.length;i++)$t(kl[i],e);break;case"image":$t("error",e),$t("load",e);break;case"details":$t("toggle",e);break;case"embed":case"source":case"link":$t("error",e),$t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Se(e,t,c,i,n,null)}return;default:if(dg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Qm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Se(e,t,o,i,n,null))}function kR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||Se(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&Se(e,t,f,p,i,d)}}Mm(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||Se(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Se(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?ro(e,!!n,f,!1):!!i!=!!n&&(t!=null?ro(e,!!n,t,!0):ro(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Se(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&Se(e,t,r,s,i,a)}fx(e,f,p);return;case"option":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:Se(e,t,v,null,i,f));for(l in i)f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null)&&(l==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":Se(e,t,l,f,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&Se(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:Se(e,t,c,f,i,p)}return;default:if(dg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Qm(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Qm(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&Se(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||Se(e,t,d,f,i,p)}function Cy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Cy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Cy(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jm=null,$m=null;function Ph(e){return e.nodeType===9?e:e.ownerDocument}function Ry(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var um=null;function XR(){var e=window.event;return e&&e.type==="popstate"?e===um?!1:(um=e,!0):(um=null,!1)}var yM=typeof setTimeout=="function"?setTimeout:void 0,qR=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,YR=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(e){return Dy.resolve(null).then(e).catch(ZR)}:yM;function ZR(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Ny(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),bo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ll(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ll(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[jl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Ll(e.ownerDocument.body);n=s}while(n);bo(t)}function Uy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function eg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":eg(n),fg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function KR(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function JR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function xM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gi(e.nextSibling),e===null))return null;return e}function ng(e){return e.data==="$?"||e.data==="$~"}function ig(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function gi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sg=null;function Ly(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Oy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function SM(e,t,n){switch(t=Ph(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fg(e)}var _i=new Map,Py=new Set;function Ih(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ts=de.d;de.d={f:jR,r:$R,D:t3,C:e3,L:n3,m:i3,X:a3,S:s3,M:r3};function jR(){var e=Ts.f(),t=$h();return e||t}function $R(e){var t=To(e);t!==null&&t.tag===5&&t.type==="form"?pS(t):Ts.r(e)}var Ro=typeof document>"u"?null:document;function MM(e,t,n){var i=Ro;if(i&&typeof t=="string"&&t){var s=fi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Py.has(s)||(Py.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gn(t,"link",e),cn(t),i.head.appendChild(t)))}}function t3(e){Ts.D(e),MM("dns-prefetch",e,null)}function e3(e,t){Ts.C(e,t),MM("preconnect",e,t)}function n3(e,t,n){Ts.L(e,t,n);var i=Ro;if(i&&e&&t){var s='link[rel="preload"][as="'+fi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+fi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+fi(n.imageSizes)+'"]')):s+='[href="'+fi(e)+'"]';var a=s;switch(t){case"style":a=Mo(e);break;case"script":a=Do(e)}_i.has(a)||(e=Ne({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),_i.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(sc(a))||t==="script"&&i.querySelector(ac(a))||(t=i.createElement("link"),gn(t,"link",e),cn(t),i.head.appendChild(t)))}}function i3(e,t){Ts.m(e,t);var n=Ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+fi(i)+'"][href="'+fi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Do(e)}if(!_i.has(a)&&(e=Ne({rel:"modulepreload",href:e},t),_i.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ac(a)))return}i=n.createElement("link"),gn(i,"link",e),cn(i),n.head.appendChild(i)}}}function s3(e,t,n){Ts.S(e,t,n);var i=Ro;if(i&&e){var s=ao(i).hoistableStyles,a=Mo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(sc(a)))o.loading=5;else{e=Ne({rel:"stylesheet",href:e,"data-precedence":t},n),(n=_i.get(a))&&Qg(e,n);var l=r=i.createElement("link");cn(l),gn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,lh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function a3(e,t){Ts.X(e,t);var n=Ro;if(n&&e){var i=ao(n).hoistableScripts,s=Do(e),a=i.get(s);a||(a=n.querySelector(ac(s)),a||(e=Ne({src:e,async:!0},t),(t=_i.get(s))&&jg(e,t),a=n.createElement("script"),cn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function r3(e,t){Ts.M(e,t);var n=Ro;if(n&&e){var i=ao(n).hoistableScripts,s=Do(e),a=i.get(s);a||(a=n.querySelector(ac(s)),a||(e=Ne({src:e,async:!0,type:"module"},t),(t=_i.get(s))&&jg(e,t),a=n.createElement("script"),cn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Iy(e,t,n,i){var s=(s=ta.current)?Ih(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Mo(n.href),n=ao(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Mo(n.href);var a=ao(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(sc(e)))&&!a._p&&(r.instance=a,r.state.loading=5),_i.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_i.set(e,n),a||o3(s,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Do(n),n=ao(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Mo(e){return'href="'+fi(e)+'"'}function sc(e){return'link[rel="stylesheet"]['+e+"]"}function bM(e){return Ne({},e,{"data-precedence":e.precedence,precedence:null})}function o3(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gn(t,"link",n),cn(t),e.head.appendChild(t))}function Do(e){return'[src="'+fi(e)+'"]'}function ac(e){return"script[async]"+e}function zy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+fi(n.href)+'"]');if(i)return t.instance=i,cn(i),i;var s=Ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),cn(i),gn(i,"style",s),lh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Mo(n.href);var a=e.querySelector(sc(s));if(a)return t.state.loading|=4,t.instance=a,cn(a),a;i=bM(n),(s=_i.get(s))&&Qg(i,s),a=(e.ownerDocument||e).createElement("link"),cn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),t.state.loading|=4,lh(a,n.precedence,e),t.instance=a;case"script":return a=Do(n.src),(s=e.querySelector(ac(a)))?(t.instance=s,cn(s),s):(i=n,(s=_i.get(a))&&(i=Ne({},n),jg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),cn(s),gn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,lh(i,n.precedence,e));return t.instance}function lh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ch=null;function By(e,t,n){if(ch===null){var i=new Map,s=ch=new Map;s.set(n,i)}else s=ch,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[jl]||a[dn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Fy(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function l3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function EM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function c3(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Mo(i.href),a=t.querySelector(sc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,cn(a);return}a=t.ownerDocument||t,i=bM(i),(s=_i.get(s))&&Qg(i,s),a=a.createElement("link"),cn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=zh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hm=0;function u3(e,t){return e.stylesheets&&e.count===0&&uh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&uh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&hm===0&&(hm=62500*WR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>hm?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function zh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bh=null;function uh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bh=new Map,t.forEach(h3,e),Bh=null,zh.call(e))}function h3(e,t){if(!(t.state.loading&4)){var n=Bh.get(e);if(n)var i=n.get(null);else{n=new Map,Bh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=zh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Xl={$$typeof:ps,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function f3(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zp(0),this.hiddenUpdates=zp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function TM(e,t,n,i,s,a,r,o,l,c,h,d){return e=new f3(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=Zn(3,null,null,t),e.current=a,a.stateNode=e,t=Eg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},wg(a),e}function AM(e){return e?(e=eo,e):eo}function wM(e,t,n,i,s,a){s=AM(s),i.context===null?i.context=s:i.pendingContext=s,i=na(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ia(e,i,t),n!==null&&(Bn(n,e,t),Tl(n,e,t))}function Hy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $g(e,t){Hy(e,t),(e=e.alternate)&&Hy(e,t)}function CM(e){if(e.tag===13||e.tag===31){var t=tr(e,67108864);t!==null&&Bn(t,e,67108864),$g(e,67108864)}}function Vy(e){if(e.tag===13||e.tag===31){var t=$n();t=ug(t);var n=tr(e,t);n!==null&&Bn(n,e,t),$g(e,t)}}var Fh=!0;function d3(e,t,n,i){var s=It.T;It.T=null;var a=de.p;try{de.p=2,t0(e,t,n,i)}finally{de.p=a,It.T=s}}function p3(e,t,n,i){var s=It.T;It.T=null;var a=de.p;try{de.p=8,t0(e,t,n,i)}finally{de.p=a,It.T=s}}function t0(e,t,n,i){if(Fh){var s=ag(i);if(s===null)cm(e,t,i,Hh,n),Gy(e,i);else if(g3(s,e,t,n,i))i.stopPropagation();else if(Gy(e,i),t&4&&-1<m3.indexOf(e)){for(;s!==null;){var a=To(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ba(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-jn(r);o.entanglements[1]|=l,r&=~l}ki(a),(fe&6)===0&&(Rh=Jn()+500,ic(0,!1))}}break;case 31:case 13:o=tr(a,2),o!==null&&Bn(o,a,2),$h(),$g(a,2)}if(a=ag(i),a===null&&cm(e,t,i,Hh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else cm(e,t,i,null,n)}}function ag(e){return e=pg(e),e0(e)}var Hh=null;function e0(e){if(Hh=null,e=Kr(e),e!==null){var t=Zl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Zy(t),e!==null)return e;e=null}else if(n===31){if(e=Ky(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hh=e,null}function RM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nC()){case $y:return 2;case tx:return 8;case mh:case iC:return 32;case ex:return 268435456;default:return 32}default:return 32}}var rg=!1,ra=null,oa=null,la=null,ql=new Map,Yl=new Map,Zs=[],m3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gy(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(t.pointerId)}}function pl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=To(t),t!==null&&CM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function g3(e,t,n,i,s){switch(t){case"focusin":return ra=pl(ra,e,t,n,i,s),!0;case"dragenter":return oa=pl(oa,e,t,n,i,s),!0;case"mouseover":return la=pl(la,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ql.set(a,pl(ql.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Yl.set(a,pl(Yl.get(a)||null,e,t,n,i,s)),!0}return!1}function DM(e){var t=Kr(e.target);if(t!==null){var n=Zl(t);if(n!==null){if(t=n.tag,t===13){if(t=Zy(n),t!==null){e.blockedOn=t,Tv(e.priority,function(){Vy(n)});return}}else if(t===31){if(t=Ky(n),t!==null){e.blockedOn=t,Tv(e.priority,function(){Vy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ag(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Em=i,n.target.dispatchEvent(i),Em=null}else return t=To(n),t!==null&&CM(t),e.blockedOn=n,!1;t.shift()}return!0}function ky(e,t,n){hh(e)&&n.delete(t)}function _3(){rg=!1,ra!==null&&hh(ra)&&(ra=null),oa!==null&&hh(oa)&&(oa=null),la!==null&&hh(la)&&(la=null),ql.forEach(ky),Yl.forEach(ky)}function Ku(e,t){e.blockedOn===t&&(e.blockedOn=null,rg||(rg=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,_3)))}var Ju=null;function Wy(e){Ju!==e&&(Ju=e,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,function(){Ju===e&&(Ju=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(e0(i||n)===null)continue;break}var a=To(n);a!==null&&(e.splice(t,3),t-=3,Hm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function bo(e){function t(l){return Ku(l,e)}ra!==null&&Ku(ra,e),oa!==null&&Ku(oa,e),la!==null&&Ku(la,e),ql.forEach(t),Yl.forEach(t);for(var n=0;n<Zs.length;n++){var i=Zs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Zs.length&&(n=Zs[0],n.blockedOn===null);)DM(n),n.blockedOn===null&&Zs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Fn]||null;if(typeof a=="function")r||Wy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Fn]||null)o=r.formAction;else if(e0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Wy(n)}}}function NM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function n0(e){this._internalRoot=e}nf.prototype.render=n0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=$n();wM(n,i,e,t,null,null)};nf.prototype.unmount=n0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wM(e.current,2,null,e,null,null),$h(),t[Eo]=null}};function nf(e){this._internalRoot=e}nf.prototype.unstable_scheduleHydration=function(e){if(e){var t=rx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zs.length&&t!==0&&t<Zs[n].priority;n++);Zs.splice(n,0,e),n===0&&DM(e)}};var Xy=qy.version;if(Xy!=="19.2.8")throw Error(J(527,Xy,"19.2.8"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=K2(t),e=e!==null?Jy(e):null,e=e===null?null:e.stateNode,e};var v3={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ml=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ml.isDisabled&&ml.supportsFiber))try{Kl=ml.inject(v3),Qn=ml}catch{}var ml;sf.createRoot=function(e,t){if(!Yy(e))throw Error(J(299));var n=!1,i="",s=MS,a=bS,r=ES;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=TM(e,1,!1,null,null,n,i,null,s,a,r,NM),e[Eo]=t.current,Jg(e),new n0(t)};sf.hydrateRoot=function(e,t,n){if(!Yy(e))throw Error(J(299));var i=!1,s="",a=MS,r=bS,o=ES,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=TM(e,1,!0,t,n??null,i,s,l,a,r,o,NM),t.context=AM(null),n=t.current,i=$n(),i=ug(i),s=na(i),s.callback=null,ia(n,s,i),n=i,t.current.lanes=n,Ql(t,n),ki(t),e[Eo]=t.current,Jg(e),new nf(t)};sf.version="19.2.8"});var PM=Ni((O3,OM)=>{"use strict";function LM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LM)}catch(e){console.error(e)}}LM(),OM.exports=UM()});var Jt=ma(Uo(),1);var La={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ob=0,v0=1,lb=2;var E_=1,cb=2,Ki=3,zs=0,Sn=1,Ji=2,Ps=0,Ar=1,kc=2,y0=3,x0=4,ub=5,ba=100,hb=101,fb=102,db=103,pb=104,mb=200,gb=201,_b=202,vb=203,Zf=204,Kf=205,yb=206,xb=207,Sb=208,Mb=209,bb=210,Eb=211,Tb=212,Ab=213,wb=214,Jf=0,Qf=1,jf=2,Dr=3,$f=4,td=5,ed=6,nd=7,T_=0,Cb=1,Rb=2,Is=0,Db=1,Nb=2,Ub=3,hp=4,Lb=5,Ob=6,Pb=7;var A_=300,Nr=301,Ur=302,id=303,sd=304,Mu=306,qo=1e3,Ta=1001,ad=1002,ai=1003,Ib=1004;var oc=1005;var bi=1006,mf=1007;var Aa=1008;var es=1009,w_=1010,C_=1011,Yo=1012,fp=1013,wa=1014,Qi=1015,il=1016,dp=1017,pp=1018,Lr=1020,R_=35902,D_=1021,N_=1022,Ti=1023,U_=1024,L_=1025,wr=1026,Or=1027,O_=1028,mp=1029,P_=1030,gp=1031;var _p=1033,zc=33776,Bc=33777,Fc=33778,Hc=33779,rd=35840,od=35841,ld=35842,cd=35843,ud=36196,hd=37492,fd=37496,dd=37808,pd=37809,md=37810,gd=37811,_d=37812,vd=37813,yd=37814,xd=37815,Sd=37816,Md=37817,bd=37818,Ed=37819,Td=37820,Ad=37821,Vc=36492,wd=36494,Cd=36495,I_=36283,Rd=36284,Dd=36285,Nd=36286;var Wc=2300,Ud=2301,gf=2302,S0=2400,M0=2401,b0=2402;var zb=3200,Bb=3201;var z_=0,Fb=1,Ls="",Ui="srgb",Hs="srgb-linear",vp="display-p3",bu="display-p3-linear",Xc="linear",we="srgb",qc="rec709",Yc="p3";var or=7680;var E0=519,Hb=512,Vb=513,Gb=514,B_=515,kb=516,Wb=517,Xb=518,qb=519,Ld=35044;var T0="300 es",ji=2e3,Zc=2001,ns=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],A0=1234567,ko=Math.PI/180,Zo=180/Math.PI;function ts(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[e&255]+vn[e>>8&255]+vn[e>>16&255]+vn[e>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function xn(e,t,n){return Math.max(t,Math.min(n,e))}function yp(e,t){return(e%t+t)%t}function Yb(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Zb(e,t,n){return e!==t?(n-e)/(t-e):0}function Wo(e,t,n){return(1-n)*e+n*t}function Kb(e,t,n,i){return Wo(e,t,1-Math.exp(-n*i))}function Jb(e,t=1){return t-Math.abs(yp(e,t*2)-t)}function Qb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function jb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function $b(e,t){return e+Math.floor(Math.random()*(t-e+1))}function t1(e,t){return e+Math.random()*(t-e)}function e1(e){return e*(.5-Math.random())}function n1(e){e!==void 0&&(A0=e);let t=A0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i1(e){return e*ko}function s1(e){return e*Zo}function a1(e){return(e&e-1)===0&&e!==0}function r1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function o1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function l1(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function _e(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var F_={DEG2RAD:ko,RAD2DEG:Zo,generateUUID:ts,clamp:xn,euclideanModulo:yp,mapLinear:Yb,inverseLerp:Zb,lerp:Wo,damp:Kb,pingpong:Jb,smoothstep:Qb,smootherstep:jb,randInt:$b,randFloat:t1,randFloatSpread:e1,seededRandom:n1,degToRad:i1,radToDeg:s1,isPowerOfTwo:a1,ceilPowerOfTwo:r1,floorPowerOfTwo:o1,setQuaternionFromProperEuler:l1,normalize:_e,denormalize:Ei},Lt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=s[0],m=s[3],u=s[6],g=s[1],_=s[4],S=s[7],R=s[2],C=s[5],T=s[8];return a[0]=r*x+o*g+l*R,a[3]=r*m+o*_+l*C,a[6]=r*u+o*S+l*T,a[1]=c*x+h*g+d*R,a[4]=c*m+h*_+d*C,a[7]=c*u+h*S+d*T,a[2]=f*x+p*g+v*R,a[5]=f*m+p*_+v*C,a[8]=f*u+p*S+v*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,v=n*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(_f.makeScale(t,n)),this}rotate(t){return this.premultiply(_f.makeRotation(-t)),this}translate(t,n){return this.premultiply(_f.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_f=new Kt;function H_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function c1(){let e=Kc("canvas");return e.style.display="block",e}var w0={};function Gc(e){e in w0||(w0[e]=!0,console.warn(e))}function u1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function h1(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function f1(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var C0=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),R0=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[Hs]:{transfer:Xc,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Ui]:{transfer:we,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[bu]:{transfer:Xc,primaries:Yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(R0),fromReference:e=>e.applyMatrix3(C0)},[vp]:{transfer:we,primaries:Yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(R0),fromReference:e=>e.applyMatrix3(C0).convertLinearToSRGB()}},d1=new Set([Hs,bu]),ge={enabled:!0,_workingColorSpace:Hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!d1.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Lo[t].toReference,s=Lo[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Lo[e].primaries},getTransfer:function(e){return e===Ls?Xc:Lo[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Lo[t].luminanceCoefficients)}};function Cr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var lr,Od=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=Kc("canvas")),lr.width=t.width,lr.height=t.height;let i=lr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Kc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Cr(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cr(n[i]/255)*255):n[i]=Cr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},p1=0,Jc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(yf(s[r].image)):a.push(yf(s[r]))}else a=yf(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function yf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Od.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var m1=0,Wn=class e extends ns{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ta,s=Ta,a=bi,r=Aa,o=Ti,l=es,c=e.DEFAULT_ANISOTROPY,h=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ts(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=A_;Wn.DEFAULT_ANISOTROPY=1;var Be=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,S=(p+1)/2,R=(u+1)/2,C=(h+f)/4,T=(d+x)/4,D=(v+m)/4;return _>S&&_>R?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=C/i,a=T/i):S>R?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=C/s,a=D/s):R<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),i=T/a,s=D/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pd=class extends ns{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Be(0,0,t,n),this.scissorTest=!1,this.viewport=new Be(0,0,t,n);let s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new Jc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},is=class extends Pd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Qc=class extends Wn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Id=class extends Wn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],v=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o,u=l*f+c*p+h*v+d*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let R=Math.sqrt(_),C=Math.atan2(R,u*g);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}let S=o*g;if(l=l*m+f*S,c=c*m+p*S,h=h*m+v*S,d=d*m+x*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],v=a[r+3];return t[n]=o*v+h*d+l*p-c*f,t[n+1]=l*v+h*f+c*d-o*p,t[n+2]=c*v+h*p+o*f-l*d,t[n+3]=h*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(D0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(D0.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xf.copy(this).projectOnVector(t),this.sub(xf)}reflect(t){return this.sub(xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xf=new P,D0=new Ai,Ca=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(a,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lc.copy(i.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),cc.subVectors(this.max,Oo),cr.subVectors(t.a,Oo),ur.subVectors(t.b,Oo),hr.subVectors(t.c,Oo),ws.subVectors(ur,cr),Cs.subVectors(hr,ur),ga.subVectors(cr,hr);let n=[0,-ws.z,ws.y,0,-Cs.z,Cs.y,0,-ga.z,ga.y,ws.z,0,-ws.x,Cs.z,0,-Cs.x,ga.z,0,-ga.x,-ws.y,ws.x,0,-Cs.y,Cs.x,0,-ga.y,ga.x,0];return!Sf(n,cr,ur,hr,cc)||(n=[1,0,0,0,1,0,0,0,1],!Sf(n,cr,ur,hr,cc))?!1:(uc.crossVectors(ws,Cs),n=[uc.x,uc.y,uc.z],Sf(n,cr,ur,hr,cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wi=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,lc=new Ca,cr=new P,ur=new P,hr=new P,ws=new P,Cs=new P,ga=new P,Oo=new P,cc=new P,uc=new P,_a=new P;function Sf(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){_a.fromArray(e,a);let o=s.x*Math.abs(_a.x)+s.y*Math.abs(_a.y)+s.z*Math.abs(_a.z),l=t.dot(_a),c=n.dot(_a),h=i.dot(_a);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var g1=new Ca,Po=new P,Mf=new P,Ra=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):g1.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);let n=Po.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Po,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Mf)),this.expandByPoint(Po.copy(t.center).sub(Mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new P,bf=new P,hc=new P,Rs=new P,Ef=new P,fc=new P,Tf=new P,Da=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Xi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){bf.copy(t).add(n).multiplyScalar(.5),hc.copy(n).sub(t).normalize(),Rs.copy(this.origin).sub(bf);let a=t.distanceTo(n)*.5,r=-this.direction.dot(hc),o=Rs.dot(this.direction),l=-Rs.dot(hc),c=Rs.lengthSq(),h=Math.abs(1-r*r),d,f,p,v;if(h>0)if(d=r*l-o,f=r*o-l,v=a*h,d>=0)if(f>=-v)if(f<=v){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bf).addScaledVector(hc,f),p}intersectSphere(t,n){Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,n,i,s,a){Ef.subVectors(n,t),fc.subVectors(i,t),Tf.crossVectors(Ef,fc);let r=this.direction.dot(Tf),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rs.subVectors(this.origin,t);let l=o*this.direction.dot(fc.crossVectors(Rs,fc));if(l<0)return null;let c=o*this.direction.dot(Ef.cross(Rs));if(c<0||l+c>r)return null;let h=-o*Rs.dot(Tf);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,v,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,v,x,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,v,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),a=1/fr.setFromMatrixColumn(t,1).length(),r=1/fr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,v=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,v=o*h,x=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_1,t,v1)}lookAt(t,n,i){let s=this.elements;return Gn.subVectors(t,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Ds.crossVectors(i,Gn),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Ds.crossVectors(i,Gn)),Ds.normalize(),dc.crossVectors(Gn,Ds),s[0]=Ds.x,s[4]=dc.x,s[8]=Gn.x,s[1]=Ds.y,s[5]=dc.y,s[9]=Gn.y,s[2]=Ds.z,s[6]=dc.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],g=i[3],_=i[7],S=i[11],R=i[15],C=s[0],T=s[4],D=s[8],k=s[12],y=s[1],E=s[5],V=s[9],L=s[13],H=s[2],Z=s[6],B=s[10],Q=s[14],W=s[3],st=s[7],pt=s[11],xt=s[15];return a[0]=r*C+o*y+l*H+c*W,a[4]=r*T+o*E+l*Z+c*st,a[8]=r*D+o*V+l*B+c*pt,a[12]=r*k+o*L+l*Q+c*xt,a[1]=h*C+d*y+f*H+p*W,a[5]=h*T+d*E+f*Z+p*st,a[9]=h*D+d*V+f*B+p*pt,a[13]=h*k+d*L+f*Q+p*xt,a[2]=v*C+x*y+m*H+u*W,a[6]=v*T+x*E+m*Z+u*st,a[10]=v*D+x*V+m*B+u*pt,a[14]=v*k+x*L+m*Q+u*xt,a[3]=g*C+_*y+S*H+R*W,a[7]=g*T+_*E+S*Z+R*st,a[11]=g*D+_*V+S*B+R*pt,a[15]=g*k+_*L+S*Q+R*xt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,_=v*f*c-h*m*c-v*l*p+r*m*p+h*l*u-r*f*u,S=h*x*c-v*d*c+v*o*p-r*x*p-h*o*u+r*d*u,R=v*d*l-h*x*l-v*o*f+r*x*f+h*o*m-r*d*m,C=n*g+i*_+s*S+a*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return t[0]=g*T,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*T,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*T,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*T,t[4]=_*T,t[5]=(h*m*a-v*f*a+v*s*p-n*m*p-h*s*u+n*f*u)*T,t[6]=(v*l*a-r*m*a-v*s*c+n*m*c+r*s*u-n*l*u)*T,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*T,t[8]=S*T,t[9]=(v*d*a-h*x*a-v*i*p+n*x*p+h*i*u-n*d*u)*T,t[10]=(r*x*a-v*o*a+v*i*c-n*x*c-r*i*u+n*o*u)*T,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=R*T,t[13]=(h*x*s-v*d*s+v*i*f-n*x*f-h*i*m+n*d*m)*T,t[14]=(v*o*s-r*x*s-v*i*l+n*x*l+r*i*m-n*o*m)*T,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*T,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,v=a*d,x=r*h,m=r*d,u=o*d,g=l*c,_=l*h,S=l*d,R=i.x,C=i.y,T=i.z;return s[0]=(1-(x+u))*R,s[1]=(p+S)*R,s[2]=(v-_)*R,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(v+_)*T,s[9]=(m-g)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=fr.set(s[0],s[1],s[2]).length(),r=fr.set(s[4],s[5],s[6]).length(),o=fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);let c=1/a,h=1/r,d=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,n.setFromRotationMatrix(xi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ji){let l=this.elements,c=2*a/(n-t),h=2*a/(i-s),d=(n+t)/(n-t),f=(i+s)/(i-s),p,v;if(o===ji)p=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===Zc)p=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ji){let l=this.elements,c=1/(n-t),h=1/(i-s),d=1/(r-a),f=(n+t)*c,p=(i+s)*h,v,x;if(o===ji)v=(r+a)*d,x=-2*d;else if(o===Zc)v=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},fr=new P,xi=new Le,_1=new P(0,0,0),v1=new P(1,1,1),Ds=new P,dc=new P,Gn=new P,N0=new Le,U0=new Ai,Oi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return N0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return U0.setFromEuler(this),this.setFromQuaternion(U0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var jc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},y1=0,L0=new P,dr=new Ai,qi=new Le,pc=new P,Io=new P,x1=new P,S1=new Ai,O0=new P(1,0,0),P0=new P(0,1,0),I0=new P(0,0,1),z0={type:"added"},M1={type:"removed"},pr={type:"childadded",child:null},Af={type:"childremoved",child:null},tn=class e extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new Oi,i=new Ai,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Kt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return dr.setFromAxisAngle(t,n),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,n){return dr.setFromAxisAngle(t,n),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(O0,t)}rotateY(t){return this.rotateOnAxis(P0,t)}rotateZ(t){return this.rotateOnAxis(I0,t)}translateOnAxis(t,n){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(O0,t)}translateY(t){return this.translateOnAxis(P0,t)}translateZ(t){return this.translateOnAxis(I0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?pc.copy(t):pc.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Io,pc,this.up):qi.lookAt(pc,Io,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(qi),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z0),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(M1),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z0),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,x1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,S1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new P,Yi=new P,wf=new P,Zi=new P,mr=new P,gr=new P,B0=new P,Cf=new P,Rf=new P,Df=new P,Nf=new Be,Uf=new Be,Lf=new Be,Os=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Si.subVectors(t,n),s.cross(Si);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Si.subVectors(s,n),Yi.subVectors(i,n),wf.subVectors(t,n);let r=Si.dot(Si),o=Si.dot(Yi),l=Si.dot(wf),c=Yi.dot(Yi),h=Yi.dot(wf),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,v=(r*h-o*l)*f;return a.set(1-p-v,v,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Zi.x),l.addScaledVector(r,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Nf.setScalar(0),Uf.setScalar(0),Lf.setScalar(0),Nf.fromBufferAttribute(t,n),Uf.fromBufferAttribute(t,i),Lf.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Nf,a.x),r.addScaledVector(Uf,a.y),r.addScaledVector(Lf,a.z),r}static isFrontFacing(t,n,i,s){return Si.subVectors(i,n),Yi.subVectors(t,n),Si.cross(Yi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Si.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;mr.subVectors(s,i),gr.subVectors(a,i),Cf.subVectors(t,i);let l=mr.dot(Cf),c=gr.dot(Cf);if(l<=0&&c<=0)return n.copy(i);Rf.subVectors(t,s);let h=mr.dot(Rf),d=gr.dot(Rf);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(mr,r);Df.subVectors(t,a);let p=mr.dot(Df),v=gr.dot(Df);if(v>=0&&p<=v)return n.copy(a);let x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(gr,o);let m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return B0.subVectors(a,s),o=(d-h)/(d-h+(p-v)),n.copy(s).addScaledVector(B0,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(mr,r).addScaledVector(gr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Of(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ft=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=ge.workingColorSpace){return this.r=t,this.g=n,this.b=i,ge.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=ge.workingColorSpace){if(t=yp(t,1),n=xn(n,0,1),i=xn(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Of(r,a,t+1/3),this.g=Of(r,a,t),this.b=Of(r,a,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,n=Ui){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ui){let i=V_[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}copyLinearToSRGB(t){return this.r=vf(t.r),this.g=vf(t.g),this.b=vf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return ge.fromWorkingColorSpace(yn.copy(this),t),Math.round(xn(yn.r*255,0,255))*65536+Math.round(xn(yn.g*255,0,255))*256+Math.round(xn(yn.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ge.workingColorSpace){ge.fromWorkingColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ge.workingColorSpace){return ge.fromWorkingColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Ui){ge.fromWorkingColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==Ui?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+n,Ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ns),t.getHSL(mc);let i=Wo(Ns.h,mc.h,n),s=Wo(Ns.s,mc.s,n),a=Wo(Ns.l,mc.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Ft;Ft.NAMES=V_;var b1=0,Pi=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ar,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Kf,this.blendEquation=ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==ba&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ko=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new P,gc=new Lt,Mn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ld,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gc.fromBufferAttribute(this,n),gc.applyMatrix3(t),this.setXY(n,gc.x,gc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(t,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(t,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(t,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array),s=_e(s,this.array),a=_e(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ld&&(t.usage=this.usage),t}};var $c=class extends Mn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var tu=class extends Mn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ye=class extends Mn{constructor(t,n,i){super(new Float32Array(t),n,i)}},E1=0,si=new Le,Pf=new tn,_r=new P,kn=new Ca,zo=new Ca,on=new P,bn=class e extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H_(t)?tu:$c)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,n,i){return si.makeTranslation(t,n,i),this.applyMatrix4(si),this}scale(t,n,i){return si.makeScale(t,n,i),this.applyMatrix4(si),this}lookAt(t){return Pf.lookAt(t),Pf.updateMatrix(),this.applyMatrix4(Pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ye(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];kn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];zo.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(kn.min,zo.min),kn.expandByPoint(on),on.addVectors(kn.max,zo.max),kn.expandByPoint(on)):(kn.expandByPoint(zo.min),kn.expandByPoint(zo.max))}kn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)on.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(on));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(t,c),on.add(_r)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;let c=new P,h=new P,d=new P,f=new Lt,p=new Lt,v=new Lt,x=new P,m=new P;function u(D,k,y){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,k),d.fromBufferAttribute(i,y),f.fromBufferAttribute(a,D),p.fromBufferAttribute(a,k),v.fromBufferAttribute(a,y),h.sub(c),d.sub(c),p.sub(f),v.sub(f);let E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(E),o[D].add(x),o[k].add(x),o[y].add(x),l[D].add(m),l[k].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,k=g.length;D<k;++D){let y=g[D],E=y.start,V=y.count;for(let L=E,H=E+V;L<H;L+=3)u(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new P,S=new P,R=new P,C=new P;function T(D){R.fromBufferAttribute(s,D),C.copy(R);let k=o[D];_.copy(k),_.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(C,k);let E=S.dot(l[D])<0?-1:1;r.setXYZW(D,_.x,_.y,_.z,E)}for(let D=0,k=g.length;D<k;++D){let y=g[D],E=y.start,V=y.count;for(let L=E,H=E+V;L<H;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)on.fromBufferAttribute(t,n),on.normalize(),t.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Mn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},F0=new Le,va=new Da,_c=new Ra,H0=new P,vc=new P,yc=new P,xc=new P,If=new P,Sc=new P,V0=new P,Mc=new P,Ce=class extends tn{constructor(t=new bn,n=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Sc.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(If.fromBufferAttribute(d,t),r?Sc.addScaledVector(If,h):Sc.addScaledVector(If.sub(n),h))}n.add(Sc)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(a),va.copy(t.ray).recast(t.near),!(_c.containsPoint(va.origin)===!1&&(va.intersectSphere(_c,H0)===null||va.origin.distanceToSquared(H0)>(t.far-t.near)**2))&&(F0.copy(a).invert(),va.copy(t.ray).applyMatrix4(F0),!(i.boundingBox!==null&&va.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,va)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){let C=o.getX(S),T=o.getX(S+1),D=o.getX(S+2);s=bc(this,u,t,i,c,h,d,C,T,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);s=bc(this,r,t,i,c,h,d,g,_,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],u=r[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){let C=S,T=S+1,D=S+2;s=bc(this,u,t,i,c,h,d,C,T,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){let g=m,_=m+1,S=m+2;s=bc(this,r,t,i,c,h,d,g,_,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function T1(e,t,n,i,s,a,r,o){let l;if(t.side===Sn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===zs,o),l===null)return null;Mc.copy(o),Mc.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Mc);return c<n.near||c>n.far?null:{distance:c,point:Mc.clone(),object:e}}function bc(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,vc),e.getVertexPosition(l,yc),e.getVertexPosition(c,xc);let h=T1(e,t,n,i,vc,yc,xc,V0);if(h){let d=new P;Os.getBarycoord(V0,vc,yc,xc,d),s&&(h.uv=Os.getInterpolatedAttribute(s,o,l,c,d,new Lt)),a&&(h.uv1=Os.getInterpolatedAttribute(a,o,l,c,d,new Lt)),r&&(h.normal=Os.getInterpolatedAttribute(r,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};Os.getNormal(vc,yc,xc,f.normal),h.face=f,h.barycoord=d}return h}var Bs=class e extends bn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function v(x,m,u,g,_,S,R,C,T,D,k){let y=S/T,E=R/D,V=S/2,L=R/2,H=C/2,Z=T+1,B=D+1,Q=0,W=0,st=new P;for(let pt=0;pt<B;pt++){let xt=pt*E-L;for(let ee=0;ee<Z;ee++){let se=ee*y-V;st[x]=se*g,st[m]=xt*_,st[u]=H,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[u]=C>0?1:-1,h.push(st.x,st.y,st.z),d.push(ee/T),d.push(1-pt/D),Q+=1}}for(let pt=0;pt<D;pt++)for(let xt=0;xt<T;xt++){let ee=f+xt+Z*pt,se=f+xt+Z*(pt+1),Y=f+(xt+1)+Z*(pt+1),nt=f+(xt+1)+Z*pt;l.push(ee,se,nt),l.push(se,Y,nt),W+=6}o.addGroup(p,W,k),p+=W,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Pr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function An(e){let t={};for(let n=0;n<e.length;n++){let i=Pr(e[n]);for(let s in i)t[s]=i[s]}return t}function A1(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function G_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var w1={clone:Pr,merge:An},C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=A1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},eu=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ji}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Us=new P,G0=new Lt,k0=new Lt,wn=class extends eu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-t/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-t/Us.z)}getViewSize(t,n){return this.getViewBounds(t,G0,k0),n.subVectors(k0,G0)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(ko*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},vr=-90,yr=1,zd=class extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(vr,yr,t,n);s.layers=this.layers,this.add(s);let a=new wn(vr,yr,t,n);a.layers=this.layers,this.add(a);let r=new wn(vr,yr,t,n);r.layers=this.layers,this.add(r);let o=new wn(vr,yr,t,n);o.layers=this.layers,this.add(o);let l=new wn(vr,yr,t,n);l.layers=this.layers,this.add(l);let c=new wn(vr,yr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},nu=class extends Wn{constructor(t,n,i,s,a,r,o,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:Nr,super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bd=class extends is{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nu(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ps});a.uniforms.tEquirect.value=n;let r=new Ce(s,a),o=n.minFilter;return n.minFilter===Aa&&(n.minFilter=bi),new zd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},zf=new P,D1=new P,N1=new Kt,Mi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=zf.subVectors(i,n).cross(D1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(zf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||N1.getNormalMatrix(t),s=this.coplanarPoint(zf).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ya=new Ra,Ec=new P,Jo=class{constructor(t=new Mi,n=new Mi,i=new Mi,s=new Mi,a=new Mi,r=new Mi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ji){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],v=s[9],x=s[10],m=s[11],u=s[12],g=s[13],_=s[14],S=s[15];if(i[0].setComponents(l-a,f-c,m-p,S-u).normalize(),i[1].setComponents(l+a,f+c,m+p,S+u).normalize(),i[2].setComponents(l+r,f+h,m+v,S+g).normalize(),i[3].setComponents(l-r,f-h,m-v,S-g).normalize(),i[4].setComponents(l-o,f-d,m-x,S-_).normalize(),n===ji)i[5].setComponents(l+o,f+d,m+x,S+_).normalize();else if(n===Zc)i[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ya.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ya)}intersectsSprite(t){return ya.center.set(0,0,0),ya.radius=.7071067811865476,ya.applyMatrix4(t.matrixWorld),this.intersectsSphere(ya)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ec.x=s.normal.x>0?t.max.x:t.min.x,Ec.y=s.normal.y>0?t.max.y:t.min.y,Ec.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function k_(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function U1(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){let v=d[f],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Fs=class e extends bn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){let g=u*f-r;for(let _=0;_<c;_++){let S=_*d-a;v.push(S,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let _=g+c*u,S=g+c*(u+1),R=g+1+c*(u+1),C=g+1+c*u;p.push(_,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
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
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
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
#endif`,H1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`#ifdef USE_BATCHING
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
#endif`,G1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q1=`#ifdef USE_IRIDESCENCE
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
#endif`,Y1=`#ifdef USE_BUMPMAP
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nE=`#define PI 3.141592653589793
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
} // validated`,iE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sE=`vec3 transformedNormal = objectNormal;
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
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cE="gl_FragColor = linearToOutputTexel( gl_FragColor );",uE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
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
}`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EE=`uniform bool receiveShadow;
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
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DE=`PhysicalMaterial material;
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
#endif`,NE=`struct PhysicalMaterial {
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
}`,UE=`
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GE=`#if defined( USE_POINTS_UV )
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
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
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
#endif`,KE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_T=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,xT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`#include <common>
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
}`,FT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,VT=`#define DISTANCE
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
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
}`,XT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#define LAMBERT
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
}`,KT=`#define LAMBERT
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
}`,JT=`#define MATCAP
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
}`,QT=`#define MATCAP
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
}`,jT=`#define NORMAL
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
}`,$T=`#define NORMAL
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
}`,tA=`#define PHONG
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
}`,eA=`#define PHONG
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
}`,nA=`#define STANDARD
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
}`,iA=`#define STANDARD
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
}`,sA=`#define TOON
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
}`,aA=`#define TOON
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
}`,rA=`uniform float size;
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#include <common>
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
}`,cA=`uniform vec3 color;
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
}`,uA=`uniform float rotation;
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
}`,hA=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:L1,alphahash_pars_fragment:O1,alphamap_fragment:P1,alphamap_pars_fragment:I1,alphatest_fragment:z1,alphatest_pars_fragment:B1,aomap_fragment:F1,aomap_pars_fragment:H1,batching_pars_vertex:V1,batching_vertex:G1,begin_vertex:k1,beginnormal_vertex:W1,bsdfs:X1,iridescence_fragment:q1,bumpmap_pars_fragment:Y1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:Q1,color_fragment:j1,color_pars_fragment:$1,color_pars_vertex:tE,color_vertex:eE,common:nE,cube_uv_reflection_fragment:iE,defaultnormal_vertex:sE,displacementmap_pars_vertex:aE,displacementmap_vertex:rE,emissivemap_fragment:oE,emissivemap_pars_fragment:lE,colorspace_fragment:cE,colorspace_pars_fragment:uE,envmap_fragment:hE,envmap_common_pars_fragment:fE,envmap_pars_fragment:dE,envmap_pars_vertex:pE,envmap_physical_pars_fragment:TE,envmap_vertex:mE,fog_vertex:gE,fog_pars_vertex:_E,fog_fragment:vE,fog_pars_fragment:yE,gradientmap_pars_fragment:xE,lightmap_pars_fragment:SE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:bE,lights_pars_begin:EE,lights_toon_fragment:AE,lights_toon_pars_fragment:wE,lights_phong_fragment:CE,lights_phong_pars_fragment:RE,lights_physical_fragment:DE,lights_physical_pars_fragment:NE,lights_fragment_begin:UE,lights_fragment_maps:LE,lights_fragment_end:OE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:IE,logdepthbuf_pars_vertex:zE,logdepthbuf_vertex:BE,map_fragment:FE,map_pars_fragment:HE,map_particle_fragment:VE,map_particle_pars_fragment:GE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:WE,morphinstance_vertex:XE,morphcolor_vertex:qE,morphnormal_vertex:YE,morphtarget_pars_vertex:ZE,morphtarget_vertex:KE,normal_fragment_begin:JE,normal_fragment_maps:QE,normal_pars_fragment:jE,normal_pars_vertex:$E,normal_vertex:tT,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:aT,opaque_fragment:rT,packing:oT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:hT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:_T,skinbase_vertex:vT,skinning_pars_vertex:yT,skinning_vertex:xT,skinnormal_vertex:ST,specularmap_fragment:MT,specularmap_pars_fragment:bT,tonemapping_fragment:ET,tonemapping_pars_fragment:TT,transmission_fragment:AT,transmission_pars_fragment:wT,uv_pars_fragment:CT,uv_pars_vertex:RT,uv_vertex:DT,worldpos_vertex:NT,background_vert:UT,background_frag:LT,backgroundCube_vert:OT,backgroundCube_frag:PT,cube_vert:IT,cube_frag:zT,depth_vert:BT,depth_frag:FT,distanceRGBA_vert:HT,distanceRGBA_frag:VT,equirect_vert:GT,equirect_frag:kT,linedashed_vert:WT,linedashed_frag:XT,meshbasic_vert:qT,meshbasic_frag:YT,meshlambert_vert:ZT,meshlambert_frag:KT,meshmatcap_vert:JT,meshmatcap_frag:QT,meshnormal_vert:jT,meshnormal_frag:$T,meshphong_vert:tA,meshphong_frag:eA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:sA,meshtoon_frag:aA,points_vert:rA,points_frag:oA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:hA},ot={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Li={basic:{uniforms:An([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:An([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:An([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:An([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:An([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:An([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:An([ot.points,ot.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:An([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:An([ot.common,ot.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:An([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:An([ot.sprite,ot.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:An([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:An([ot.lights,ot.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Li.physical={uniforms:An([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Tc={r:0,b:0,g:0},xa=new Oi,fA=new Le;function dA(e,t,n,i,s,a,r){let o=new Ft(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:t).get(_)),_}function x(g){let _=!1,S=v(g);S===null?u(o,l):S&&S.isColor&&(u(S,1),_=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(g,_){let S=v(_);S&&(S.isCubeTexture||S.mapping===Mu)?(h===void 0&&(h=new Ce(new Bs(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Pr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xa.copy(_.backgroundRotation),xa.x*=-1,xa.y*=-1,xa.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xa.y*=-1,xa.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fA.makeRotationFromEuler(xa)),h.material.toneMapped=ge.getTransfer(S.colorSpace)!==we,(d!==S||f!==S.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=e.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ce(new Fs(2,2),new ri({name:"BackgroundMaterial",uniforms:Pr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ge.getTransfer(S.colorSpace)!==we,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,_){g.getRGB(Tc,G_(e)),i.buffers.color.setClear(Tc.r,Tc.g,Tc.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:x,addToRenderList:m}}function pA(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(y,E,V,L,H){let Z=!1,B=d(L,V,E);a!==B&&(a=B,c(a.object)),Z=p(y,L,V,H),Z&&v(y,L,V,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,S(y,E,V,L),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function d(y,E,V){let L=V.wireframe===!0,H=i[y.id];H===void 0&&(H={},i[y.id]=H);let Z=H[E.id];Z===void 0&&(Z={},H[E.id]=Z);let B=Z[L];return B===void 0&&(B=f(l()),Z[L]=B),B}function f(y){let E=[],V=[],L=[];for(let H=0;H<n;H++)E[H]=0,V[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,E,V,L){let H=a.attributes,Z=E.attributes,B=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let pt=H[W],xt=Z[W];if(xt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),pt===void 0||pt.attribute!==xt||xt&&pt.data!==xt.data)return!0;B++}return a.attributesNum!==B||a.index!==L}function v(y,E,V,L){let H={},Z=E.attributes,B=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let pt=Z[W];pt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let xt={};xt.attribute=pt,pt&&pt.data&&(xt.data=pt.data),H[W]=xt,B++}a.attributes=H,a.attributesNum=B,a.index=L}function x(){let y=a.newAttributes;for(let E=0,V=y.length;E<V;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){let V=a.newAttributes,L=a.enabledAttributes,H=a.attributeDivisors;V[y]=1,L[y]===0&&(e.enableVertexAttribArray(y),L[y]=1),H[y]!==E&&(e.vertexAttribDivisor(y,E),H[y]=E)}function g(){let y=a.newAttributes,E=a.enabledAttributes;for(let V=0,L=E.length;V<L;V++)E[V]!==y[V]&&(e.disableVertexAttribArray(V),E[V]=0)}function _(y,E,V,L,H,Z,B){B===!0?e.vertexAttribIPointer(y,E,V,H,Z):e.vertexAttribPointer(y,E,V,L,H,Z)}function S(y,E,V,L){x();let H=L.attributes,Z=V.getAttributes(),B=E.defaultAttributeValues;for(let Q in Z){let W=Z[Q];if(W.location>=0){let st=H[Q];if(st===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let pt=st.normalized,xt=st.itemSize,ee=t.get(st);if(ee===void 0)continue;let se=ee.buffer,Y=ee.type,nt=ee.bytesPerElement,_t=Y===e.INT||Y===e.UNSIGNED_INT||st.gpuType===fp;if(st.isInterleavedBufferAttribute){let ft=st.data,Ot=ft.stride,Nt=st.offset;if(ft.isInstancedInterleavedBuffer){for(let jt=0;jt<W.locationSize;jt++)u(W.location+jt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let jt=0;jt<W.locationSize;jt++)m(W.location+jt);e.bindBuffer(e.ARRAY_BUFFER,se);for(let jt=0;jt<W.locationSize;jt++)_(W.location+jt,xt/W.locationSize,Y,pt,Ot*nt,(Nt+xt/W.locationSize*jt)*nt,_t)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)u(W.location+ft,st.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);e.bindBuffer(e.ARRAY_BUFFER,se);for(let ft=0;ft<W.locationSize;ft++)_(W.location+ft,xt/W.locationSize,Y,pt,xt*nt,xt/W.locationSize*ft*nt,_t)}}else if(B!==void 0){let pt=B[Q];if(pt!==void 0)switch(pt.length){case 2:e.vertexAttrib2fv(W.location,pt);break;case 3:e.vertexAttrib3fv(W.location,pt);break;case 4:e.vertexAttrib4fv(W.location,pt);break;default:e.vertexAttrib1fv(W.location,pt)}}}}g()}function R(){D();for(let y in i){let E=i[y];for(let V in E){let L=E[V];for(let H in L)h(L[H].object),delete L[H];delete E[V]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;let E=i[y.id];for(let V in E){let L=E[V];for(let H in L)h(L[H].object),delete L[H];delete E[V]}delete i[y.id]}function T(y){for(let E in i){let V=i[E];if(V[y.id]===void 0)continue;let L=V[y.id];for(let H in L)h(L[H].object),delete L[H];delete V[y.id]}}function D(){k(),r=!0,a!==s&&(a=s,c(a.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function mA(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];for(let x=0;x<f.length;x++)n.update(v,i,f[x])}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gA(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Ti&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let D=T===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==es&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qi&&!D)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:R,maxSamples:C}}function _A(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Mi,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||v===null||v.length===0||a&&!m)a?h(null):c();else{let g=a?0:i,_=g*4,S=u.clippingState||null;l.value=S,S=h(v,f,_,p);for(let R=0;R!==_;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,v){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let u=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,S=p;_!==x;++_,S+=4)r.copy(d[_]).applyMatrix4(g,o),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function vA(e){let t=new WeakMap;function n(r,o){return o===id?r.mapping=Nr:o===sd&&(r.mapping=Ur),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===id||o===sd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Bd(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var iu=class extends eu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Tr=4,W0=[.125,.215,.35,.446,.526,.582],Ea=20,Bf=new iu,X0=new Ft,Ff=null,Hf=0,Vf=0,Gf=!1,Ma=(1+Math.sqrt(5))/2,xr=1/Ma,q0=[new P(-Ma,xr,0),new P(Ma,xr,0),new P(-xr,0,Ma),new P(xr,0,Ma),new P(0,Ma,-xr),new P(0,Ma,xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],su=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Ff=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ff,Hf,Vf),this._renderer.xr.enabled=Gf,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Nr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ff=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:il,format:Ti,colorSpace:Hs,depthBuffer:!1},s=Y0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(a)),this._blurMaterial=xA(a,t,n)}return s}_compileMaterial(t){let n=new Ce(this._lodPlanes[0],t);this._renderer.compile(n,Bf)}_sceneToCubeUV(t,n,i,s){let o=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(X0),h.toneMapping=Is,h.autoClear=!1;let p=new Ko({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),v=new Ce(new Bs,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(X0),x=!0);for(let u=0;u<6;u++){let g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let _=this._cubeSize;Ac(s,g*_,u>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Nr||t.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Ce(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Ac(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Bf)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=q0[(s-a-1)%q0.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ce(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ea-1),x=a/v,m=isFinite(a)?1+Math.floor(h*x):Ea;m>Ea&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ea}`);let u=[],g=0;for(let T=0;T<Ea;++T){let D=T/x,k=Math.exp(-D*D/2);u.push(k),T===0?g+=k:T<m&&(g+=2*k)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;let S=this._sizeLods[s],R=3*S*(s>_-Tr?s-_+Tr:0),C=4*(this._cubeSize-S);Ac(n,R,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Bf)}};function yA(e){let t=[],n=[],i=[],s=e,a=e-Tr+1+W0.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Tr?l=W0[r-e+Tr-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(u*v*p);for(let C=0;C<p;C++){let T=C%3*2/3-1,D=C>2?0:-1,k=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(k,x*v*C),_.set(f,m*v*C);let y=[C,C,C,C,C,C];S.set(y,u*v*C)}let R=new bn;R.setAttribute("position",new Mn(g,x)),R.setAttribute("uv",new Mn(_,m)),R.setAttribute("faceIndex",new Mn(S,u)),t.push(R),s>Tr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Y0(e,t,n){let i=new is(e,t,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ac(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function xA(e,t,n){let i=new Float32Array(Ea),s=new P(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ea,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Z0(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function K0(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function SA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===id||l===sd,h=l===Nr||l===Ur;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new su(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new su(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function MA(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Gc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bA(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let x=f.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)t.update(f[v],e.ARRAY_BUFFER);let p=d.morphAttributes;for(let v in p){let x=p[v];for(let m=0,u=x.length;m<u;m++)t.update(x[m],e.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,v=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){let R=g[_+0],C=g[_+1],T=g[_+2];f.push(R,C,C,T,T,R)}}else if(v!==void 0){let g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){let R=_+0,C=_+1,T=_+2;f.push(R,C,C,T,T,R)}}else return;let m=new(H_(f)?tu:$c)(f,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function EA(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,a,f*r,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function TA(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function AA(e,t,n){let i=new WeakMap,s=new Be;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let k=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],_=0;p===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let S=o.attributes.position.count*_,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let C=new Float32Array(S*R*4*d),T=new Qc(C,S,R,d);T.type=Qi,T.needsUpdate=!0;let D=_*4;for(let y=0;y<d;y++){let E=m[y],V=u[y],L=g[y],H=S*R*4*y;for(let Z=0;Z<E.count;Z++){let B=Z*D;p===!0&&(s.fromBufferAttribute(E,Z),C[H+B+0]=s.x,C[H+B+1]=s.y,C[H+B+2]=s.z,C[H+B+3]=0),v===!0&&(s.fromBufferAttribute(V,Z),C[H+B+4]=s.x,C[H+B+5]=s.y,C[H+B+6]=s.z,C[H+B+7]=0),x===!0&&(s.fromBufferAttribute(L,Z),C[H+B+8]=s.x,C[H+B+9]=s.y,C[H+B+10]=s.z,C[H+B+11]=L.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Lt(S,R)},i.set(o,f),o.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function wA(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var au=class extends Wn{constructor(t,n,i,s,a,r,o,l,c,h=wr){if(h!==wr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===wr&&(i=wa),i===void 0&&h===Or&&(i=Lr),super(null,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},W_=new Wn,J0=new au(1,1),X_=new Qc,q_=new Id,Y_=new nu,Q0=[],j0=[],$0=new Float32Array(16),t_=new Float32Array(9),e_=new Float32Array(4);function Fr(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Q0[s];if(a===void 0&&(a=new Float32Array(s),Q0[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function en(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function nn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Eu(e,t){let n=j0[t];n===void 0&&(n=new Int32Array(t),j0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function CA(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function RA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2fv(this.addr,t),nn(n,t)}}function DA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(en(n,t))return;e.uniform3fv(this.addr,t),nn(n,t)}}function NA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4fv(this.addr,t),nn(n,t)}}function UA(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;e_.set(i),e.uniformMatrix2fv(this.addr,!1,e_),nn(n,i)}}function LA(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;t_.set(i),e.uniformMatrix3fv(this.addr,!1,t_),nn(n,i)}}function OA(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;$0.set(i),e.uniformMatrix4fv(this.addr,!1,$0),nn(n,i)}}function PA(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function IA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2iv(this.addr,t),nn(n,t)}}function zA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3iv(this.addr,t),nn(n,t)}}function BA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4iv(this.addr,t),nn(n,t)}}function FA(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function HA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2uiv(this.addr,t),nn(n,t)}}function VA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3uiv(this.addr,t),nn(n,t)}}function GA(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4uiv(this.addr,t),nn(n,t)}}function kA(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(J0.compareFunction=B_,a=J0):a=W_,n.setTexture2D(t||a,s)}function WA(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||q_,s)}function XA(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Y_,s)}function qA(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||X_,s)}function YA(e){switch(e){case 5126:return CA;case 35664:return RA;case 35665:return DA;case 35666:return NA;case 35674:return UA;case 35675:return LA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return FA;case 36294:return HA;case 36295:return VA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return qA}}function ZA(e,t){e.uniform1fv(this.addr,t)}function KA(e,t){let n=Fr(t,this.size,2);e.uniform2fv(this.addr,n)}function JA(e,t){let n=Fr(t,this.size,3);e.uniform3fv(this.addr,n)}function QA(e,t){let n=Fr(t,this.size,4);e.uniform4fv(this.addr,n)}function jA(e,t){let n=Fr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $A(e,t){let n=Fr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tw(e,t){let n=Fr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ew(e,t){e.uniform1iv(this.addr,t)}function nw(e,t){e.uniform2iv(this.addr,t)}function iw(e,t){e.uniform3iv(this.addr,t)}function sw(e,t){e.uniform4iv(this.addr,t)}function aw(e,t){e.uniform1uiv(this.addr,t)}function rw(e,t){e.uniform2uiv(this.addr,t)}function ow(e,t){e.uniform3uiv(this.addr,t)}function lw(e,t){e.uniform4uiv(this.addr,t)}function cw(e,t,n){let i=this.cache,s=t.length,a=Eu(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||W_,a[r])}function uw(e,t,n){let i=this.cache,s=t.length,a=Eu(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||q_,a[r])}function hw(e,t,n){let i=this.cache,s=t.length,a=Eu(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Y_,a[r])}function fw(e,t,n){let i=this.cache,s=t.length,a=Eu(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||X_,a[r])}function dw(e){switch(e){case 5126:return ZA;case 35664:return KA;case 35665:return JA;case 35666:return QA;case 35674:return jA;case 35675:return $A;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return rw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return fw}}var Fd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YA(n.type)}},Hd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dw(n.type)}},Vd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},kf=/(\w+)(\])?(\[|\.)?/g;function n_(e,t){e.seq.push(t),e.map[t.id]=t}function pw(e,t,n){let i=e.name,s=i.length;for(kf.lastIndex=0;;){let a=kf.exec(i),r=kf.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){n_(n,c===void 0?new Fd(o,e,t):new Hd(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Vd(o),n_(n,d)),n=d}}}var Rr=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);pw(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function i_(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var mw=37297,gw=0;function _w(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function vw(e){let t=ge.getPrimaries(ge.workingColorSpace),n=ge.getPrimaries(e),i;switch(t===n?i="":t===Yc&&n===qc?i="LinearDisplayP3ToLinearSRGB":t===qc&&n===Yc&&(i="LinearSRGBToLinearDisplayP3"),e){case Hs:case bu:return[i,"LinearTransferOETF"];case Ui:case vp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function s_(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+_w(e.getShaderSource(t),r)}else return s}function yw(e,t){let n=vw(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xw(e,t){let n;switch(t){case Db:n="Linear";break;case Nb:n="Reinhard";break;case Ub:n="Cineon";break;case hp:n="ACESFilmic";break;case Ob:n="AgX";break;case Pb:n="Neutral";break;case Lb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var wc=new P;function Sw(){ge.getLuminanceCoefficients(wc);let e=wc.x.toFixed(4),t=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mw(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function bw(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Ew(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Go(e){return e!==""}function a_(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function r_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(e){return e.replace(Tw,ww)}var Aw=new Map;function ww(e,t){let n=Zt[t];if(n===void 0){let i=Aw.get(t);if(i!==void 0)n=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gd(n)}var Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(e){return e.replace(Cw,Rw)}function Rw(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function l_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dw(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===E_?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===cb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function Nw(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Nr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Mu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uw(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ur&&(t="ENVMAP_MODE_REFRACTION"),t}function Lw(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case T_:t="ENVMAP_BLENDING_MULTIPLY";break;case Cb:t="ENVMAP_BLENDING_MIX";break;case Rb:t="ENVMAP_BLENDING_ADD";break}return t}function Ow(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Pw(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=Dw(n),c=Nw(n),h=Uw(n),d=Lw(n),f=Ow(n),p=Mw(n),v=bw(a),x=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Go).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Go).join(`
`),u.length>0&&(u+=`
`)):(m=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),u=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Is?"#define TONE_MAPPING":"",n.toneMapping!==Is?Zt.tonemapping_pars_fragment:"",n.toneMapping!==Is?xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,yw("linearToOutputTexel",n.outputColorSpace),Sw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),r=Gd(r),r=a_(r,n),r=r_(r,n),o=Gd(o),o=a_(o,n),o=r_(o,n),r=o_(r),o=o_(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=g+m+r,S=g+u+o,R=i_(s,s.VERTEX_SHADER,_),C=i_(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,C),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(E){if(e.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(C).trim(),Z=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,R,C);else{let Q=s_(s,R,"vertex"),W=s_(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+Q+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||H==="")&&(B=!1);B&&(E.diagnostics={runnable:Z,programLog:V,vertexShader:{log:L,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(R),s.deleteShader(C),D=new Rr(s,x),k=Ew(s,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,mw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}var Iw=0,kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Wd(t),n.set(t,i)),i}},Wd=class{constructor(t){this.id=Iw++,this.code=t,this.usedTimes=0}};function zw(e,t,n,i,s,a,r){let o=new jc,l=new kd,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures,v=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,V,L,H){let Z=L.fog,B=H.geometry,Q=y.isMeshStandardMaterial?L.environment:null,W=(y.isMeshStandardMaterial?n:t).get(y.envMap||Q),st=W&&W.mapping===Mu?W.image.height:null,pt=x[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));let xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=xt!==void 0?xt.length:0,se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let Y,nt,_t,ft;if(pt){let _n=Li[pt];Y=_n.vertexShader,nt=_n.fragmentShader}else Y=y.vertexShader,nt=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),ft=l.getFragmentShaderID(y);let Ot=e.getRenderTarget(),Nt=H.isInstancedMesh===!0,jt=H.isBatchedMesh===!0,oe=!!y.map,kt=!!y.matcap,N=!!W,je=!!y.aoMap,Wt=!!y.lightMap,Xt=!!y.bumpMap,Ut=!!y.normalMap,pe=!!y.displacementMap,Pt=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,F=y.anisotropy>0,q=y.clearcoat>0,j=y.dispersion>0,K=y.iridescence>0,St=y.sheen>0,it=y.transmission>0,ct=F&&!!y.anisotropyMap,qt=q&&!!y.clearcoatMap,tt=q&&!!y.clearcoatNormalMap,mt=q&&!!y.clearcoatRoughnessMap,Dt=K&&!!y.iridescenceMap,Ct=K&&!!y.iridescenceThicknessMap,dt=St&&!!y.sheenColorMap,Yt=St&&!!y.sheenRoughnessMap,zt=!!y.specularMap,he=!!y.specularColorMap,U=!!y.specularIntensityMap,ut=it&&!!y.transmissionMap,X=it&&!!y.thicknessMap,$=!!y.gradientMap,rt=!!y.alphaMap,ht=y.alphaTest>0,ae=!!y.alphaHash,ze=!!y.extensions,$e=Is;y.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&($e=e.toneMapping);let Qt={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:nt,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:jt,batchingColor:jt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ot===null?e.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Hs,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:kt,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:st,aoMap:je,lightMap:Wt,bumpMap:Xt,normalMap:Ut,displacementMap:p&&pe,emissiveMap:Pt,normalMapObjectSpace:Ut&&y.normalMapType===Fb,normalMapTangentSpace:Ut&&y.normalMapType===z_,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:ct,clearcoat:q,clearcoatMap:qt,clearcoatNormalMap:tt,clearcoatRoughnessMap:mt,dispersion:j,iridescence:K,iridescenceMap:Dt,iridescenceThicknessMap:Ct,sheen:St,sheenColorMap:dt,sheenRoughnessMap:Yt,specularMap:zt,specularColorMap:he,specularIntensityMap:U,transmission:it,transmissionMap:ut,thicknessMap:X,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:ae,combine:y.combine,mapUv:oe&&m(y.map.channel),aoMapUv:je&&m(y.aoMap.channel),lightMapUv:Wt&&m(y.lightMap.channel),bumpMapUv:Xt&&m(y.bumpMap.channel),normalMapUv:Ut&&m(y.normalMap.channel),displacementMapUv:pe&&m(y.displacementMap.channel),emissiveMapUv:Pt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:ct&&m(y.anisotropyMap.channel),clearcoatMapUv:qt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&m(y.sheenRoughnessMap.channel),specularMapUv:zt&&m(y.specularMap.channel),specularColorMapUv:he&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:ut&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:rt&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ut||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(oe||rt),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&V.length>0,shadowMapType:e.shadowMap.type,toneMapping:$e,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ji,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ze&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&y.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)E.push(V),E.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(_(E,y),S(E,y),E.push(e.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),y.push(o.mask)}function R(y){let E=x[y.type],V;if(E){let L=Li[E];V=w1.clone(L.uniforms)}else V=y.uniforms;return V}function C(y,E){let V;for(let L=0,H=h.length;L<H;L++){let Z=h[L];if(Z.cacheKey===E){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new Pw(e,E,y,a),h.push(V)),V}function T(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function k(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:R,acquireProgram:C,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:k}}function Bw(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function Fw(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function c_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function u_(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,v,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,v,x,m){let u=r(d,f,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,v,x,m){let u=r(d,f,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||Fw),i.length>1&&i.sort(f||c_),s.length>1&&s.sort(f||c_)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function Hw(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new u_,e.set(i,[r])):s>=a.length?(r=new u_,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vw(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Ft};break;case"SpotLight":n={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function Gw(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var kw=0;function Ww(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Xw(e){let t=new Vw,n=Gw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new Le,r=new Le;function o(c){let h=0,d=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,g=0,_=0,S=0,R=0,C=0,T=0;c.sort(Ww);for(let k=0,y=c.length;k<y;k++){let E=c[k],V=E.color,L=E.intensity,H=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=V.r*L,d+=V.g*L,f+=V.b*L;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],L);T++}else if(E.isDirectionalLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,W=n.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=E.shadow.matrix,g++}i.directional[p]=B,p++}else if(E.isSpotLight){let B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(V).multiplyScalar(L),B.distance=H,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[x]=B;let Q=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,E.castShadow){let W=n.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=Z,S++}x++}else if(E.isRectAreaLight){let B=t.get(E);B.color.copy(V).multiplyScalar(L),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=B,m++}else if(E.isPointLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let Q=E.shadow,W=n.get(E);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=E.shadow.matrix,_++}i.point[v]=B,v++}else if(E.isHemisphereLight){let B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(L),B.groundColor.copy(E.groundColor).multiplyScalar(L),i.hemi[u]=B,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==S||D.numSpotMaps!==R||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,D.directionalLength=p,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=S,D.numSpotMaps=R,D.numLightProbes=T,i.version=kw++)}function l(c,h){let d=0,f=0,p=0,v=0,x=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let _=c[u];if(_.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(_.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function h_(e){let t=new Xw(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function qw(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new h_(e),t.set(s,[o])):a>=r.length?(o=new h_(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Xd=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qd=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
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
}`;function Kw(e,t,n){let i=new Jo,s=new Lt,a=new Lt,r=new Be,o=new Xd({depthPacking:Bb}),l=new qd,c={},h=n.maxTextureSize,d={[zs]:Sn,[Sn]:zs,[Ji]:Ji},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Yw,fragmentShader:Zw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new bn;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let u=this.type;this.render=function(C,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let k=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Ps),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let L=u!==Ki&&this.type===Ki,H=u===Ki&&this.type!==Ki;for(let Z=0,B=C.length;Z<B;Z++){let Q=C[Z],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();if(s.multiply(st),a.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/st.x),s.x=a.x*st.x,W.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/st.y),s.y=a.y*st.y,W.mapSize.y=a.y)),W.map===null||L===!0||H===!0){let xt=this.type!==Ki?{minFilter:ai,magFilter:ai}:{};W.map!==null&&W.map.dispose(),W.map=new is(s.x,s.y,xt),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();let pt=W.getViewportCount();for(let xt=0;xt<pt;xt++){let ee=W.getViewport(xt);r.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),V.viewport(r),W.updateMatrices(Q,xt),i=W.getFrustum(),S(T,D,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Ki&&g(W,D),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(k,y,E)};function g(C,T){let D=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new is(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(T,null,D,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(T,null,D,p,x,null)}function _(C,T,D,k){let y=null,E=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=y.uuid,L=T.uuid,H=c[V];H===void 0&&(H={},c[V]=H);let Z=H[L];Z===void 0&&(Z=y.clone(),H[L]=Z,T.addEventListener("dispose",R)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,k===Ki?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=e.properties.get(y);V.light=D}return y}function S(C,T,D,k,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Ki)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let L=t.update(C),H=C.material;if(Array.isArray(H)){let Z=L.groups;for(let B=0,Q=Z.length;B<Q;B++){let W=Z[B],st=H[W.materialIndex];if(st&&st.visible){let pt=_(C,st,k,y);C.onBeforeShadow(e,C,T,D,L,pt,W),e.renderBufferDirect(D,null,L,pt,C,W),C.onAfterShadow(e,C,T,D,L,pt,W)}}}else if(H.visible){let Z=_(C,H,k,y);C.onBeforeShadow(e,C,T,D,L,Z,null),e.renderBufferDirect(D,null,L,Z,C,null),C.onAfterShadow(e,C,T,D,L,Z,null)}}let V=C.children;for(let L=0,H=V.length;L<H;L++)S(V[L],T,D,k,y)}function R(C){C.target.removeEventListener("dispose",R);for(let D in c){let k=c[D],y=C.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}var Jw={[Jf]:Qf,[jf]:ed,[$f]:nd,[Dr]:td,[Qf]:Jf,[ed]:jf,[nd]:$f,[td]:Dr};function Qw(e){function t(){let U=!1,ut=new Be,X=null,$=new Be(0,0,0,0);return{setMask:function(rt){X!==rt&&!U&&(e.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){U=rt},setClear:function(rt,ht,ae,ze,$e){$e===!0&&(rt*=ze,ht*=ze,ae*=ze),ut.set(rt,ht,ae,ze),$.equals(ut)===!1&&(e.clearColor(rt,ht,ae,ze),$.copy(ut))},reset:function(){U=!1,X=null,$.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,X=null,$=null,rt=null;return{setReversed:function(ht){ut=ht},setTest:function(ht){ht?_t(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(ht){X!==ht&&!U&&(e.depthMask(ht),X=ht)},setFunc:function(ht){if(ut&&(ht=Jw[ht]),$!==ht){switch(ht){case Jf:e.depthFunc(e.NEVER);break;case Qf:e.depthFunc(e.ALWAYS);break;case jf:e.depthFunc(e.LESS);break;case Dr:e.depthFunc(e.LEQUAL);break;case $f:e.depthFunc(e.EQUAL);break;case td:e.depthFunc(e.GEQUAL);break;case ed:e.depthFunc(e.GREATER);break;case nd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}$=ht}},setLocked:function(ht){U=ht},setClear:function(ht){rt!==ht&&(e.clearDepth(ht),rt=ht)},reset:function(){U=!1,X=null,$=null,rt=null}}}function i(){let U=!1,ut=null,X=null,$=null,rt=null,ht=null,ae=null,ze=null,$e=null;return{setTest:function(Qt){U||(Qt?_t(e.STENCIL_TEST):ft(e.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!U&&(e.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,_n,vi){(X!==Qt||$!==_n||rt!==vi)&&(e.stencilFunc(Qt,_n,vi),X=Qt,$=_n,rt=vi)},setOp:function(Qt,_n,vi){(ht!==Qt||ae!==_n||ze!==vi)&&(e.stencilOp(Qt,_n,vi),ht=Qt,ae=_n,ze=vi)},setLocked:function(Qt){U=Qt},setClear:function(Qt){$e!==Qt&&(e.clearStencil(Qt),$e=Qt)},reset:function(){U=!1,ut=null,X=null,$=null,rt=null,ht=null,ae=null,ze=null,$e=null}}}let s=new t,a=new n,r=new i,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,g=null,_=null,S=null,R=null,C=new Ft(0,0,0),T=0,D=!1,k=null,y=null,E=null,V=null,L=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,B=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=B>=2);let W=null,st={},pt=e.getParameter(e.SCISSOR_BOX),xt=e.getParameter(e.VIEWPORT),ee=new Be().fromArray(pt),se=new Be().fromArray(xt);function Y(U,ut,X,$){let rt=new Uint8Array(4),ht=e.createTexture();e.bindTexture(U,ht),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ae=0;ae<X;ae++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,$,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(ut+ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return ht}let nt={};nt[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),_t(e.DEPTH_TEST),a.setFunc(Dr),Wt(!1),Xt(v0),_t(e.CULL_FACE),N(Ps);function _t(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function ft(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function Ot(U,ut){return h[U]!==ut?(e.bindFramebuffer(U,ut),h[U]=ut,U===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ut),U===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(U,ut){let X=f,$=!1;if(U){X=d.get(ut),X===void 0&&(X=[],d.set(ut,X));let rt=U.textures;if(X.length!==rt.length||X[0]!==e.COLOR_ATTACHMENT0){for(let ht=0,ae=rt.length;ht<ae;ht++)X[ht]=e.COLOR_ATTACHMENT0+ht;X.length=rt.length,$=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,$=!0);$&&e.drawBuffers(X)}function jt(U){return p!==U?(e.useProgram(U),p=U,!0):!1}let oe={[ba]:e.FUNC_ADD,[hb]:e.FUNC_SUBTRACT,[fb]:e.FUNC_REVERSE_SUBTRACT};oe[db]=e.MIN,oe[pb]=e.MAX;let kt={[mb]:e.ZERO,[gb]:e.ONE,[_b]:e.SRC_COLOR,[Zf]:e.SRC_ALPHA,[bb]:e.SRC_ALPHA_SATURATE,[Sb]:e.DST_COLOR,[yb]:e.DST_ALPHA,[vb]:e.ONE_MINUS_SRC_COLOR,[Kf]:e.ONE_MINUS_SRC_ALPHA,[Mb]:e.ONE_MINUS_DST_COLOR,[xb]:e.ONE_MINUS_DST_ALPHA,[Eb]:e.CONSTANT_COLOR,[Tb]:e.ONE_MINUS_CONSTANT_COLOR,[Ab]:e.CONSTANT_ALPHA,[wb]:e.ONE_MINUS_CONSTANT_ALPHA};function N(U,ut,X,$,rt,ht,ae,ze,$e,Qt){if(U===Ps){v===!0&&(ft(e.BLEND),v=!1);return}if(v===!1&&(_t(e.BLEND),v=!0),U!==ub){if(U!==x||Qt!==D){if((m!==ba||_!==ba)&&(e.blendEquation(e.FUNC_ADD),m=ba,_=ba),Qt)switch(U){case Ar:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kc:e.blendFunc(e.ONE,e.ONE);break;case y0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case x0:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ar:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kc:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case y0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case x0:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,g=null,S=null,R=null,C.set(0,0,0),T=0,x=U,D=Qt}return}rt=rt||ut,ht=ht||X,ae=ae||$,(ut!==m||rt!==_)&&(e.blendEquationSeparate(oe[ut],oe[rt]),m=ut,_=rt),(X!==u||$!==g||ht!==S||ae!==R)&&(e.blendFuncSeparate(kt[X],kt[$],kt[ht],kt[ae]),u=X,g=$,S=ht,R=ae),(ze.equals(C)===!1||$e!==T)&&(e.blendColor(ze.r,ze.g,ze.b,$e),C.copy(ze),T=$e),x=U,D=!1}function je(U,ut){U.side===Ji?ft(e.CULL_FACE):_t(e.CULL_FACE);let X=U.side===Sn;ut&&(X=!X),Wt(X),U.blending===Ar&&U.transparent===!1?N(Ps):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let $=U.stencilWrite;r.setTest($),$&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){k!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),k=U)}function Xt(U){U!==ob?(_t(e.CULL_FACE),U!==y&&(U===v0?e.cullFace(e.BACK):U===lb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),y=U}function Ut(U){U!==E&&(Z&&e.lineWidth(U),E=U)}function pe(U,ut,X){U?(_t(e.POLYGON_OFFSET_FILL),(V!==ut||L!==X)&&(e.polygonOffset(ut,X),V=ut,L=X)):ft(e.POLYGON_OFFSET_FILL)}function Pt(U){U?_t(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function A(U){U===void 0&&(U=e.TEXTURE0+H-1),W!==U&&(e.activeTexture(U),W=U)}function M(U,ut,X){X===void 0&&(W===null?X=e.TEXTURE0+H-1:X=W);let $=st[X];$===void 0&&($={type:void 0,texture:void 0},st[X]=$),($.type!==U||$.texture!==ut)&&(W!==X&&(e.activeTexture(X),W=X),e.bindTexture(U,ut||nt[U]),$.type=U,$.texture=ut)}function F(){let U=st[W];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{e.compressedTexImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{e.texSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{e.texSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{e.texStorage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{e.texStorage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(U){ee.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function dt(U){se.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function Yt(U,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let $=X.get(U);$===void 0&&($=e.getUniformBlockIndex(ut,U.name),X.set(U,$))}function zt(U,ut){let $=l.get(ut).get(U);o.get(ut)!==$&&(e.uniformBlockBinding(ut,$,U.__bindingPointIndex),o.set(ut,$))}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},W=null,st={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,g=null,_=null,S=null,R=null,C=new Ft(0,0,0),T=0,D=!1,k=null,y=null,E=null,V=null,L=null,ee.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:_t,disable:ft,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:jt,setBlending:N,setMaterial:je,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Ut,setPolygonOffset:pe,setScissorTest:Pt,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:mt,texImage3D:Dt,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:Ct,viewport:dt,reset:he}}function f_(e,t,n,i){let s=jw(i);switch(n){case D_:return e*t;case U_:return e*t;case L_:return e*t*2;case O_:return e*t/s.components*s.byteLength;case mp:return e*t/s.components*s.byteLength;case P_:return e*t*2/s.components*s.byteLength;case gp:return e*t*2/s.components*s.byteLength;case N_:return e*t*3/s.components*s.byteLength;case Ti:return e*t*4/s.components*s.byteLength;case _p:return e*t*4/s.components*s.byteLength;case zc:case Bc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case od:case cd:return Math.max(e,16)*Math.max(t,8)/4;case rd:case ld:return Math.max(e,8)*Math.max(t,8)/2;case ud:case hd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case md:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _d:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case vd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Md:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Vc:case wd:case Cd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I_:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Dd:case Nd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jw(e){switch(e){case es:case w_:return{byteLength:1,components:1};case Yo:case C_:case il:return{byteLength:2,components:1};case dp:case pp:return{byteLength:2,components:4};case wa:case fp:case Qi:return{byteLength:4,components:1};case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function $w(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return p?new OffscreenCanvas(A,M):Kc("canvas")}function x(A,M,F){let q=1,j=Pt(A);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(q*j.width),St=Math.floor(q*j.height);d===void 0&&(d=v(K,St));let it=M?v(K,St):d;return it.width=K,it.height=St,it.getContext("2d").drawImage(A,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+St+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==ai&&A.minFilter!==bi}function u(A){e.generateMipmap(A)}function g(A,M,F,q,j=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=M;if(M===e.RED&&(F===e.FLOAT&&(K=e.R32F),F===e.HALF_FLOAT&&(K=e.R16F),F===e.UNSIGNED_BYTE&&(K=e.R8)),M===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.R8UI),F===e.UNSIGNED_SHORT&&(K=e.R16UI),F===e.UNSIGNED_INT&&(K=e.R32UI),F===e.BYTE&&(K=e.R8I),F===e.SHORT&&(K=e.R16I),F===e.INT&&(K=e.R32I)),M===e.RG&&(F===e.FLOAT&&(K=e.RG32F),F===e.HALF_FLOAT&&(K=e.RG16F),F===e.UNSIGNED_BYTE&&(K=e.RG8)),M===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RG8UI),F===e.UNSIGNED_SHORT&&(K=e.RG16UI),F===e.UNSIGNED_INT&&(K=e.RG32UI),F===e.BYTE&&(K=e.RG8I),F===e.SHORT&&(K=e.RG16I),F===e.INT&&(K=e.RG32I)),M===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGB8UI),F===e.UNSIGNED_SHORT&&(K=e.RGB16UI),F===e.UNSIGNED_INT&&(K=e.RGB32UI),F===e.BYTE&&(K=e.RGB8I),F===e.SHORT&&(K=e.RGB16I),F===e.INT&&(K=e.RGB32I)),M===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),F===e.UNSIGNED_INT&&(K=e.RGBA32UI),F===e.BYTE&&(K=e.RGBA8I),F===e.SHORT&&(K=e.RGBA16I),F===e.INT&&(K=e.RGBA32I)),M===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),M===e.RGBA){let St=j?Xc:ge.getTransfer(q);F===e.FLOAT&&(K=e.RGBA32F),F===e.HALF_FLOAT&&(K=e.RGBA16F),F===e.UNSIGNED_BYTE&&(K=St===we?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,M){let F;return A?M===null||M===wa||M===Lr?F=e.DEPTH24_STENCIL8:M===Qi?F=e.DEPTH32F_STENCIL8:M===Yo&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wa||M===Lr?F=e.DEPTH_COMPONENT24:M===Qi?F=e.DEPTH_COMPONENT32F:M===Yo&&(F=e.DEPTH_COMPONENT16),F}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ai&&A.minFilter!==bi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=A.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function C(A){let M=A.target;M.removeEventListener("dispose",C),k(M)}function T(A){let M=i.get(A);if(M.__webglInit===void 0)return;let F=A.source,q=f.get(F);if(q){let j=q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(A),Object.keys(q).length===0&&f.delete(F)}i.remove(A)}function D(A){let M=i.get(A);e.deleteTexture(M.__webglTexture);let F=A.source,q=f.get(F);delete q[M.__cacheKey],r.memory.textures--}function k(A){let M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let j=0;j<M.__webglFramebuffer[q].length;j++)e.deleteFramebuffer(M.__webglFramebuffer[q][j]);else e.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)e.deleteFramebuffer(M.__webglFramebuffer[q]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=A.textures;for(let q=0,j=F.length;q<j;q++){let K=i.get(F[q]);K.__webglTexture&&(e.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(F[q])}i.remove(A)}let y=0;function E(){y=0}function V(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function L(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function H(A,M){let F=i.get(A);if(A.isVideoTexture&&Ut(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,A,M);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+M)}function Z(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){se(F,A,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+M)}function B(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){se(F,A,M);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+M)}function Q(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+M)}let W={[qo]:e.REPEAT,[Ta]:e.CLAMP_TO_EDGE,[ad]:e.MIRRORED_REPEAT},st={[ai]:e.NEAREST,[Ib]:e.NEAREST_MIPMAP_NEAREST,[oc]:e.NEAREST_MIPMAP_LINEAR,[bi]:e.LINEAR,[mf]:e.LINEAR_MIPMAP_NEAREST,[Aa]:e.LINEAR_MIPMAP_LINEAR},pt={[Hb]:e.NEVER,[qb]:e.ALWAYS,[Vb]:e.LESS,[B_]:e.LEQUAL,[Gb]:e.EQUAL,[Xb]:e.GEQUAL,[kb]:e.GREATER,[Wb]:e.NOTEQUAL};function xt(A,M){if(M.type===Qi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bi||M.magFilter===mf||M.magFilter===oc||M.magFilter===Aa||M.minFilter===bi||M.minFilter===mf||M.minFilter===oc||M.minFilter===Aa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,W[M.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,W[M.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,W[M.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,st[M.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ai||M.minFilter!==oc&&M.minFilter!==Aa||M.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));let q=M.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let K=L(M);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),j[K].usedTimes++;let St=j[A.__cacheKey];St!==void 0&&(j[A.__cacheKey].usedTimes--,St.usedTimes===0&&D(M)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return F}function se(A,M,F){let q=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=e.TEXTURE_3D);let j=ee(A,M),K=M.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+F);let St=i.get(K);if(K.version!==St.__version||j===!0){n.activeTexture(e.TEXTURE0+F);let it=ge.getPrimaries(ge.workingColorSpace),ct=M.colorSpace===Ls?null:ge.getPrimaries(M.colorSpace),qt=M.colorSpace===Ls||it===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=x(M.image,!1,s.maxTextureSize);tt=pe(M,tt);let mt=a.convert(M.format,M.colorSpace),Dt=a.convert(M.type),Ct=g(M.internalFormat,mt,Dt,M.colorSpace,M.isVideoTexture);xt(q,M);let dt,Yt=M.mipmaps,zt=M.isVideoTexture!==!0,he=St.__version===void 0||j===!0,U=K.dataReady,ut=S(M,tt);if(M.isDepthTexture)Ct=_(M.format===Or,M.type),he&&(zt?n.texStorage2D(e.TEXTURE_2D,1,Ct,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Dt,null));else if(M.isDataTexture)if(Yt.length>0){zt&&he&&n.texStorage2D(e.TEXTURE_2D,ut,Ct,Yt[0].width,Yt[0].height);for(let X=0,$=Yt.length;X<$;X++)dt=Yt[X],zt?U&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,dt.width,dt.height,mt,Dt,dt.data):n.texImage2D(e.TEXTURE_2D,X,Ct,dt.width,dt.height,0,mt,Dt,dt.data);M.generateMipmaps=!1}else zt?(he&&n.texStorage2D(e.TEXTURE_2D,ut,Ct,tt.width,tt.height),U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Dt,tt.data)):n.texImage2D(e.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Dt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,Ct,Yt[0].width,Yt[0].height,tt.depth);for(let X=0,$=Yt.length;X<$;X++)if(dt=Yt[X],M.format!==Ti)if(mt!==null)if(zt){if(U)if(M.layerUpdates.size>0){let rt=f_(dt.width,dt.height,M.format,M.type);for(let ht of M.layerUpdates){let ae=dt.data.subarray(ht*rt/dt.data.BYTES_PER_ELEMENT,(ht+1)*rt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,ht,dt.width,dt.height,1,mt,ae,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,dt.width,dt.height,tt.depth,mt,dt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,Ct,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,dt.width,dt.height,tt.depth,mt,Dt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,X,Ct,dt.width,dt.height,tt.depth,0,mt,Dt,dt.data)}else{zt&&he&&n.texStorage2D(e.TEXTURE_2D,ut,Ct,Yt[0].width,Yt[0].height);for(let X=0,$=Yt.length;X<$;X++)dt=Yt[X],M.format!==Ti?mt!==null?zt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,dt.width,dt.height,mt,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,X,Ct,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,dt.width,dt.height,mt,Dt,dt.data):n.texImage2D(e.TEXTURE_2D,X,Ct,dt.width,dt.height,0,mt,Dt,dt.data)}else if(M.isDataArrayTexture)if(zt){if(he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,Ct,tt.width,tt.height,tt.depth),U)if(M.layerUpdates.size>0){let X=f_(tt.width,tt.height,M.format,M.type);for(let $ of M.layerUpdates){let rt=tt.data.subarray($*X/tt.data.BYTES_PER_ELEMENT,($+1)*X/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,mt,Dt,rt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Dt,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,mt,Dt,tt.data);else if(M.isData3DTexture)zt?(he&&n.texStorage3D(e.TEXTURE_3D,ut,Ct,tt.width,tt.height,tt.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Dt,tt.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,mt,Dt,tt.data);else if(M.isFramebufferTexture){if(he)if(zt)n.texStorage2D(e.TEXTURE_2D,ut,Ct,tt.width,tt.height);else{let X=tt.width,$=tt.height;for(let rt=0;rt<ut;rt++)n.texImage2D(e.TEXTURE_2D,rt,Ct,X,$,0,mt,Dt,null),X>>=1,$>>=1}}else if(Yt.length>0){if(zt&&he){let X=Pt(Yt[0]);n.texStorage2D(e.TEXTURE_2D,ut,Ct,X.width,X.height)}for(let X=0,$=Yt.length;X<$;X++)dt=Yt[X],zt?U&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,mt,Dt,dt):n.texImage2D(e.TEXTURE_2D,X,Ct,mt,Dt,dt);M.generateMipmaps=!1}else if(zt){if(he){let X=Pt(tt);n.texStorage2D(e.TEXTURE_2D,ut,Ct,X.width,X.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,Dt,tt)}else n.texImage2D(e.TEXTURE_2D,0,Ct,mt,Dt,tt);m(M)&&u(q),St.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,F){if(M.image.length!==6)return;let q=ee(A,M),j=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let K=i.get(j);if(j.version!==K.__version||q===!0){n.activeTexture(e.TEXTURE0+F);let St=ge.getPrimaries(ge.workingColorSpace),it=M.colorSpace===Ls?null:ge.getPrimaries(M.colorSpace),ct=M.colorSpace===Ls||St===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let qt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let $=0;$<6;$++)!qt&&!tt?mt[$]=x(M.image[$],!0,s.maxCubemapSize):mt[$]=tt?M.image[$].image:M.image[$],mt[$]=pe(M,mt[$]);let Dt=mt[0],Ct=a.convert(M.format,M.colorSpace),dt=a.convert(M.type),Yt=g(M.internalFormat,Ct,dt,M.colorSpace),zt=M.isVideoTexture!==!0,he=K.__version===void 0||q===!0,U=j.dataReady,ut=S(M,Dt);xt(e.TEXTURE_CUBE_MAP,M);let X;if(qt){zt&&he&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Yt,Dt.width,Dt.height);for(let $=0;$<6;$++){X=mt[$].mipmaps;for(let rt=0;rt<X.length;rt++){let ht=X[rt];M.format!==Ti?Ct!==null?zt?U&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ht.width,ht.height,Ct,ht.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,Yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ht.width,ht.height,Ct,dt,ht.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,Yt,ht.width,ht.height,0,Ct,dt,ht.data)}}}else{if(X=M.mipmaps,zt&&he){X.length>0&&ut++;let $=Pt(mt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){zt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,mt[$].width,mt[$].height,Ct,dt,mt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,mt[$].width,mt[$].height,0,Ct,dt,mt[$].data);for(let rt=0;rt<X.length;rt++){let ae=X[rt].image[$].image;zt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,ae.width,ae.height,Ct,dt,ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,Yt,ae.width,ae.height,0,Ct,dt,ae.data)}}else{zt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,dt,mt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,Ct,dt,mt[$]);for(let rt=0;rt<X.length;rt++){let ht=X[rt];zt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,Ct,dt,ht.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,Yt,Ct,dt,ht.image[$])}}}m(M)&&u(e.TEXTURE_CUBE_MAP),K.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function nt(A,M,F,q,j,K){let St=a.convert(F.format,F.colorSpace),it=a.convert(F.type),ct=g(F.internalFormat,St,it,F.colorSpace);if(!i.get(M).__hasExternalTextures){let tt=Math.max(1,M.width>>K),mt=Math.max(1,M.height>>K);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,K,ct,tt,mt,M.depth,0,St,it,null):n.texImage2D(j,K,ct,tt,mt,0,St,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,j,i.get(F).__webglTexture,0,Wt(M)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,j,i.get(F).__webglTexture,K),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _t(A,M,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),M.depthBuffer){let q=M.depthTexture,j=q&&q.isDepthTexture?q.type:null,K=_(M.stencilBuffer,j),St=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=Wt(M);Xt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it,K,M.width,M.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,it,K,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,K,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,A)}else{let q=M.textures;for(let j=0;j<q.length;j++){let K=q[j],St=a.convert(K.format,K.colorSpace),it=a.convert(K.type),ct=g(K.internalFormat,St,it,K.colorSpace),qt=Wt(M);F&&Xt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,qt,ct,M.width,M.height):Xt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qt,ct,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,ct,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let q=i.get(M.depthTexture).__webglTexture,j=Wt(M);if(M.depthTexture.format===wr)Xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(M.depthTexture.format===Or)Xt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ot(A){let M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=e.createRenderbuffer(),_t(M.__webglDepthbuffer[q],A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,K)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),_t(M.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,j)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(A,M,F){let q=i.get(A);M!==void 0&&nt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Ot(A)}function jt(A){let M=A.texture,F=i.get(A),q=i.get(M);A.addEventListener("dispose",C);let j=A.textures,K=A.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=M.version,r.memory.textures++),K){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let ct=0;ct<M.mipmaps.length;ct++)F.__webglFramebuffer[it][ct]=e.createFramebuffer()}else F.__webglFramebuffer[it]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)F.__webglFramebuffer[it]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(St)for(let it=0,ct=j.length;it<ct;it++){let qt=i.get(j[it]);qt.__webglTexture===void 0&&(qt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Xt(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){let ct=j[it];F.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[it]);let qt=a.convert(ct.format,ct.colorSpace),tt=a.convert(ct.type),mt=g(ct.internalFormat,qt,tt,ct.colorSpace,A.isXRRenderTarget===!0),Dt=Wt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,mt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,F.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),_t(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),xt(e.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)nt(F.__webglFramebuffer[it][ct],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct);else nt(F.__webglFramebuffer[it],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(M)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let it=0,ct=j.length;it<ct;it++){let qt=j[it],tt=i.get(qt);n.bindTexture(e.TEXTURE_2D,tt.__webglTexture),xt(e.TEXTURE_2D,qt),nt(F.__webglFramebuffer,A,qt,e.COLOR_ATTACHMENT0+it,e.TEXTURE_2D,0),m(qt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,q.__webglTexture),xt(it,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)nt(F.__webglFramebuffer[ct],A,M,e.COLOR_ATTACHMENT0,it,ct);else nt(F.__webglFramebuffer,A,M,e.COLOR_ATTACHMENT0,it,0);m(M)&&u(it),n.unbindTexture()}A.depthBuffer&&Ot(A)}function oe(A){let M=A.textures;for(let F=0,q=M.length;F<q;F++){let j=M[F];if(m(j)){let K=A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,St=i.get(j).__webglTexture;n.bindTexture(K,St),u(K),n.unbindTexture()}}}let kt=[],N=[];function je(A){if(A.samples>0){if(Xt(A)===!1){let M=A.textures,F=A.width,q=A.height,j=e.COLOR_BUFFER_BIT,K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(A),it=M.length>1;if(it)for(let ct=0;ct<M.length;ct++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[ct]);let qt=i.get(M[ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,qt,0)}e.blitFramebuffer(0,0,F,q,0,0,F,q,j,e.NEAREST),l===!0&&(kt.length=0,N.length=0,kt.push(e.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(kt.push(K),N.push(K),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,N)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,kt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let ct=0;ct<M.length;ct++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,St.__webglColorRenderbuffer[ct]);let qt=i.get(M[ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,qt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){let M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(A){let M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function pe(A,M){let F=A.colorSpace,q=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Hs&&F!==Ls&&(ge.getTransfer(F)===we?(q!==Ti||j!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=Nt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Xt}function t2(e,t){function n(i,s=Ls){let a,r=ge.getTransfer(s);if(i===es)return e.UNSIGNED_BYTE;if(i===dp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===R_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===w_)return e.BYTE;if(i===C_)return e.SHORT;if(i===Yo)return e.UNSIGNED_SHORT;if(i===fp)return e.INT;if(i===wa)return e.UNSIGNED_INT;if(i===Qi)return e.FLOAT;if(i===il)return e.HALF_FLOAT;if(i===D_)return e.ALPHA;if(i===N_)return e.RGB;if(i===Ti)return e.RGBA;if(i===U_)return e.LUMINANCE;if(i===L_)return e.LUMINANCE_ALPHA;if(i===wr)return e.DEPTH_COMPONENT;if(i===Or)return e.DEPTH_STENCIL;if(i===O_)return e.RED;if(i===mp)return e.RED_INTEGER;if(i===P_)return e.RG;if(i===gp)return e.RG_INTEGER;if(i===_p)return e.RGBA_INTEGER;if(i===zc||i===Bc||i===Fc||i===Hc)if(r===we)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===od||i===ld||i===cd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===rd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===od)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ud||i===hd||i===fd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ud||i===hd)return r===we?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===fd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===bd||i===Ed||i===Td||i===Ad)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===dd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===md)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_d)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Md)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Td)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ad)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===wd||i===Cd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Vc)return r===we?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===I_||i===Rd||i===Dd||i===Nd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Vc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Yd=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$i=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},e2={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},n2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i2=`
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

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){let s=new Wn,a=t.properties.get(s);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ri({vertexShader:n2,fragmentShader:i2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ce(new Fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kd=class extends ns{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null,x=new Zd,m=n.getContextAttributes(),u=null,g=null,_=[],S=[],R=new Lt,C=null,T=new wn;T.layers.enable(1),T.viewport=new Be;let D=new wn;D.layers.enable(2),D.viewport=new Be;let k=[T,D],y=new Yd;y.layers.enable(1),y.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=_[Y];return nt===void 0&&(nt=new Xo,_[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=_[Y];return nt===void 0&&(nt=new Xo,_[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=_[Y];return nt===void 0&&(nt=new Xo,_[Y]=nt),nt.getHandSpace()};function L(Y){let nt=S.indexOf(Y.inputSource);if(nt===-1)return;let _t=_[nt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||r),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<_.length;Y++){let nt=S[Y];nt!==null&&(S[Y]=null,_[Y].disconnect(nt))}E=null,V=null,x.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,g=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new is(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:es,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,ft=null;m.depth&&(ft=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=m.stencil?Or:wr,_t=m.stencil?Lr:wa);let Ot={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:a};d=new XRWebGLBinding(s,n),f=d.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new is(f.textureWidth,f.textureHeight,{format:Ti,type:es,depthTexture:new au(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let nt=0;nt<Y.removed.length;nt++){let _t=Y.removed[nt],ft=S.indexOf(_t);ft>=0&&(S[ft]=null,_[ft].disconnect(_t))}for(let nt=0;nt<Y.added.length;nt++){let _t=Y.added[nt],ft=S.indexOf(_t);if(ft===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=S.length){S.push(_t),ft=Nt;break}else if(S[Nt]===null){S[Nt]=_t,ft=Nt;break}if(ft===-1)break}let Ot=_[ft];Ot&&Ot.connect(_t)}}let B=new P,Q=new P;function W(Y,nt,_t){B.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let ft=B.distanceTo(Q),Ot=nt.projectionMatrix.elements,Nt=_t.projectionMatrix.elements,jt=Ot[14]/(Ot[10]-1),oe=Ot[14]/(Ot[10]+1),kt=(Ot[9]+1)/Ot[5],N=(Ot[9]-1)/Ot[5],je=(Ot[8]-1)/Ot[0],Wt=(Nt[8]+1)/Nt[0],Xt=jt*je,Ut=jt*Wt,pe=ft/(-je+Wt),Pt=pe*-je;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ot[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let A=jt+pe,M=oe+pe,F=Xt-Pt,q=Ut+(ft-Pt),j=kt*oe/M*A,K=N*oe/M*A;Y.projectionMatrix.makePerspective(F,q,j,K,A,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,_t=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),y.near=D.near=T.near=nt,y.far=D.far=T.far=_t,(E!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,V=y.far);let ft=Y.parent,Ot=y.cameras;st(y,ft);for(let Nt=0;Nt<Ot.length;Nt++)st(Ot[Nt],ft);Ot.length===2?W(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),pt(Y,y,ft)};function pt(Y,nt,_t){_t===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let xt=null;function ee(Y,nt){if(h=nt.getViewerPose(c||r),v=nt,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let ft=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let Nt=0;Nt<_t.length;Nt++){let jt=_t[Nt],oe=null;if(p!==null)oe=p.getViewport(jt);else{let N=d.getViewSubImage(f,jt);oe=N.viewport,Nt===0&&(t.setRenderTargetTextures(g,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(g))}let kt=k[Nt];kt===void 0&&(kt=new wn,kt.layers.enable(Nt),kt.viewport=new Be,k[Nt]=kt),kt.matrix.fromArray(jt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(jt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),Nt===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(kt)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Nt=d.getDepthInformation(_t[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let _t=0;_t<_.length;_t++){let ft=S[_t],Ot=_[_t];ft!==null&&Ot!==void 0&&Ot.update(ft,nt,c||r)}xt&&xt(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}let se=new k_;se.setAnimationLoop(ee),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}},Sa=new Oi,s2=new Le;function a2(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,G_(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(a(m,u),v(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,Sa.copy(S),Sa.x*=-1,Sa.y*=-1,Sa.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Sa.y*=-1,Sa.z*=-1),m.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Sa)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){let S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=s[g.id];S===void 0&&(v(g),S=h(g),s[g.id]=S,g.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(g,R);let C=t.render.frame;a[g.id]!==C&&(f(g),a[g.id]=C)}function h(g){let _=d();g.__bindingPointIndex=_;let S=e.createBuffer(),R=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,R,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let _=s[g.id],S=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let C=0,T=S.length;C<T;C++){let D=Array.isArray(S[C])?S[C]:[S[C]];for(let k=0,y=D.length;k<y;k++){let E=D[k];if(p(E,C,k,R)===!0){let V=E.__offset,L=Array.isArray(E.value)?E.value:[E.value],H=0;for(let Z=0;Z<L.length;Z++){let B=L[Z],Q=x(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,V+H,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,E.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,S,R){let C=g.value,T=_+"_"+S;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{let D=R[T];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[T]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(g){let _=g.uniforms,S=0,R=16;for(let T=0,D=_.length;T<D;T++){let k=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,E=k.length;y<E;y++){let V=k[y],L=Array.isArray(V.value)?V.value:[V.value];for(let H=0,Z=L.length;H<Z;H++){let B=L[H],Q=x(B),W=S%R,st=W%Q.boundary,pt=W+st;S+=st,pt!==0&&R-pt<Q.storage&&(S+=R-pt),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=Q.storage}}}let C=S%R;return C>0&&(S+=R-C),g.__size=S,g.__cache={},this}function x(g){let _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){let _=g.target;_.removeEventListener("dispose",m);let S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var ru=class{constructor(t={}){let{canvas:n=c1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let p=new Uint32Array(4),v=new Int32Array(4),x=null,m=null,u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this.toneMapping=Is,this.toneMappingExposure=1;let _=this,S=!1,R=0,C=0,T=null,D=-1,k=null,y=new Be,E=new Be,V=null,L=new Ft(0),H=0,Z=n.width,B=n.height,Q=1,W=null,st=null,pt=new Be(0,0,Z,B),xt=new Be(0,0,Z,B),ee=!1,se=new Jo,Y=!1,nt=!1,_t=new Le,ft=new Le,Ot=new P,Nt=new Be,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function kt(){return T===null?Q:1}let N=i;function je(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r169"),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",ht,!1),N===null){let O="webgl2";if(N=je(O,b),N===null)throw je(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,Xt,Ut,pe,Pt,A,M,F,q,j,K,St,it,ct,qt,tt,mt,Dt,Ct,dt,Yt,zt,he,U;function ut(){Wt=new MA(N),Wt.init(),zt=new t2(N,Wt),Xt=new gA(N,Wt,t,zt),Ut=new Qw(N),Xt.reverseDepthBuffer&&Ut.buffers.depth.setReversed(!0),pe=new TA(N),Pt=new Bw,A=new $w(N,Wt,Ut,Pt,Xt,zt,pe),M=new vA(_),F=new SA(_),q=new U1(N),he=new pA(N,q),j=new bA(N,q,pe,he),K=new wA(N,j,q,pe),Ct=new AA(N,Xt,A),tt=new _A(Pt),St=new zw(_,M,F,Wt,Xt,he,tt),it=new a2(_,Pt),ct=new Hw,qt=new qw(Wt),Dt=new dA(_,M,F,Ut,K,f,l),mt=new Kw(_,K,Xt),U=new r2(N,pe,Xt,Ut),dt=new mA(N,Wt,pe),Yt=new EA(N,Wt,pe),pe.programs=St.programs,_.capabilities=Xt,_.extensions=Wt,_.properties=Pt,_.renderLists=ct,_.shadowMap=mt,_.state=Ut,_.info=pe}ut();let X=new Kd(_,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(Z,B,!1))},this.getSize=function(b){return b.set(Z,B)},this.setSize=function(b,O,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,B=O,n.width=Math.floor(b*Q),n.height=Math.floor(O*Q),z===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Z*Q,B*Q).floor()},this.setDrawingBufferSize=function(b,O,z){Z=b,B=O,Q=z,n.width=Math.floor(b*z),n.height=Math.floor(O*z),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,O,z,G){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,O,z,G),Ut.viewport(y.copy(pt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(xt)},this.setScissor=function(b,O,z,G){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,O,z,G),Ut.scissor(E.copy(xt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){Ut.setScissorTest(ee=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,O=!0,z=!0){let G=0;if(b){let I=!1;if(T!==null){let et=T.texture.format;I=et===_p||et===gp||et===mp}if(I){let et=T.texture.type,at=et===es||et===wa||et===Yo||et===Lr||et===dp||et===pp,lt=Dt.getClearColor(),gt=Dt.getClearAlpha(),vt=lt.r,Et=lt.g,yt=lt.b;at?(p[0]=vt,p[1]=Et,p[2]=yt,p[3]=gt,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=vt,v[1]=Et,v[2]=yt,v[3]=gt,N.clearBufferiv(N.COLOR,0,v))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",ht,!1),ct.dispose(),qt.dispose(),Pt.dispose(),M.dispose(),F.dispose(),K.dispose(),he.dispose(),U.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",nr),X.removeEventListener("sessionend",No),ni.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=pe.autoReset,O=mt.enabled,z=mt.autoUpdate,G=mt.needsUpdate,I=mt.type;ut(),pe.autoReset=b,mt.enabled=O,mt.autoUpdate=z,mt.needsUpdate=G,mt.type=I}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){let O=b.target;O.removeEventListener("dispose",ae),ze(O)}function ze(b){$e(b),Pt.remove(b)}function $e(b){let O=Pt.get(b).programs;O!==void 0&&(O.forEach(function(z){St.releaseProgram(z)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,z,G,I,et){O===null&&(O=jt);let at=I.isMesh&&I.matrixWorld.determinant()<0,lt=Ie(b,O,z,G,I);Ut.setMaterial(G,at);let gt=z.index,vt=1;if(G.wireframe===!0){if(gt=j.getWireframeAttribute(z),gt===void 0)return;vt=2}let Et=z.drawRange,yt=z.attributes.position,ne=Et.start*vt,le=(Et.start+Et.count)*vt;et!==null&&(ne=Math.max(ne,et.start*vt),le=Math.min(le,(et.start+et.count)*vt)),gt!==null?(ne=Math.max(ne,0),le=Math.min(le,gt.count)):yt!=null&&(ne=Math.max(ne,0),le=Math.min(le,yt.count));let ce=le-ne;if(ce<0||ce===1/0)return;he.setup(I,G,lt,z,gt);let Ee,Vt=dt;if(gt!==null&&(Ee=q.get(gt),Vt=Yt,Vt.setIndex(Ee)),I.isMesh)G.wireframe===!0?(Ut.setLineWidth(G.wireframeLinewidth*kt()),Vt.setMode(N.LINES)):Vt.setMode(N.TRIANGLES);else if(I.isLine){let Mt=G.linewidth;Mt===void 0&&(Mt=1),Ut.setLineWidth(Mt*kt()),I.isLineSegments?Vt.setMode(N.LINES):I.isLineLoop?Vt.setMode(N.LINE_LOOP):Vt.setMode(N.LINE_STRIP)}else I.isPoints?Vt.setMode(N.POINTS):I.isSprite&&Vt.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Vt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Mt=I._multiDrawStarts,Ve=I._multiDrawCounts,ue=I._multiDrawCount,Un=gt?q.get(gt).bytesPerElement:1,sr=Pt.get(G).currentProgram.getUniforms();for(let Vn=0;Vn<ue;Vn++)sr.setValue(N,"_gl_DrawID",Vn),Vt.render(Mt[Vn]/Un,Ve[Vn])}else if(I.isInstancedMesh)Vt.renderInstances(ne,ce,I.count);else if(z.isInstancedBufferGeometry){let Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ve=Math.min(z.instanceCount,Mt);Vt.renderInstances(ne,ce,Ve)}else Vt.render(ne,ce)};function Qt(b,O,z){b.transparent===!0&&b.side===Ji&&b.forceSinglePass===!1?(b.side=Sn,b.needsUpdate=!0,Bt(b,O,z),b.side=zs,b.needsUpdate=!0,Bt(b,O,z),b.side=Ji):Bt(b,O,z)}this.compile=function(b,O,z=null){z===null&&(z=b),m=qt.get(z),m.init(O),g.push(m),z.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),b!==z&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();let G=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let et=I.material;if(et)if(Array.isArray(et))for(let at=0;at<et.length;at++){let lt=et[at];Qt(lt,z,I),G.add(lt)}else Qt(et,z,I),G.add(et)}),g.pop(),m=null,G},this.compileAsync=function(b,O,z=null){let G=this.compile(b,O,z);return new Promise(I=>{function et(){if(G.forEach(function(at){Pt.get(at).currentProgram.isReady()&&G.delete(at)}),G.size===0){I(b);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let _n=null;function vi(b){_n&&_n(b)}function nr(){ni.stop()}function No(){ni.start()}let ni=new k_;ni.setAnimationLoop(vi),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){_n=b,X.setAnimationLoop(b),b===null?ni.stop():ni.start()},X.addEventListener("sessionstart",nr),X.addEventListener("sessionend",No),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,T),m=qt.get(b,g.length),m.init(O),g.push(m),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,Y=tt.init(this.clippingPlanes,nt),x=ct.get(b,u.length),x.init(),u.push(x),X.enabled===!0&&X.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&ir(et,O,-1/0,_.sortObjects)}ir(b,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,st),oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,oe&&Dt.addToRenderList(x,b),this.info.render.frame++,Y===!0&&tt.beginShadows();let z=m.state.shadowsArray;mt.render(z,b,O),Y===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=x.opaque,I=x.transmissive;if(m.setupLights(),O.isArrayCamera){let et=O.cameras;if(I.length>0)for(let at=0,lt=et.length;at<lt;at++){let gt=et[at];bt(G,I,b,gt)}oe&&Dt.render(b);for(let at=0,lt=et.length;at<lt;at++){let gt=et[at];At(x,b,gt,gt.viewport)}}else I.length>0&&bt(G,I,b,O),oe&&Dt.render(b),At(x,b,O);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,O),he.resetDefaultState(),D=-1,k=null,g.pop(),g.length>0?(m=g[g.length-1],Y===!0&&tt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ir(b,O,z,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){G&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);let at=K.update(b),lt=b.material;lt.visible&&x.push(b,at,lt,z,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){let at=K.update(b),lt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Nt.copy(at.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(lt)){let gt=at.groups;for(let vt=0,Et=gt.length;vt<Et;vt++){let yt=gt[vt],ne=lt[yt.materialIndex];ne&&ne.visible&&x.push(b,at,ne,z,Nt.z,yt)}}else lt.visible&&x.push(b,at,lt,z,Nt.z,null)}}let et=b.children;for(let at=0,lt=et.length;at<lt;at++)ir(et[at],O,z,G)}function At(b,O,z,G){let I=b.opaque,et=b.transmissive,at=b.transparent;m.setupLightsView(z),Y===!0&&tt.setGlobalState(_.clippingPlanes,z),G&&Ut.viewport(y.copy(G)),I.length>0&&wt(I,O,z),et.length>0&&wt(et,O,z),at.length>0&&wt(at,O,z),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function bt(b,O,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new is(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?il:es,minFilter:Aa,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let et=m.state.transmissionRenderTarget[G.id],at=G.viewport||y;et.setSize(at.z,at.w);let lt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(L),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),oe&&Dt.render(z);let gt=_.toneMapping;_.toneMapping=Is;let vt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Y===!0&&tt.setGlobalState(_.clippingPlanes,G),wt(b,z,G),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let yt=0,ne=O.length;yt<ne;yt++){let le=O[yt],ce=le.object,Ee=le.geometry,Vt=le.material,Mt=le.group;if(Vt.side===Ji&&ce.layers.test(G.layers)){let Ve=Vt.side;Vt.side=Sn,Vt.needsUpdate=!0,Rt(ce,z,G,Ee,Vt,Mt),Vt.side=Ve,Vt.needsUpdate=!0,Et=!0}}Et===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}_.setRenderTarget(lt),_.setClearColor(L,H),vt!==void 0&&(G.viewport=vt),_.toneMapping=gt}function wt(b,O,z){let G=O.isScene===!0?O.overrideMaterial:null;for(let I=0,et=b.length;I<et;I++){let at=b[I],lt=at.object,gt=at.geometry,vt=G===null?at.material:G,Et=at.group;lt.layers.test(z.layers)&&Rt(lt,O,z,gt,vt,Et)}}function Rt(b,O,z,G,I,et){b.onBeforeRender(_,O,z,G,I,et),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(_,O,z,G,b,et),I.transparent===!0&&I.side===Ji&&I.forceSinglePass===!1?(I.side=Sn,I.needsUpdate=!0,_.renderBufferDirect(z,O,G,I,b,et),I.side=zs,I.needsUpdate=!0,_.renderBufferDirect(z,O,G,I,b,et),I.side=Ji):_.renderBufferDirect(z,O,G,I,b,et),b.onAfterRender(_,O,z,G,I,et)}function Bt(b,O,z){O.isScene!==!0&&(O=jt);let G=Pt.get(b),I=m.state.lights,et=m.state.shadowsArray,at=I.state.version,lt=St.getParameters(b,I.state,et,O,z),gt=St.getProgramCacheKey(lt),vt=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,vt===void 0&&(b.addEventListener("dispose",ae),vt=new Map,G.programs=vt);let Et=vt.get(gt);if(Et!==void 0){if(G.currentProgram===Et&&G.lightsStateVersion===at)return Xe(b,lt),Et}else lt.uniforms=St.getUniforms(b),b.onBeforeCompile(lt,_),Et=St.acquireProgram(lt,gt),vt.set(gt,Et),G.uniforms=lt.uniforms;let yt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=tt.uniform),Xe(b,lt),G.needsLights=Nn(b),G.lightsStateVersion=at,G.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Et,G.uniformsList=null,Et}function me(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Xe(b,O){let z=Pt.get(b);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Ie(b,O,z,G,I){O.isScene!==!0&&(O=jt),A.resetTextureUnits();let et=O.fog,at=G.isMeshStandardMaterial?O.environment:null,lt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hs,gt=(G.isMeshStandardMaterial?F:M).get(G.envMap||at),vt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Et=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),yt=!!z.morphAttributes.position,ne=!!z.morphAttributes.normal,le=!!z.morphAttributes.color,ce=Is;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ce=_.toneMapping);let Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Vt=Ee!==void 0?Ee.length:0,Mt=Pt.get(G),Ve=m.state.lights;if(Y===!0&&(nt===!0||b!==k)){let ii=b===k&&G.id===D;tt.setState(G,b,ii)}let ue=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ve.state.version||Mt.outputColorSpace!==lt||I.isBatchedMesh&&Mt.batching===!1||!I.isBatchedMesh&&Mt.batching===!0||I.isBatchedMesh&&Mt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Mt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Mt.instancing===!1||!I.isInstancedMesh&&Mt.instancing===!0||I.isSkinnedMesh&&Mt.skinning===!1||!I.isSkinnedMesh&&Mt.skinning===!0||I.isInstancedMesh&&Mt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Mt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Mt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Mt.instancingMorph===!1&&I.morphTexture!==null||Mt.envMap!==gt||G.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==vt||Mt.vertexTangents!==Et||Mt.morphTargets!==yt||Mt.morphNormals!==ne||Mt.morphColors!==le||Mt.toneMapping!==ce||Mt.morphTargetsCount!==Vt)&&(ue=!0):(ue=!0,Mt.__version=G.version);let Un=Mt.currentProgram;ue===!0&&(Un=Bt(G,O,I));let sr=!1,Vn=!1,af=!1,Ge=Un.getUniforms(),As=Mt.uniforms;if(Ut.useProgram(Un.program)&&(sr=!0,Vn=!0,af=!0),G.id!==D&&(D=G.id,Vn=!0),sr||k!==b){Xt.reverseDepthBuffer?(_t.copy(b.projectionMatrix),h1(_t),f1(_t),Ge.setValue(N,"projectionMatrix",_t)):Ge.setValue(N,"projectionMatrix",b.projectionMatrix),Ge.setValue(N,"viewMatrix",b.matrixWorldInverse);let ii=Ge.map.cameraPosition;ii!==void 0&&ii.setValue(N,Ot.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&Ge.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ge.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,Vn=!0,af=!0)}if(I.isSkinnedMesh){Ge.setOptional(N,I,"bindMatrix"),Ge.setOptional(N,I,"bindMatrixInverse");let ii=I.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),Ge.setValue(N,"boneTexture",ii.boneTexture,A))}I.isBatchedMesh&&(Ge.setOptional(N,I,"batchingTexture"),Ge.setValue(N,"batchingTexture",I._matricesTexture,A),Ge.setOptional(N,I,"batchingIdTexture"),Ge.setValue(N,"batchingIdTexture",I._indirectTexture,A),Ge.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&Ge.setValue(N,"batchingColorTexture",I._colorsTexture,A));let rf=z.morphAttributes;if((rf.position!==void 0||rf.normal!==void 0||rf.color!==void 0)&&Ct.update(I,z,Un),(Vn||Mt.receiveShadow!==I.receiveShadow)&&(Mt.receiveShadow=I.receiveShadow,Ge.setValue(N,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(As.envMap.value=gt,As.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(As.envMapIntensity.value=O.environmentIntensity),Vn&&(Ge.setValue(N,"toneMappingExposure",_.toneMappingExposure),Mt.needsLights&&hn(As,af),et&&G.fog===!0&&it.refreshFogUniforms(As,et),it.refreshMaterialUniforms(As,G,Q,B,m.state.transmissionRenderTarget[b.id]),Rr.upload(N,me(Mt),As,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rr.upload(N,me(Mt),As,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ge.setValue(N,"center",I.center),Ge.setValue(N,"modelViewMatrix",I.modelViewMatrix),Ge.setValue(N,"normalMatrix",I.normalMatrix),Ge.setValue(N,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ii=G.uniformsGroups;for(let of=0,BM=ii.length;of<BM;of++){let s0=ii[of];U.update(s0,Un),U.bind(s0,Un)}}return Un}function hn(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Nn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,z){Pt.get(b.texture).__webglTexture=O,Pt.get(b.depthTexture).__webglTexture=z;let G=Pt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let z=Pt.get(b);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,z=0){T=b,R=O,C=z;let G=!0,I=null,et=!1,at=!1;if(b){let gt=Pt.get(b);if(gt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(gt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(gt.__hasExternalTextures)A.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let yt=b.depthTexture;if(gt.__boundDepthTexture!==yt){if(yt!==null&&Pt.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(at=!0);let Et=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[O])?I=Et[O][z]:I=Et[O],et=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?I=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?I=Et[z]:I=Et,y.copy(b.viewport),E.copy(b.scissor),V=b.scissorTest}else y.copy(pt).multiplyScalar(Q).floor(),E.copy(xt).multiplyScalar(Q).floor(),V=ee;if(Ut.bindFramebuffer(N.FRAMEBUFFER,I)&&G&&Ut.drawBuffers(b,I),Ut.viewport(y),Ut.scissor(E),Ut.setScissorTest(V),et){let gt=Pt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,z)}else if(at){let gt=Pt.get(b.texture),vt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,vt)}D=-1},this.readRenderTargetPixels=function(b,O,z,G,I,et,at){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(lt=lt[at]),lt){Ut.bindFramebuffer(N.FRAMEBUFFER,lt);try{let gt=b.texture,vt=gt.format,Et=gt.type;if(!Xt.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&z>=0&&z<=b.height-I&&N.readPixels(O,z,G,I,zt.convert(vt),zt.convert(Et),et)}finally{let gt=T!==null?Pt.get(T).__webglFramebuffer:null;Ut.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(b,O,z,G,I,et,at){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(lt=lt[at]),lt){let gt=b.texture,vt=gt.format,Et=gt.type;if(!Xt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&z>=0&&z<=b.height-I){Ut.bindFramebuffer(N.FRAMEBUFFER,lt);let yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(O,z,G,I,zt.convert(vt),zt.convert(Et),0);let ne=T!==null?Pt.get(T).__webglFramebuffer:null;Ut.bindFramebuffer(N.FRAMEBUFFER,ne);let le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await u1(N,le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(yt),N.deleteSync(le),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,z=0){b.isTexture!==!0&&(Gc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let G=Math.pow(2,-z),I=Math.floor(b.image.width*G),et=Math.floor(b.image.height*G),at=O!==null?O.x:0,lt=O!==null?O.y:0;A.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,at,lt,I,et),Ut.unbindTexture()},this.copyTextureToTexture=function(b,O,z=null,G=null,I=0){b.isTexture!==!0&&(Gc("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],I=arguments[3]||0,z=null);let et,at,lt,gt,vt,Et;z!==null?(et=z.max.x-z.min.x,at=z.max.y-z.min.y,lt=z.min.x,gt=z.min.y):(et=b.image.width,at=b.image.height,lt=0,gt=0),G!==null?(vt=G.x,Et=G.y):(vt=0,Et=0);let yt=zt.convert(O.format),ne=zt.convert(O.type);A.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let le=N.getParameter(N.UNPACK_ROW_LENGTH),ce=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ee=N.getParameter(N.UNPACK_SKIP_PIXELS),Vt=N.getParameter(N.UNPACK_SKIP_ROWS),Mt=N.getParameter(N.UNPACK_SKIP_IMAGES),Ve=b.isCompressedTexture?b.mipmaps[I]:b.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,gt),b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,vt,Et,et,at,yt,ne,Ve.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,vt,Et,Ve.width,Ve.height,yt,Ve.data):N.texSubImage2D(N.TEXTURE_2D,I,vt,Et,et,at,yt,ne,Ve),N.pixelStorei(N.UNPACK_ROW_LENGTH,le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Mt),I===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(b,O,z=null,G=null,I=0){b.isTexture!==!0&&(Gc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],I=arguments[4]||0);let et,at,lt,gt,vt,Et,yt,ne,le,ce=b.isCompressedTexture?b.mipmaps[I]:b.image;z!==null?(et=z.max.x-z.min.x,at=z.max.y-z.min.y,lt=z.max.z-z.min.z,gt=z.min.x,vt=z.min.y,Et=z.min.z):(et=ce.width,at=ce.height,lt=ce.depth,gt=0,vt=0,Et=0),G!==null?(yt=G.x,ne=G.y,le=G.z):(yt=0,ne=0,le=0);let Ee=zt.convert(O.format),Vt=zt.convert(O.type),Mt;if(O.isData3DTexture)A.setTexture3D(O,0),Mt=N.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)A.setTexture2DArray(O,0),Mt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Ve=N.getParameter(N.UNPACK_ROW_LENGTH),ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Un=N.getParameter(N.UNPACK_SKIP_PIXELS),sr=N.getParameter(N.UNPACK_SKIP_ROWS),Vn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Et),b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Mt,I,yt,ne,le,et,at,lt,Ee,Vt,ce.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,I,yt,ne,le,et,at,lt,Ee,ce.data):N.texSubImage3D(Mt,I,yt,ne,le,et,at,lt,Ee,Vt,ce),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ve),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Un),N.pixelStorei(N.UNPACK_SKIP_ROWS,sr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vn),I===0&&O.generateMipmaps&&N.generateMipmap(Mt),Ut.unbindTexture()},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Ut.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,Ut.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===vp?"display-p3":"srgb",n.unpackColorSpace=ge.workingColorSpace===bu?"display-p3":"srgb"}};var ou=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lu=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Jd=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Ld,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new P,cu=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(t),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=_e(n,this.array),i=_e(i,this.array),s=_e(s,this.array),a=_e(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new Mn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ir=class extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,Bo=new P,Mr=new P,br=new P,Er=new Lt,Fo=new Lt,Z_=new Le,Cc=new P,Ho=new P,Rc=new P,d_=new Lt,Wf=new Lt,p_=new Lt,Qo=class extends tn{constructor(t=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new bn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jd(n,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new cu(i,3,0,!1)),Sr.setAttribute("uv",new cu(i,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new Lt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Z_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-br.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Dc(Cc.set(-.5,-.5,0),br,r,Mr,s,a),Dc(Ho.set(.5,-.5,0),br,r,Mr,s,a),Dc(Rc.set(.5,.5,0),br,r,Mr,s,a),d_.set(0,0),Wf.set(1,0),p_.set(1,1);let o=t.ray.intersectTriangle(Cc,Ho,Rc,!1,Bo);if(o===null&&(Dc(Ho.set(-.5,.5,0),br,r,Mr,s,a),Wf.set(0,1),o=t.ray.intersectTriangle(Cc,Rc,Ho,!1,Bo),o===null))return;let l=t.ray.origin.distanceTo(Bo);l<t.near||l>t.far||n.push({distance:l,point:Bo.clone(),uv:Os.getInterpolation(Bo,Cc,Ho,Rc,d_,Wf,p_,new Lt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Dc(e,t,n,i,s,a){Er.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Fo.x=a*Er.x-s*Er.y,Fo.y=s*Er.x+a*Er.y):Fo.copy(Er),e.copy(t),e.x+=Fo.x,e.y+=Fo.y,e.applyMatrix4(Z_)}var jo=class extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uu=new P,hu=new P,m_=new Le,Vo=new Da,Nc=new Ra,Xf=new P,g_=new P,fu=class extends tn{constructor(t=new bn,n=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)uu.fromBufferAttribute(n,s-1),hu.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=uu.distanceTo(hu);t.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=a,t.ray.intersectsSphere(Nc)===!1)return;m_.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(m_);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){let u=h.getX(x),g=h.getX(x+1),_=Uc(this,t,Vo,l,u,g);_&&n.push(_)}if(this.isLineLoop){let x=h.getX(v-1),m=h.getX(p),u=Uc(this,t,Vo,l,x,m);u&&n.push(u)}}else{let p=Math.max(0,r.start),v=Math.min(f.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){let u=Uc(this,t,Vo,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){let x=Uc(this,t,Vo,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Uc(e,t,n,i,s,a){let r=e.geometry.attributes.position;if(uu.fromBufferAttribute(r,s),hu.fromBufferAttribute(r,a),n.distanceSqToSegment(uu,hu,Xf,g_)>i)return;Xf.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Xf);if(!(l<t.near||l>t.far))return{distance:l,point:g_.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var __=new P,v_=new P,Qd=class extends fu{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)__.fromBufferAttribute(n,s),v_.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+__.distanceTo(v_);t.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $o=class extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},y_=new Le,jd=new Da,Lc=new Ra,Oc=new P,du=class extends tn{constructor(t=new bn,n=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=a,t.ray.intersectsSphere(Lc)===!1)return;y_.copy(s).invert(),jd.copy(t.ray).applyMatrix4(y_);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=f,x=p;v<x;v++){let m=c.getX(v);Oc.fromBufferAttribute(d,m),x_(Oc,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=f,x=p;v<x;v++)Oc.fromBufferAttribute(d,v),x_(Oc,v,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function x_(e,t,n,i,s,a,r){let o=jd.distanceSqToPoint(e);if(o<n){let l=new P;jd.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var zr=class extends Wn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class e extends bn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],v=0,x=[],m=i/2,u=0;g(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(p,2));function g(){let S=new P,R=new P,C=0,T=(n-t)/i;for(let D=0;D<=a;D++){let k=[],y=D/a,E=y*(n-t)+t;for(let V=0;V<=s;V++){let L=V/s,H=L*l+o,Z=Math.sin(H),B=Math.cos(H);R.x=E*Z,R.y=-y*i+m,R.z=E*B,d.push(R.x,R.y,R.z),S.set(Z,T,B).normalize(),f.push(S.x,S.y,S.z),p.push(L,1-y),k.push(v++)}x.push(k)}for(let D=0;D<s;D++)for(let k=0;k<a;k++){let y=x[k][D],E=x[k+1][D],V=x[k+1][D+1],L=x[k][D+1];t>0&&(h.push(y,E,L),C+=3),n>0&&(h.push(E,V,L),C+=3)}c.addGroup(u,C,0),u+=C}function _(S){let R=v,C=new Lt,T=new P,D=0,k=S===!0?t:n,y=S===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;let E=v;for(let V=0;V<=s;V++){let H=V/s*l+o,Z=Math.cos(H),B=Math.sin(H);T.x=k*B,T.y=m*y,T.z=k*Z,d.push(T.x,T.y,T.z),f.push(0,y,0),C.x=Z*.5+.5,C.y=B*.5*y+.5,p.push(C.x,C.y),v++}for(let V=0;V<s;V++){let L=R+V,H=E+V;S===!0?h.push(H,H+1,L):h.push(H+1,H,L),D+=3}c.addGroup(u,D,S===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tl=class e extends ss{constructor(t=1,n=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,n,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pu=class e extends bn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new P,f=new P,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){let g=[],_=u/i,S=0;u===0&&r===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){let C=R/n;d.x=-t*Math.cos(s+C*a)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(s+C*a)*Math.sin(r+_*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+S,1-_),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){let _=h[u][g+1],S=h[u][g],R=h[u+1][g],C=h[u+1][g+1];(u!==0||r>0)&&p.push(_,S,C),(u!==i-1||l<Math.PI)&&p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xn=class extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=z_,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Pc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function o2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Br=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$d=class extends Br{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S0,endingEnd:S0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case M0:a=t,o=2*n-i;break;case b0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case M0:r=t,l=2*i-n;break;case b0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-n)/(s-n),x=v*v,m=x*v,u=-f*m+2*f*x-f*v,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*v+1,_=(-1-p)*m+(1.5+p)*x+.5*v,S=p*m-p*x;for(let R=0;R!==o;++R)a[R]=u*r[h+R]+g*r[c+R]+_*r[l+R]+S*r[d+R];return a}},tp=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},ep=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pc(n,this.TimeBufferType),this.values=Pc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Pc(t.times,Array),values:Pc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ep(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $d(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Wc:n=this.InterpolantFactoryMethodDiscrete;break;case Ud:n=this.InterpolantFactoryMethodLinear;break;case gf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wc;case this.InterpolantFactoryMethodLinear:return Ud;case this.InterpolantFactoryMethodSmooth:return gf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&o2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){let x=n[d+v];if(x!==n[f+v]||x!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Ud;var Na=class extends wi{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Wc;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var np=class extends wi{};np.prototype.ValueTypeName="color";var ip=class extends wi{};ip.prototype.ValueTypeName="number";var sp=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Ai.slerpFlat(a,0,r,c-o,r,c,l);return a}},mu=class extends wi{InterpolantFactoryMethodLinear(t){return new sp(this.times,this.values,this.getValueSize(),t)}};mu.prototype.ValueTypeName="quaternion";mu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends wi{constructor(t,n,i){super(t,n,i)}};Ua.prototype.ValueTypeName="string";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Wc;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var ap=class extends wi{};ap.prototype.ValueTypeName="vector";var rp=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}},l2=new rp,op=class{constructor(t){this.manager=t!==void 0?t:l2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};op.DEFAULT_MATERIAL_NAME="__DEFAULT";var el=class extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},gu=class extends el{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},qf=new Le,S_=new P,M_=new P,lp=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;S_.setFromMatrixPosition(t.matrixWorld),n.position.copy(S_),M_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(M_),n.updateMatrixWorld(),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var cp=class extends lp{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_u=class extends el{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new cp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},vu=class extends el{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sp="\\[\\]\\.:\\/",c2=new RegExp("["+Sp+"]","g"),Mp="[^"+Sp+"]",u2="[^"+Sp.replace("\\.","")+"]",h2=/((?:WC+[\/:])*)/.source.replace("WC",Mp),f2=/(WCOD+)?/.source.replace("WCOD",u2),d2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mp),p2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mp),m2=new RegExp("^"+h2+f2+d2+p2+"$"),g2=["material","materials","bones","map"],up=class{constructor(t,n,i){let s=i||Ue.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ue=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c2,"")}static parseTrackName(t){let n=m2.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);g2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=up;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M3=new Float32Array(1);var nl=class{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var b_=new P,Ic,Yf,yu=class extends tn{constructor(t=new P(0,0,1),n=new P(0,0,0),i=1,s=16776960,a=i*.2,r=a*.2){super(),this.type="ArrowHelper",Ic===void 0&&(Ic=new bn,Ic.setAttribute("position",new Ye([0,0,0,0,1,0],3)),Yf=new ss(0,.5,1,5,1),Yf.translate(0,-.5,0)),this.position.copy(n),this.line=new fu(Ic,new jo({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ce(Yf,new Ko({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,a,r)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{b_.set(t.z,0,-t.x).normalize();let n=Math.acos(t.y);this.quaternion.setFromAxisAngle(b_,n)}}setLength(t,n=t*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,t-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},xu=class extends Qd{constructor(t=1){let n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new bn;s.setAttribute("position",new Ye(n,3)),s.setAttribute("color",new Ye(i,3));let a=new jo({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,n,i){let s=new Ft,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(n),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Su=class extends ns{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var K_={type:"change"},Ep={type:"start"},Q_={type:"end"},Tu=new Da,J_=new Mi,v2=Math.cos(70*F_.DEG2RAD),sn=new P,Ln=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bp=1e-6,Au=class extends Su{constructor(t,n=null){super(t,n),this.state=xe.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:La.ROTATE,MIDDLE:La.DOLLY,RIGHT:La.PAN},this.touches={ONE:Oa.ROTATE,TWO:Oa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ai,this._lastTargetPosition=new P,this._quat=new Ai().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nl,this._sphericalDelta=new nl,this._scale=1,this._panOffset=new P,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new P,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x2.bind(this),this._onPointerDown=y2.bind(this),this._onPointerUp=S2.bind(this),this._onContextMenu=C2.bind(this),this._onMouseWheel=E2.bind(this),this._onKeyDown=T2.bind(this),this._onTouchStart=A2.bind(this),this._onTouchMove=w2.bind(this),this._onMouseDown=M2.bind(this),this._onMouseMove=b2.bind(this),this._interceptControlDown=R2.bind(this),this._interceptControlUp=D2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K_),this.update(),this.state=xe.NONE}update(t=null){let n=this.object.position;sn.copy(n).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),n.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=sn.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Tu.origin.copy(this.object.position),Tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tu.direction))<v2?this.object.lookAt(this.target):(J_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tu.intersectPlane(J_,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>bp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bp||this._lastTargetPosition.distanceToSquared(this.target)>bp?(this.dispatchEvent(K_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){sn.setFromMatrixColumn(n,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,n){this.screenSpacePanning===!0?sn.setFromMatrixColumn(n,1):(sn.setFromMatrixColumn(n,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let a=sn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Lt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function y2(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function x2(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function S2(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q_),this.state=xe.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function M2(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case La.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=xe.DOLLY;break;case La.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=xe.ROTATE}break;case La.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ep)}function b2(e){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function E2(e){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(e.preventDefault(),this.dispatchEvent(Ep),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Q_))}function T2(e){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(e)}function A2(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Oa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=xe.TOUCH_ROTATE;break;case Oa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Oa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=xe.TOUCH_DOLLY_PAN;break;case Oa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ep)}function w2(e){switch(this._trackPointer(e),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=xe.NONE}}function C2(e){this.enabled!==!1&&e.preventDefault()}function R2(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D2(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var w=ma(sl(),1),ev={Hpole:9,Hsign:7,esign:3.7,Bsign:6,Dsign:2,Dbase:610,Dtop:355,tw:12.7,Fy:350,Es:2e5,gamS:77,Vwind:45,Kz:.87,Kzt:1,Gwind:1.14,CdSign:1.7,CdPole:.45,tice:3,gamIce:9,Wdms:6,phi:.9,deflRatio:150,rhoAir:1.225,nuAir:15e-6,St:.2,zeta:.01,Dpad:4,Bpad:2.5,hpad:1,Dneck:1.13,hneck:2.195,hfill:2.145,gamS2:22,fc:30,fy2:400,phic:.75,phis:.9,cov:75,qcap:250,fric:.5,nb1:17,nb2:11,db:20,na:12,dba:38,Lba:1372,Futa:517,hef:635,aPlateT:9.5,BCD:930,ca1:170};function L2(e){return[{title:"Geometry",fields:[{key:"Hpole",label:"Pole height above base, H\u209A",unit:"m",step:.1,ref:"Overall cantilever height"},{key:"Hsign",label:"Sign centroid elevation, h\u209B",unit:"m",step:.1,ref:"Sign c.g. height"},{key:"esign",label:"Sign eccentricity (torsion arm), e",unit:"m",step:.1,ref:"Arm reach"},{key:"Bsign",label:"Sign panel width, B\u209B",unit:"m",step:.1,ref:"DMS panel width"},{key:"Dsign",label:"Sign panel height, d\u209B",unit:"m",step:.1,ref:"DMS panel height"},{key:"Dbase",label:"Pole OD at base, D",unit:"mm",step:5,ref:"Governing section"},{key:"Dtop",label:"Pole OD at top, D\u209C",unit:"mm",step:5,ref:"Tapered pole top OD"},{key:"tw",label:"Wall thickness, t",unit:"mm",step:.1,ref:"Constant wall assumed"}]},{title:"Materials",fields:[{key:"Fy",label:"Steel yield, Fy",unit:"MPa",step:10,ref:"CSA G40.21 350W"},{key:"Es",label:"Modulus, E",unit:"MPa",step:5e3,ref:"CSA S16"},{key:"gamS",label:"Steel unit weight, \u03B3s",unit:"kN/m\xB3",step:1,ref:"Nominal"}]},{title:e?"Wind \u2014 CAN/CSA S6-19 Cl.3.10":"Wind \u2014 AASHTO LTS 3.8",fields:[{key:"Vwind",label:"Design 3-s gust, V",unit:"m/s",step:1,ref:"Per BC MoTT site data"},e?{key:"Kz",label:"Exposure coefficient, Ce",unit:"-",step:.01,ref:"CHBDC Cl.3.10.1.3"}:{key:"Kz",label:"Height/exposure, Kz",unit:"-",step:.01,ref:"LTS 3.8.4"},...e?[]:[{key:"Kzt",label:"Topographic, Kzt",unit:"-",step:.05,ref:"LTS 3.8.5"}],e?{key:"Gwind",label:"Gust effect, Cg",unit:"-",step:.05,ref:"CHBDC Cl.3.10.1.4 (~2.0)"}:{key:"Gwind",label:"Gust effect, G (\u22651.14)",unit:"-",step:.01,ref:"LTS 3.8.6"},{key:"CdSign",label:"Drag \u2014 sign, Cd,s",unit:"-",step:.05,ref:e?"CHBDC Cl.3.10.1.5":"LTS Table 3.8.7-1"},{key:"CdPole",label:"Drag \u2014 pole, Cd,p",unit:"-",step:.05,ref:e?"CHBDC Cl.3.10.1.5":"LTS Table 3.8.7-1"}]},{title:"Ice, Dead & Resistance",fields:[{key:"tice",label:"Radial ice thickness, t\u1D62",unit:"mm",step:.5,ref:e?"CHBDC climatic / owner":"LTS 3.9 / owner"},{key:"gamIce",label:"Ice unit weight, \u03B3\u1D62",unit:"kN/m\xB3",step:.5,ref:"~900 kg/m\xB3"},{key:"Wdms",label:"DMS + attachments dead, Wd",unit:"kN",step:.5,ref:"From supplier"},{key:"phi",label:"Resistance factor, \u03C6",unit:"-",step:.05,ref:"CSA S16 Cl.13"},{key:"deflRatio",label:"Deflection limit, H/n",unit:"-",step:10,ref:e?"S6-19 / owner":"LTS 10.4 / owner"}]},{title:"Aerodynamics \u2014 Wind Tunnel (VIV & Galloping)",fields:[{key:"rhoAir",label:"Air density, \u03C1\u2090",unit:"kg/m\xB3",step:.005,ref:"Std air ~1.225"},{key:"nuAir",label:"Kinematic viscosity, \u03BD",unit:"m\xB2/s",step:1e-6,ref:"Air ~1.5\xD710\u207B\u2075"},{key:"St",label:"Strouhal number, St",unit:"-",step:.01,ref:"Round cylinder ~0.2"},{key:"zeta",label:"Damping ratio, \u03B6",unit:"-",step:.005,ref:"Welded steel ~0.005\u20130.01"}]},{title:"Foundation Geometry",fields:[{key:"Dpad",label:"Pad length, D",unit:"m",step:.1,ref:"Span along sign (CSA A23.3-19)"},{key:"Bpad",label:"Pad width, B",unit:"m",step:.1,ref:"Perpendicular to sign"},{key:"hpad",label:"Pad thickness, h_p",unit:"m",step:.05,ref:"Footing depth"},{key:"Dneck",label:"Neck diameter, \u00D8_n",unit:"m",step:.05,ref:"Circular pedestal"},{key:"hneck",label:"Neck height, h_n",unit:"m",step:.05,ref:"Above pad"},{key:"hfill",label:"Fill above pad, h_f",unit:"m",step:.05,ref:"Granular overburden"},{key:"gamS2",label:"Soil unit weight, \u03B3_s",unit:"kN/m\xB3",step:1,ref:"Granular backfill ~22"}]},{title:"Foundation Materials & Soil",fields:[{key:"fc",label:"Concrete, f'c",unit:"MPa",step:1,ref:"CSA A23.3-19"},{key:"fy2",label:"Rebar yield, f_y",unit:"MPa",step:10,ref:"CSA G30.18 400W"},{key:"phic",label:"Concrete \u03C6_c",unit:"-",step:.05,ref:"CSA A23.3-19 \xA78.4"},{key:"phis",label:"Steel \u03C6_s",unit:"-",step:.05,ref:"CSA A23.3-19 \xA78.4"},{key:"cov",label:"Clear cover",unit:"mm",step:5,ref:"Min 75 (CSA A23.3)"},{key:"qcap",label:"Factored bearing, q_r",unit:"kPa",step:10,ref:"ULS from geotech"},{key:"fric",label:"Soil friction, \u03BC",unit:"-",step:.05,ref:"Base-soil ~0.5"}]},{title:"Foundation Reinforcement",fields:[{key:"nb1",label:"Bars in D dir., n\u2081",unit:"-",step:1,ref:"20M default 17"},{key:"nb2",label:"Bars in B dir., n\u2082",unit:"-",step:1,ref:"20M default 11"},{key:"db",label:"Bar diameter, d_b",unit:"mm",step:1,ref:"20M=20, 25M=25"}]},{title:"Anchor Bolts (CSA A23.3-19 Annex D)",fields:[{key:"na",label:"Anchor count, n_a",unit:"-",step:1,ref:"12 typical"},{key:"dba",label:"Anchor diameter, d_a",unit:"mm",step:1,ref:"\u00D838 (1\xBD\")"},{key:"Lba",label:"Anchor length, L_a",unit:"mm",step:10,ref:"Project + embed"},{key:"Futa",label:"Bolt f_uta",unit:"MPa",step:10,ref:"F1554 GR55=517, GR105=862"},{key:"hef",label:"Embedment, h_ef",unit:"mm",step:10,ref:"Per supplier / PROFIS"},{key:"aPlateT",label:"Anchor plate thick.",unit:"mm",step:.5,ref:"A572 Gr50 base plate"},{key:"BCD",label:"Bolt circle \u00D8",unit:"mm",step:5,ref:"BCDs of anchor group"},{key:"ca1",label:"Edge distance, c_a1",unit:"mm",step:5,ref:"\u2265 1.5\u00B7h_ef"}]}]}var Ii=Math.PI;function nv(e,t,n=0){let i=e.Bsign*e.Dsign,s=t?.625*e.Kz*e.Gwind*e.Vwind**2:.613*e.Kz*e.Kzt*e.Gwind*e.Vwind**2,a=(e.Dbase+e.Dtop)/2/1e3*e.Hpole,r=Math.cos(n)**2,o=s*e.CdSign*i/1e3*r,l=s*e.CdPole*a/1e3,c=e.Dbase-2*e.tw,h=Ii/4*(e.Dbase**2-c**2),d=Ii/64*(e.Dbase**4-c**4),f=d/(e.Dbase/2),p=(e.Dbase**3-c**3)/6,v=Math.sqrt(d/h),x=2*d,m=x/(e.Dbase/2),u=e.Dbase/e.tw,g=u<=13e3/e.Fy?1:u<=18e3/e.Fy?2:u<=66e3/e.Fy?3:4,_=e.Dtop-2*e.tw,S=Ii/4*(e.Dtop**2-_**2),R=e.gamIce*(Ii*(e.Dbase/1e3)*(e.tice/1e3)*e.Hpole+i*(e.tice/1e3)),C=e.gamS*((h+S)/2)/1e6*e.Hpole,T=C+e.Wdms,D=o+l,k=o*e.Hsign+l*(e.Hpole/2),y=o*e.esign,E=R,V=1.1*T,L=1.3*D,H=1.3*k,Z=1.3*y,B=1.1*T+1.3*E,Q=.7*D,W=.7*k,st=.7*y,pt=Math.max(V,B),xt=Math.max(L,Q),ee=Math.max(H,W),se=Math.max(Z,st),Y=e.phi*e.Fy*(g<=2?p:f)/1e6,nt=e.phi*h*e.Fy/1e3,_t=e.phi*.66*e.Fy*(.5*h)/1e3,ft=e.phi*.66*e.Fy*m/1e6,Ot=pt/nt,Nt=ee/Y,jt=xt/_t,oe=se/ft,kt=Ot+Nt,N=jt+oe,je=Math.max(kt,N),Wt=je<=1,Xt=e.Hpole*1e3,Ut=e.Hsign*1e3,pe=o*1e3*Ut**2*(3*Xt-Ut)/(6*e.Es*d),Pt=l*1e3/Xt*Xt**4/(8*e.Es*d),A=pe+Pt,M=Xt/e.deflRatio,F=A<=M,q=9.81,j=(e.Dbase+e.Dtop)/2/1e3,St=3*e.Es*d/Xt**3*1e3,it=e.Wdms*1e3/q,ct=C*1e3/q,qt=it+.24*ct,tt=qt>0?1/(2*Ii)*Math.sqrt(St/qt):0,mt=tt>0?1/tt:1/0,Dt=e.nuAir>0?e.Vwind*j/e.nuAir:1/0,Ct=Dt<3e5?"Subcritical":Dt<35e5?"Supercritical":"Transcritical",dt=j>0?e.St*e.Vwind/j:0,Yt=e.St>0?tt*j/e.St:1/0,zt=tt>0&&j>0?e.Vwind/(tt*j):1/0,he=e.Hpole>0?ct/e.Hpole:0,U=e.rhoAir>0&&j>0?4*Ii*he*e.zeta/(e.rhoAir*j**2):1/0,ut=U<10,X=ut&&Yt<=e.Vwind,rt=2*U*tt*j/1,ht=rt<=e.Vwind&&rt>0;let Apad=e.Dpad*e.Bpad,Aneck=Ii/4*e.Dneck**2,Afill=Apad-Aneck,LcD=(e.Dpad-e.Dneck)/2,LcB=(e.Bpad-e.Dneck)/2,hpadmm=e.hpad*1e3,concSW=24*(Apad*e.hpad+Aneck*e.hneck),soilSW=e.gamS2*Afill*e.hfill,Nf=1.2*concSW+1.25*soilSW+pt,Vf_fnd=xt,Mf_fnd=ee,eXc=Mf_fnd/Math.max(Nf,1),kernD=6*eXc<=e.Dpad,kernB=6*eXc<=e.Bpad,PmaxD=Nf/Apad+6*Mf_fnd/(e.Bpad*e.Dpad**2),PminD=Nf/Apad-6*Mf_fnd/(e.Bpad*e.Dpad**2),PmaxB=Nf/Apad+6*Mf_fnd/(e.Dpad*e.Bpad**2),PminB=Nf/Apad-6*Mf_fnd/(e.Dpad*e.Bpad**2),Pmax=Math.max(PmaxD,PmaxB),Pmin=Math.min(PminD,PminB),bearingOK=Pmax<=e.qcap,slidingFOS=e.fric*Nf/Math.max(Vf_fnd,1),slidingOK=slidingFOS>=1.5,Wresist=.9*(concSW+soilSW),upliftDemand=Math.max(0,-pt),upliftOK=Nf>0&&Wresist>=upliftDemand;let PMcD=PmaxD-(PmaxD-PminD)/e.Dpad*(e.Dpad-e.Dneck)/2,MfaceD=PMcD*e.Bpad*LcD**2/2+(PmaxD-PMcD)*LcD/2*e.Bpad*(2/3)*LcD,PMcB=PmaxB-(PmaxB-PminB)/e.Bpad*(e.Bpad-e.Dneck)/2,MfaceB=PMcB*e.Dpad*LcB**2/2+(PmaxB-PMcB)*LcB/2*e.Dpad*(2/3)*LcB;let alpha1=Math.max(.85-.0015*e.fc,.67),beta1=Math.max(.97-.0025*e.fc,.67),Ab=Ii/4*e.db**2,dEff=hpadmm-e.cov-e.db/2,Ts1=e.phis*e.nb1*Ab*e.fy2/1e3,b1=e.Bpad*1e3,cc1=Ts1*1e3/(e.phic*alpha1*e.fc*beta1*b1*1e3),aa1=beta1*cc1,MrD=Ts1*(dEff-aa1/2)/1e3,flexDcD=MrD>=MfaceD,Ts2=e.phis*e.nb2*Ab*e.fy2/1e3,b2=e.Dpad*1e3,cc2=Ts2*1e3/(e.phic*alpha1*e.fc*beta1*b2*1e3),aa2=beta1*cc2,MrB=Ts2*(dEff-aa2/2)/1e3,flexDcB=MrB>=MfaceB;let fcr=.4*Math.sqrt(e.fc),dv=Math.max(.9*dEff,.72*hpadmm),bv_coef=230/(1e3+dv),Vc1=2.5*bv_coef*e.phic*fcr*b1*dv/1e3,Vc1max=.25*e.phic*e.fc*b1*dv/1e3,VcD=Math.min(Vc1,Vc1max),Vc2=2.5*bv_coef*e.phic*fcr*b2*dv/1e3,Vc2max=.25*e.phic*e.fc*b2*dv/1e3,VcB=Math.min(Vc2,Vc2max);let PV1=PmaxD-(PmaxD-PminD)/e.Dpad*(LcD-dEff/1e3),VfDdemand=(PmaxD+Math.max(0,PV1))/2*(LcD-dEff/1e3)*e.Bpad,VfBdemand=(PmaxB+PMcB)/2*LcB*e.Dpad,shearDcD=VcD>=VfDdemand,shearDcB=VcB>=VfBdemand;let Ase=.75*Ii/4*e.dba**2,Ra=.75,Nsar=Ase*e.Futa*Ra/1e3,A_brg=Ii/4*(1.5*e.dba)**2,Npr=8*A_brg*e.fc/1e3,Nsa=Math.min(Nsar,Npr),Vsar=.6*Ase*e.Futa*Ra/1e3,kcp=e.hef>=65?2:1,ANc0=9*e.hef**2,Nb=Nsa*e.na,Vcpr=kcp*Nb,Vsa=Math.min(Vsar,Vcpr);let rmax=e.BCD/2,sumr2=e.na*rmax**2,Fa_total=-pt,Na_max=Math.max(0,Fa_total/e.na+Mf_fnd*rmax/sumr2),Va_max=Math.abs(Vf_fnd)/e.na,bN=Na_max/Math.max(Nsa,.001),bV=Va_max/Math.max(Vsa,.001),combinedAnchor=Math.pow(bN,5/3)+Math.pow(bV,5/3),anchorOK=combinedAnchor<=1,foundationOK=bearingOK&&kernD&&kernB&&slidingOK&&upliftOK&&flexDcD&&flexDcB&&shearDcD&&shearDcB;return{A_sign:i,qz:s,Aproj_pole:a,F_sign:o,F_pole:l,di:c,A_sec:h,I_sec:d,S_sec:f,Z_sec:p,r_sec:v,J_sec:x,Ct_sec:m,Dt:u,Cls:g,A_sec_t:S,W_ice:R,W_pole:C,P_D:T,V_W:D,M_W:k,T_W:y,P_ice:E,Pf1:V,Vf1:L,Mf1:H,Tf1:Z,Pf2:B,Vf2:Q,Mf2:W,Tf2:st,Pf:pt,Vf:xt,Mf:ee,Tf:se,Mr:Y,Pr:nt,Vr:_t,Tr:ft,U_P:Ot,U_M:Nt,U_V:jt,U_T:oe,U_axbend:kt,U_sheartor:N,U_gov:je,strengthOK:Wt,d_sign:pe,d_pole:Pt,d_total:A,d_limit:M,deflOK:F,D_avg:j,fn:tt,Tn:mt,m_eff:qt,m_e:he,Re:Dt,regime:Ct,fs:dt,Vcr:Yt,Ur:zt,Sc:U,St:e.St,Vdesign:e.Vwind,vivProne:ut,vivRisk:X,Vg:rt,galloping:ht,Apad,Aneck,Afill,LcD,LcB,concSW,soilSW,Nf,Vf_fnd,Mf_fnd,eXc,kernD,kernB,PmaxD,PminD,PmaxB,PminB,Pmax,Pmin,bearingOK,slidingFOS,slidingOK,Wresist,upliftDemand,upliftOK,PMcD,MfaceD,PMcB,MfaceB,alpha1,beta1,Ab,dEff,Ts1,cc1,aa1,MrD,flexDcD,Ts2,cc2,aa2,MrB,flexDcB,fcr,dv,bv_coef,Vc1,Vc1max,VcD,Vc2,Vc2max,VcB,VfDdemand,VfBdemand,shearDcD,shearDcB,Ase,A_brg,Nsar,Npr,Nsa,Vsar,kcp,ANc0,Nb,Vcpr,Vsa,rmax,sumr2,Fa_total,Na_max,Va_max,bN,bV,combinedAnchor,anchorOK,foundationOK,qcap:e.qcap}}var Tt=(e,t=1)=>Number.isFinite(e)?e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t}):"-",Pa=e=>Number.isFinite(e)?Math.abs(e)>=1e5||Math.abs(e)<.001&&e!==0?e.toExponential(3):Tt(e,1):"-";function O2(){let[e,t]=(0,Jt.useState)(ev),[n,i]=(0,Jt.useState)("checks"),[s,a]=(0,Jt.useState)("design"),[r,o]=(0,Jt.useState)(!0),[l,c]=(0,Jt.useState)("aashto"),[h,d]=(0,Jt.useState)(!1),f=l==="csa",p=(0,Jt.useMemo)(()=>nv(e,f),[e,f]),v=(0,Jt.useMemo)(()=>L2(f),[f]),x=(m,u)=>t(g=>({...g,[m]:u===""?0:Number(u)}));return(0,w.jsxs)("main",{children:[(0,w.jsxs)("header",{className:"topbar",children:[(0,w.jsxs)("div",{className:"brand",children:[(0,w.jsx)("span",{className:"brand-mark",children:"SP"}),(0,w.jsxs)("div",{children:[(0,w.jsx)("strong",{children:"PoleWorks"}),(0,w.jsx)("small",{children:"CANTILEVER SIGN POLE STUDIO"})]})]}),(0,w.jsx)("div",{className:"code-pill",children:f?"CAN/CSA S6-19 (CHBDC) \xB7 CSA S16-19":"CAN/CSA S6-19 \xB7 AASHTO LTS \xB7 CSA S16-19"}),(0,w.jsxs)("div",{className:"code-switch",role:"group","aria-label":"Design code basis",children:[(0,w.jsx)("button",{type:"button",className:f?"":"on",onClick:()=>c("aashto"),children:"CSA + AASHTO"}),(0,w.jsx)("button",{type:"button",className:f?"on":"",onClick:()=>c("csa"),children:"CSA only"})]}),(0,w.jsxs)("div",{className:"code-switch view-switch",role:"group","aria-label":"Active view",children:[(0,w.jsx)("button",{type:"button",className:s==="design"?"on":"",onClick:()=>a("design"),children:"Design"}),(0,w.jsx)("button",{type:"button",className:s==="tunnel"?"on":"",onClick:()=>a("tunnel"),children:"Wind Tunnel"})]}),(0,w.jsx)("button",{className:"ghost",type:"button",onClick:()=>d(m=>!m),children:h?"Close help":"Formulas & help"}),(0,w.jsx)("button",{className:"export",type:"button",onClick:()=>window.print(),children:"Print summary"})]}),h&&(0,w.jsx)(G2,{csa:f,onClose:()=>d(!1)}),s==="tunnel"?(0,w.jsx)(H2,{input:e,r:p,csa:f}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("section",{className:"intro",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"HWY 43 DMS \u2014 CANTILEVER SIGN POLE"}),(0,w.jsxs)("h1",{children:["Screen the pole. ",(0,w.jsx)("em",{children:"Feel the wind."})]}),(0,w.jsx)("p",{className:"subhead",children:"Rapid strength, torsion and serviceability screening for a tapered cantilever DMS support. Drag the sliders and watch the pole respond to the gust."})]}),(0,w.jsxs)("div",{className:"status",children:[(0,w.jsx)("span",{className:`dot ${p.strengthOK&&p.deflOK?"pass":"fail"}`}),(0,w.jsxs)("div",{children:[(0,w.jsx)("b",{children:p.strengthOK&&p.deflOK?"Screening checks pass":"Review required"}),(0,w.jsxs)("small",{children:["U = ",Tt(p.U_gov,2)," \xB7 \u03B4 = ",Tt(p.d_total,1)," mm"]})]})]})]}),(0,w.jsxs)("div",{className:"workspace",children:[(0,w.jsxs)("aside",{className:"inputs",children:[(0,w.jsxs)("div",{className:"panel-title",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"MODEL INPUTS"}),(0,w.jsx)("h2",{children:"Pole, sign & site"})]}),(0,w.jsx)("button",{className:"reset",onClick:()=>t(ev),type:"button",children:"Reset"})]}),v.map(m=>(0,w.jsxs)("div",{className:"input-group",children:[(0,w.jsx)("p",{className:"group-head",children:m.title}),(0,w.jsx)("div",{className:"input-list",children:m.fields.map(u=>(0,w.jsxs)("label",{title:u.ref,children:[(0,w.jsx)("span",{children:u.label}),(0,w.jsxs)("div",{className:"number",children:[(0,w.jsx)("input",{type:"number",value:e[u.key],step:u.step,onChange:g=>x(u.key,g.target.value)}),(0,w.jsx)("small",{children:u.unit})]})]},u.key))})]},m.title)),(0,w.jsxs)("p",{className:"assumption",children:["Placeholder site data \u2014 replace with project values. Wind velocity pressure ",f?"qz = 0.625\xB7Ce\xB7Cg\xB7V\xB2 (CAN/CSA S6-19 Cl.3.10, \u03C1 = 1.25 kg/m\xB3)":"qz = 0.613\xB7Kz\xB7Kzt\xB7G\xB7V\xB2 (AASHTO LTS Eq 3.8.1-1, SI)",". Factored per CSA S6-19: Combo 1 = 1.1D + 1.3W; Combo 2 = 1.1D + 0.7W + 1.3I. Governing = max of combos. Not for construction \u2014 review and seal by a qualified professional engineer."]})]}),(0,w.jsx)(k2,{input:e,r:p,windOn:r,setWindOn:o}),(0,w.jsxs)("section",{className:"results",children:[(0,w.jsxs)("div",{className:"tabs",children:[(0,w.jsx)("button",{className:n==="checks"?"active":"",onClick:()=>i("checks"),type:"button",children:"Checks"}),(0,w.jsx)("button",{className:n==="demands"?"active":"",onClick:()=>i("demands"),type:"button",children:"Demands"}),(0,w.jsx)("button",{className:n==="section"?"active":"",onClick:()=>i("section"),type:"button",children:"Section"}),(0,w.jsx)("button",{className:n==="resistance"?"active":"",onClick:()=>i("resistance"),type:"button",children:"Resistance"}),(0,w.jsx)("button",{className:n==="foundation"?"active":"",onClick:()=>i("foundation"),type:"button",children:"Foundation"}),(0,w.jsx)("button",{className:n==="anchors"?"active":"",onClick:()=>i("anchors"),type:"button",children:"Anchors"})]}),n==="checks"&&(0,w.jsx)(P2,{r:p}),n==="demands"&&(0,w.jsx)(I2,{r:p}),n==="section"&&(0,w.jsx)(z2,{r:p}),n==="resistance"&&(0,w.jsx)(B2,{r:p}),n==="foundation"&&(0,w.jsx)(Q2,{r:p}),n==="anchors"&&(0,w.jsx)(Y2,{r:p})]})]})]}),(0,w.jsxs)("footer",{children:[(0,w.jsxs)("span",{children:["DESIGN BASIS: ",f?"CAN/CSA S6-19 (CHBDC) + BC MoTT Supplement \xB7 CSA S16-19 / W59":"CAN/CSA S6-19 + BC MoTT Supplement \xB7 AASHTO LRFD LTS \xB7 CSA S16-19 / W59"]}),(0,w.jsx)("span",{children:"Preliminary screening only. Not for construction."})]})]})}function P2({r:e}){let t=[["Axial  P/Pr",e.U_P,"CSA S16 Cl.13"],["Bending  M/Mr",e.U_M,"class 1/2:Z, 3:S"],["Shear  V/Vr",e.U_V,"CHS shear"],["Torsion  T/Tr",e.U_T,"shear on Ct"],["Axial + bending",e.U_axbend,"S16 13.8 (simplified)"],["Shear + torsion",e.U_sheartor,"combined shear"]];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"STRENGTH & SERVICEABILITY"}),(0,w.jsx)("h2",{children:"Design utilizations"})]}),(0,w.jsx)("span",{children:"ULS \xB7 SLS"})]}),(0,w.jsx)("div",{className:"checks",children:t.map(([n,i,s])=>(0,w.jsxs)("article",{className:`check ${i<=1?"pass-card":"fail-card"}`,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("span",{children:n}),(0,w.jsx)("b",{children:i<=1?"PASS":"FAIL"})]}),(0,w.jsxs)("strong",{children:[Tt(i,2)," ",(0,w.jsx)("small",{children:"ratio"})]}),(0,w.jsx)("div",{className:"bar",children:(0,w.jsx)("i",{style:{width:`${Math.min(100,i*100)}%`},className:i<=1?"":"over"})}),(0,w.jsxs)("p",{children:[s," \xB7 limit \u2264 1.00"]})]},n))}),(0,w.jsxs)("div",{className:"gov-row",children:[(0,w.jsxs)("div",{className:`gov ${e.strengthOK?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Governing strength U"}),(0,w.jsx)("b",{children:Tt(e.U_gov,2)}),(0,w.jsx)("em",{children:e.strengthOK?"OK":"NG"})]}),(0,w.jsxs)("div",{className:`gov ${e.deflOK?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Tip deflection"}),(0,w.jsxs)("b",{children:[Tt(e.d_total,1)," mm"]}),(0,w.jsx)("em",{children:e.deflOK?`OK \u2264 ${Tt(e.d_limit,1)}`:`NG > ${Tt(e.d_limit,1)}`})]})]})]})}function Cu({rows:e}){return(0,w.jsx)("table",{className:"data",children:(0,w.jsx)("tbody",{children:e.map(([t,n,i])=>(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:t}),(0,w.jsx)("td",{className:"v",children:n}),(0,w.jsx)("td",{className:"u",children:i})]},t))})})}function I2({r:e}){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"LOADS & DEMANDS"}),(0,w.jsx)("h2",{children:"Wind, ice & factored effects"})]}),(0,w.jsx)("span",{children:"kN \xB7 kN\xB7m"})]}),(0,w.jsx)(Cu,{rows:[["Velocity pressure, qz",Tt(e.qz,0),"Pa"],["Wind force on sign, F_sign",Tt(e.F_sign,2),"kN"],["Wind force on pole, F_pole",Tt(e.F_pole,2),"kN"],["Ice weight, W_ice",Tt(e.W_ice,2),"kN"],["Pole self-weight, W_pole",Tt(e.W_pole,2),"kN"],["Total dead axial, P_D",Tt(e.P_D,2),"kN"],["Service shear, V_W",Tt(e.V_W,2),"kN"],["Service moment, M_W",Tt(e.M_W,1),"kN\xB7m"],["Service torsion, T_W",Tt(e.T_W,1),"kN\xB7m"],["Factored axial, Pf",Tt(e.Pf,2),"kN"],["Factored shear, Vf",Tt(e.Vf,2),"kN"],["Factored moment, Mf",Tt(e.Mf,1),"kN\xB7m"],["Factored torsion, Tf",Tt(e.Tf,1),"kN\xB7m"]]})]})}function z2({r:e}){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"SECTION AT BASE"}),(0,w.jsx)("h2",{children:"Circular hollow properties"})]}),(0,w.jsxs)("span",{children:["class ",e.Cls]})]}),(0,w.jsx)(Cu,{rows:[["Inside diameter, di",Tt(e.di,1),"mm"],["Area, A",Pa(e.A_sec),"mm\xB2"],["Moment of inertia, I",Pa(e.I_sec),"mm\u2074"],["Elastic modulus, S",Pa(e.S_sec),"mm\xB3"],["Plastic modulus, Z",Pa(e.Z_sec),"mm\xB3"],["Radius of gyration, r",Tt(e.r_sec,1),"mm"],["Torsion constant, J",Pa(e.J_sec),"mm\u2074"],["Torsion modulus, Ct",Pa(e.Ct_sec),"mm\xB3"],["D/t ratio",Tt(e.Dt,1),"-"],["Section class (CHS)",String(e.Cls),"-"]]})]})}function B2({r:e}){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"FACTORED RESISTANCES"}),(0,w.jsx)("h2",{children:"CSA S16-19 / LTS 5"})]}),(0,w.jsx)("span",{children:"kN \xB7 kN\xB7m"})]}),(0,w.jsx)(Cu,{rows:[["Moment resistance, Mr",Tt(e.Mr,1),"kN\xB7m"],["Axial resistance, Pr",Tt(e.Pr,1),"kN"],["Shear resistance, Vr",Tt(e.Vr,1),"kN"],["Torsional resistance, Tr",Tt(e.Tr,1),"kN\xB7m"],["Sign deflection, \u03B4_sign",Tt(e.d_sign,1),"mm"],["Pole deflection, \u03B4_pole",Tt(e.d_pole,1),"mm"],["Total tip deflection, \u03B4",Tt(e.d_total,1),"mm"],["Deflection limit",Tt(e.d_limit,1),"mm"]]})]})}function Q2({r:e}){let t=[["Total factored axial, N_f",Tt(e.Nf,1),"kN"],["Total factored moment, M_f",Tt(e.Mf_fnd,1),"kN\xB7m"],["Total factored shear, V_f",Tt(e.Vf_fnd,1),"kN"],["Eccentricity, e = M_f / N_f",Tt(e.eXc,2),"m"],["Kern check 6e \u2264 D",e.kernD?"OK":"NG","-"],["Kern check 6e \u2264 B",e.kernB?"OK":"NG","-"],["Bearing pressure max, P_max",Tt(e.Pmax,1),"kPa"],["Bearing pressure min, P_min",Tt(e.Pmin,1),"kPa"],["Factored bearing resistance, q_r",Tt(e.qcap,0),"kPa"],["Bearing check P_max \u2264 q_r",e.bearingOK?"OK":"NG \xB7 exceeds q_r","-"],["Sliding FOS \u03BCN_f / V_f",Tt(e.slidingFOS,2),"-"],["Sliding FOS \u2265 1.5",e.slidingOK?"OK":"NG","-"],["Uplift resistance, W_resist",Tt(e.Wresist,1),"kN"],["Uplift demand, F_uplift",Tt(e.upliftDemand,1),"kN"],["Uplift check W \u2265 F",e.upliftOK?"OK":"NG \xB7 anchor req'd","-"],["M_face (D dir.)",Tt(e.MfaceD,1),"kN\xB7m"],["M_r (D dir.)",Tt(e.MrD,1),"kN\xB7m"],["Flexure D/C (D)",Tt(e.flexDcD?e.MfaceD/e.MrD:e.MrD/1,2),(e.flexDcD?"OK":"NG")+ " \xB7 CSA A23.3-19 \xA710"],["M_face (B dir.)",Tt(e.MfaceB,1),"kN\xB7m"],["M_r (B dir.)",Tt(e.MrB,1),"kN\xB7m"],["Flexure D/C (B)",Tt(e.flexDcB?e.MfaceB/e.MrB:e.MrB/1,2),(e.flexDcB?"OK":"NG")+" \xB7 CSA A23.3-19 \xA710"],["Shear demand V_f (D)",Tt(e.VfDdemand,1),"kN"],["Shear capacity V_c (D)",Tt(e.VcD,1),"kN"],["Shear D/C (D)",Tt(e.shearDcD?e.VfDdemand/e.VcD:e.VcD/1,2),(e.shearDcD?"OK":"NG")+" \xB7 CSA A23.3-19 \xA711"],["Shear demand V_f (B)",Tt(e.VfBdemand,1),"kN"],["Shear capacity V_c (B)",Tt(e.VcB,1),"kN"],["Shear D/C (B)",Tt(e.shearDcB?e.VfBdemand/e.VcB:e.VcB/1,2),(e.shearDcB?"OK":"NG")+" \xB7 CSA A23.3-19 \xA711"]];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"FOUNDATION (CSA A23.3-19)"}),(0,w.jsx)("h2",{children:"Shallow pad footing \xB7 bearing, stability, flexure & shear"})]}),(0,w.jsx)("span",{children:e.foundationOK?"ALL OK \xB7 review":"REVIEW \xB7 \u2265 1 NG"})]}),(0,w.jsxs)("div",{className:"gov-row",children:[(0,w.jsxs)("div",{className:`gov ${e.bearingOK?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Bearing P_max / q_r"}),(0,w.jsx)("b",{children:Tt(e.Pmax,0)+" / "+Tt(e.qcap,0)}),(0,w.jsx)("em",{children:e.bearingOK?"OK":"NG"})]}),(0,w.jsxs)("div",{className:`gov ${(e.flexDcD&&e.flexDcB)?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Governing flexure D/C"}),(0,w.jsx)("b",{children:Tt(Math.max(e.MrD>0?e.MfaceD/e.MrD:0,e.MrB>0?e.MfaceB/e.MrB:0),2)}),(0,w.jsx)("em",{children:(e.flexDcD&&e.flexDcB)?"OK":"NG"})]}),(0,w.jsxs)("div",{className:`gov ${e.upliftOK?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Uplift W/F"}),(0,w.jsx)("b",{children:Tt(e.Wresist,0)+" / "+Tt(e.upliftDemand,0)}),(0,w.jsx)("em",{children:e.upliftOK?"OK":"NG"})]}),(0,w.jsxs)("div",{className:`gov ${e.foundationOK?"ok":"ng"}`,children:[(0,w.jsx)("span",{children:"Foundation"}),(0,w.jsx)("em",{children:e.foundationOK?"OK":"NG"})]})]}),(0,w.jsx)(Cu,{rows:t})]})}function Y2({r:e}){let t=[["Single-anchor steel tension N_sar (D.2)",Tt(e.Nsar,1),"kN"],["Single-anchor pullout N_pr (D.16)",Tt(e.Npr,1),"kN"],["Single-anchor tension cap. N_sa",Tt(e.Nsa,1),"kN \xB7 R=0.75"],["Single-anchor steel shear V_sar (D.31)",Tt(e.Vsar,1),"kN"],["Single-anchor pryout V_cp (D.44)",Tt(e.Vcpr,1),"kN"],["Single-anchor shear cap. V_sa",Tt(e.Vsa,1),"kN"],["N_a,max tension demand",Tt(e.Na_max,1),"kN"],["V_a,max shear demand",Tt(e.Va_max,1),"kN"],["Tension util. \u03B2_N",Tt(e.bN,2),"-\xB7limit \u2264 1"],["Shear util. \u03B2_V",Tt(e.bV,2),"-\xB7limit \u2264 1"],["Combined \u03B2_N^(5/3)+\u03B2_V^(5/3)",Tt(e.combinedAnchor,2),"-\xB7D.7"],["Anchor combined check",e.anchorOK?"OK":"NG \xB7 combined > 1","-"]];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"ANCHOR BOLTS (CSA A23.3-19 Annex D)"}),(0,w.jsx)("h2",{children:"Steel \xB7 pullout \xB7 pryout \xB7 combined T+V"})]}),(0,w.jsx)("span",{children:e.anchorOK?"OK \xB7 combined \u2264 1":"NG \xB7 combined > 1"})]}),(0,w.jsx)(Cu,{rows:t})]})}var F2=["front","back","left","right","top","iso","flow"];function H2({input:e,r:t,csa:n}){let i=(0,Jt.useRef)(null),s=(0,Jt.useRef)(null),a=(0,Jt.useRef)(null),r=(0,Jt.useRef)(null),_psizeRef=(0,Jt.useRef)(null),o=(0,Jt.useRef)({input:e,r:t}),[l,c]=(0,Jt.useState)(!0),[h,d]=(0,Jt.useState)(1),[f,p]=(0,Jt.useState)("#2600d1"),[v,x]=(0,Jt.useState)(()=>Math.round(e.Vwind)),[m,u]=(0,Jt.useState)(0),[g,_]=(0,Jt.useState)(2),[S,R]=(0,Jt.useState)(!1),[_psize,_setPsize]=(0,Jt.useState)(.34),[_truck,_setTruck]=(0,Jt.useState)(!0),[_tkSpd,_setTkSpd]=(0,Jt.useState)(24),C=(0,Jt.useMemo)(()=>nv({...e,Vwind:v},n,m*Math.PI/180),[e,v,n,m]),_C10=(0,Jt.useMemo)(()=>nv({...e,Vwind:10},n,m*Math.PI/180),[e,n,m]);o.current={input:e,r:C,r10:_C10};let T=(0,Jt.useRef)(!0);T.current=l;let D=(0,Jt.useRef)(v);D.current=v;let k=(0,Jt.useRef)(0);k.current=m*Math.PI/180;let y=(0,Jt.useRef)(0);y.current=g;let E=(0,Jt.useRef)(!1);E.current=S;let _truckRef=(0,Jt.useRef)(!0);_truckRef.current=_truck;let _tkSpdRef=(0,Jt.useRef)(24);_tkSpdRef.current=_tkSpd;let _liveRef=(0,Jt.useRef)(null),_tkFxRef=(0,Jt.useRef)(null);let V=(0,Jt.useRef)({h:.7,s:.95});return(0,Jt.useEffect)(()=>{let L={h:0,s:0,l:0};new Ft(f).getHSL(L),V.current={h:L.h,s:Math.max(.45,L.s)}},[f]),(0,Jt.useEffect)(()=>{let L=i.current;if(!L)return;let H=L.clientWidth||800,Z=L.clientHeight||520,B=new ru({antialias:!0,powerPreference:"high-performance"});B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.setSize(H,Z),B.toneMapping=hp,B.toneMappingExposure=1.05,L.appendChild(B.domElement);let Q=new lu;Q.fog=new ou(13623536,80,700);let W=new wn(45,H/Z,.1,3e3),st=new Au(W,B.domElement);st.enableDamping=!0,st.dampingFactor=.08,st.maxPolarAngle=1.55,st.minDistance=4,st.maxDistance=420;let pt=()=>{let bt=document.createElement("canvas");bt.width=bt.height=64;let wt=bt.getContext("2d"),Rt=wt.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return Rt.addColorStop(0,"rgba(255,255,255,1)"),Rt.addColorStop(.4,"rgba(255,255,255,0.85)"),Rt.addColorStop(1,"rgba(255,255,255,0)"),wt.fillStyle=Rt,wt.beginPath(),wt.arc(64/2,64/2,64/2,0,7),wt.fill(),new zr(bt)},xt=()=>{let bt=document.createElement("canvas");bt.width=bt.height=256;let wt=bt.getContext("2d"),Rt=(Bt,me,Xe)=>{let Ie=wt.createRadialGradient(Bt,me,0,Bt,me,Xe);Ie.addColorStop(0,"rgba(255,255,255,0.95)"),Ie.addColorStop(1,"rgba(255,255,255,0)"),wt.fillStyle=Ie,wt.beginPath(),wt.arc(Bt,me,Xe,0,7),wt.fill()};for(let Bt=0;Bt<16;Bt++)Rt(256*(.25+Math.random()*.5),256*(.42+Math.random()*.18),256*(.1+Math.random()*.14));return new zr(bt)},ee=()=>{let wt=document.createElement("canvas");wt.width=512,wt.height=256;let Rt=wt.getContext("2d");Rt.fillStyle="#3a3d43",Rt.fillRect(0,0,512,256);for(let me=0;me<2600;me++)Rt.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,Rt.fillRect(Math.random()*512,Math.random()*256,2,2);Rt.fillStyle="#e9e9e9",Rt.fillRect(0,256*.1,512,5),Rt.fillRect(0,256*.9-5,512,5),Rt.fillStyle="#e7c008",Rt.fillRect(0,256*.47,512,4),Rt.fillRect(0,256*.53-4,512,4);let Bt=new zr(wt);return Bt.wrapS=qo,Bt},se=pt(),Y=new ri({side:Sn,depthWrite:!1,uniforms:{top:{value:new Ft(3110096)},bot:{value:new Ft(15003384)},off:{value:40},ex:{value:.75}},vertexShader:"varying vec3 vW; void main(){ vW=(modelMatrix*vec4(position,1.0)).xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bot; uniform float off; uniform float ex; varying vec3 vW; void main(){ float h=normalize(vW+vec3(0.0,off,0.0)).y; gl_FragColor=vec4(mix(bot,top,pow(max(h,0.0),ex)),1.0); }"}),nt=new Ce(new pu(900,32,16),Y);Q.add(nt);let _t=new P(.55,.72,.35).normalize(),ft=new _u(16774370,3.1);ft.position.copy(_t.clone().multiplyScalar(160)),Q.add(ft),Q.add(new gu(12574975,5335866,.95)),Q.add(new vu(16777215,.22));let Ot=new Qo(new Ir({map:se,color:16773312,transparent:!0,opacity:.9,blending:kc,depthWrite:!1,fog:!1}));Ot.position.copy(_t.clone().multiplyScalar(620)),Ot.scale.set(90,90,1),Q.add(Ot);let Nt=xt();for(let At=0;At<14;At++){let bt=new Qo(new Ir({map:Nt,transparent:!0,opacity:.9,depthWrite:!1,fog:!1})),wt=Math.random()*Math.PI*2,Rt=130+Math.random()*230;bt.position.set(Math.cos(wt)*Rt,75+Math.random()*95,Math.sin(wt)*Rt);let Bt=70+Math.random()*95;bt.scale.set(Bt,Bt*.55,1),Q.add(bt)}let jt=o.current.input,oe=new Ce(new Fs(1600,1600),new Xn({color:6263872,roughness:1}));oe.rotation.x=-Math.PI/2,Q.add(oe);let kt=jt.esign,N=new Ce(new Fs(320,14),new Xn({color:10128490,roughness:1}));N.rotation.x=-Math.PI/2,N.position.set(0,.01,kt),Q.add(N);let je=ee();je.repeat.set(32,1);let Wt=new Ce(new Fs(320,9),new Xn({map:je,roughness:.92}));Wt.rotation.x=-Math.PI/2,Wt.position.set(0,.02,kt),Q.add(Wt);let Xt=new Xn({color:7178402,roughness:1,flatShading:!0});for(let At=0;At<9;At++){let bt=60+Math.random()*90,wt=new Ce(new tl(110+Math.random()*90,bt,5,1),Xt);wt.position.set(-360+At*88+(Math.random()-.5)*30,bt/2-8,-320-Math.random()*130),Q.add(wt)}let Ut=new ss(.16,.22,1.5,6),pe=new tl(1.2,3.2,7),Pt=new Xn({color:5979428,roughness:1}),A=new Xn({color:3367468,roughness:1,flatShading:!0});for(let At=0;At<18;At++){let bt=0,wt=0,Rt=0;do bt=(Math.random()*2-1)*95,wt=(Math.random()*2-1)*95,Rt++;while(Rt<8&&Math.abs(wt-kt)<9&&Math.abs(bt)<45);let Bt=new $i,me=new Ce(Ut,Pt);me.position.y=.75;let Xe=new Ce(pe,A);Xe.position.y=2.9,Bt.add(me,Xe);let Ie=.8+Math.random()*1.6;Bt.scale.setScalar(Ie),Bt.position.set(bt,0,wt),Q.add(Bt)}let _tkZ=kt+1.8,_tkX=-95,_tkPass=-99,_tkWheels=[],_tk=new $i;{let cb=new Xn({color:11151658,metalness:.55,roughness:.32}),bx=new Xn({color:15132402,metalness:.3,roughness:.55}),gl=new Xn({color:1780282,metalness:.7,roughness:.12}),rb=new Xn({color:1315350,roughness:.95}),sl=new Xn({color:9279395,metalness:.7,roughness:.4}),ad=(g,m,x,y,z)=>{let o2=new Ce(g,m);return o2.position.set(x,y,z),_tk.add(o2),o2};ad(new Bs(6.2,.42,2.3),sl,1.5,.95,0),ad(new Bs(3.1,2.5,2.52),cb,2.1,2.35,0),ad(new Bs(.12,1.1,2.32),gl,3.68,2.95,0),ad(new Bs(1.5,1.05,2.42),cb,4.4,1.6,0),ad(new Bs(.35,.5,2.5),sl,5.22,1.15,0),ad(new Bs(13.6,3.05,2.56),bx,-6.1,2.62,0),ad(new Bs(13.6,.34,2.3),sl,-6.1,.95,0),ad(new Bs(.16,2.9,2.5),sl,.72,2.62,0);let wg=new ss(.54,.54,.38,18);wg.rotateX(Math.PI/2);let hg=new ss(.24,.24,.42,12);hg.rotateX(Math.PI/2);for(let ax of[4.15,.75,-.45,-10.4,-11.7])for(let sd of[-1.16,1.16])_tkWheels.push(ad(wg,rb,ax,.54,sd)),ad(hg,sl,ax,.54,sd*1.18)}_tk.position.set(_tkX,0,_tkZ),Q.add(_tk);let _tkF0={x:0,z:0},_oX=0,_oZ=0,_vX=0,_vZ=0,_lfB=null,_lfT=null,_lfAcc=0,_fxMax=[0,0,0,0,0],_fxSpd=-1,_tkCX=-3.85,_tkHL=9.05,_tkHW=1.3,_tkTop=4.15,_tkStep=(ts,tn)=>{if(!_truckRef.current){_tk.visible=!1;return}_tk.visible=!0;let p0=_tkX;_tkX+=_tkSpdRef.current*ts,_tkX>70?_tkX=-70:p0<0&&_tkX>=0&&(_tkPass=tn),_tk.position.x=_tkX;let sp=_tkSpdRef.current*ts/.54;for(let wl of _tkWheels)wl.rotation.z-=sp},_tkFlow=(px,py,pz,tn,out)=>{if(!_truckRef.current)return;let wA=D.current*.23,wT=_tkSpdRef.current*.23,es=Math.max(3,wA,wT),wa=k.current,cw=Math.cos(wa),sw=Math.sin(wa),dx=px-_tkX-_tkCX,dz=pz-_tkZ;if(py>8||Math.abs(dz)>18||Math.abs(dx)>44)return;let ax=Math.abs(dx)/_tkHL,az=Math.abs(dz)/_tkHW,ay=py/_tkTop;ax<1&&az<1&&ay<1&&(()=>{let sq=1-Math.max(ax,Math.max(az,ay));out.z+=(dz>=0?1:-1)*3.4*sq*es,out.y+=2.4*sq*es})();let al=dx*cw+dz*sw,cr=-dx*sw+dz*cw,L=Math.abs(_tkHL*cw)+Math.abs(_tkHW*sw),W=Math.abs(_tkHL*sw)+Math.abs(_tkHW*cw),hf=py<=_tkTop?1:Math.exp(-(py-_tkTop)/1.6);if(hf>.05){if(al<-L){let wv=Math.exp((al+L)/2.6)*Math.exp(-cr*cr/(2.4*W*W))*hf;out.x-=.85*wv*wA*cw,out.z-=.85*wv*wA*sw,out.x+=(cr>=0?-1:1)*.8*wv*wA*sw,out.z+=(cr>=0?1:-1)*.8*wv*wA*cw,out.y+=.5*wv*wA}else if(al>L){let wv=Math.exp(-(al-L)/9)*Math.exp(-cr*cr/(2.6*W*W))*hf,sh=Math.sin(5.97*tn-.55*(al-L));out.x-=.9*wv*wA*cw,out.z-=.9*wv*wA*sw,out.x-=sh*.55*wv*wA*sw,out.z+=sh*.55*wv*wA*cw,out.y+=.25*wv*wA*Math.cos(5.97*tn-.4*(al-L))}else if(py>_tkTop){let wv=Math.exp(-(py-_tkTop)/1.3)*Math.exp(-cr*cr/(2*W*W));out.x+=.5*wv*wA*cw,out.z+=.5*wv*wA*sw,out.y+=.18*wv*wA}}let bx=dx+_tkHL;if(bx<0){let sB=-bx,env=Math.exp(-sB/16),rz=dz/3.4,ry=(py-2.1)/3,rad=Math.sqrt(rz*rz+ry*ry),core=Math.exp(-.8*rad*rad),wk=env*wT,pull=wk*Math.exp(-sB/8)*Math.exp(-.3*rad*rad),ur=1/Math.max(.3,rad),sl=Math.exp(-.4*rad*rad),sg=dz>=0?1:-1,e1=Math.sin(4.2*tn-.55*sB),e2=Math.cos(3.1*tn-.4*sB),e3=Math.sin(7.7*tn-.9*sB+1.3);out.x+=1.35*wk*core-.45*wk*core*e1;out.z-=1.6*pull*rz*ur,out.y-=1.3*pull*ry*ur;out.z+=.85*wk*core*e1-.6*wk*sl*sg*ry,out.y+=.55*wk*core*e2+.6*wk*sl*sg*rz+.25*wk*core*e3}else if(bx>2*_tkHL){let sF=bx-2*_tkHL,wv2=Math.exp(-sF/3.4)*Math.exp(-dz*dz/16)*Math.exp(-Math.max(0,py-2)/3)*wT;out.x+=.75*wv2,out.z+=(dz>=0?.6:-.6)*wv2,out.y+=.45*wv2}},_tkShaft=tn=>{if(!_truckRef.current)return 0;let wa=k.current,cw=Math.cos(wa),sw=Math.sin(wa),dx=-(_tkX+_tkCX),dz=-_tkZ,al=dx*cw+dz*sw,cr=-dx*sw+dz*cw,L=Math.abs(_tkHL*cw)+Math.abs(_tkHW*sw),W=Math.abs(_tkHL*sw)+Math.abs(_tkHW*cw),gv=0;al>L&&(gv+=.9*Math.exp(-(al-L)/22)*Math.exp(-cr*cr/(2.6*W*W))),al<-L&&(gv+=.45*Math.exp(-(-al-L)/6)*Math.exp(-cr*cr/(2.4*W*W)));gv*=.45*(.55+.45*Math.sin(4.4*tn));let dp=tn-_tkPass;return dp>=0&&dp<5&&(gv+=.22*Math.exp(-1.15*dp)*Math.sin(6.2832*Math.max(.2,o.current.r.fn)*dp)),gv},_tkForce=tn=>{if(!_truckRef.current)return _tkF0.x=0,_tkF0.z=0,_tkF0;let nx=_tkX+5.2,tl=_tkX-12.9,bw=Math.exp(-Math.pow((nx+2.5)/6,2)),wk=tl>0?Math.exp(-tl/16):Math.exp(tl/3.5),fn2=Math.max(.2,o.current.r.fn),ch=.55*Math.sin(11.3*tn)+.35*Math.sin(17.9*tn+1.7)+.45*Math.sin(6.2832*fn2*tn+.6),lz=Math.exp(-_tkZ*_tkZ/220);return _tkF0.x=(1.15*bw-.55*wk+.85*wk*ch)*lz,_tkF0.z=(.35*bw+.9*wk*(.5*ch+.5*Math.sin(13.7*tn+2.2)))*lz,_tkF0},_tkWind=tn=>_tkSpdRef.current*.8*Math.max(0,_tkShaft(tn));let M=new xu(3);M.position.y=.03,Q.add(M);let F=new yu(new P(1,0,0),new P(-15,3,0),6,1132502,1.4,.9);Q.add(F);let q=new $i;Q.add(q);let j=new Xn({color:10465740,metalness:.6,roughness:.35}),K=At=>{for(let hn=q.children.length-1;hn>=0;hn--){let Nn=q.children[hn];Nn.geometry?.dispose?.(),q.remove(Nn)}let bt=At.Dbase/2e3,wt=At.Dtop/2e3,Rt=new Ce(new ss(wt,bt,At.Hpole,44,1),j);Rt.position.y=At.Hpole/2,q.add(Rt);let Bt=new Ce(new ss(bt*1.6,bt*1.9,.18,44),new Xn({color:5991298,metalness:.5,roughness:.5}));Bt.position.y=.09,q.add(Bt);let me=new Ce(new ss(.07,.07,At.esign,16),j);me.rotation.x=Math.PI/2,me.position.set(0,At.Hsign,At.esign/2),q.add(me);let Xe=new Ce(new Bs(.12,At.Dsign,At.Bsign),new Xn({color:1777450,metalness:.2,roughness:.7,emissive:662058}));Xe.position.set(0,At.Hsign,At.esign),q.add(Xe);let Ie=new Ce(new Bs(.14,At.Dsign*.9,At.Bsign*.95),new Xn({color:15909198,metalness:.3,roughness:.5,transparent:!0,opacity:.22}));Ie.position.set(0,At.Hsign,At.esign),q.add(Ie)};K(o.current.input),a.current=K;let St=22e3,it=new Float32Array(St*3),ct=new Float32Array(St*3),qt=34,tt=19,mt=20,Dt=(At,bt)=>{let wt=k.current,Rt=Math.cos(wt),Bt=Math.sin(wt),me=-Bt,Xe=Rt,Ie=bt?-qt-Math.random()*5:(Math.random()*2-1)*qt,hn=(Math.random()*2-1)*tt;it[At*3+0]=Rt*Ie+me*hn,it[At*3+1]=Math.random()*mt,it[At*3+2]=Bt*Ie+Xe*hn},Ct=new bn;Ct.setAttribute("position",new Mn(it,3)),Ct.setAttribute("color",new Mn(ct,3));let dt=0,Yt=At=>{dt=Math.max(500,Math.min(St,Math.floor(12e3*At)));for(let bt=0;bt<dt;bt++)Dt(bt,!1);Ct.setDrawRange(0,dt),Ct.getAttribute("position").needsUpdate=!0};Yt(h),r.current=Yt;let zt=new $o({size:.34,map:se,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,alphaTest:.02}),he=new du(Ct,zt);Q.add(he),_psizeRef.current=At=>{zt.size=At};let U=(At,bt,wt,Rt,Bt,me)=>{let Xe=k.current,Ie=Math.cos(Xe),hn=Math.sin(Xe),Nn=1,b=Nn,O=0,z=0,G=At*Ie+wt*hn,I=-At*hn+wt*Ie;if(bt>=0&&bt<=Rt.Hpole){let le=bt/Rt.Hpole,ce=Rt.Dbase/2e3*(1-le)+Rt.Dtop/2e3*le,Ee=G,Vt=I,Mt=Ee*Ee+Vt*Vt;if(Mt>1e-4){let Ve=ce*ce;if(Mt>Ve?(b+=-Nn*Ve*(Ee*Ee-Vt*Vt)/(Mt*Mt),z+=-2*Nn*Ve*Ee*Vt/(Mt*Mt)):(b+=Ee*4,z+=Vt*4),Ee>ce&&Math.abs(Vt)<ce*3.2){let ue=Math.min(2.2,Rt.St*Math.max(4,D.current)/(2*ce)),Un=Math.exp(-Ee*.14);z+=.9*Math.sin(2*Math.PI*ue*Bt-Ee*1.1)*Un,b*=1-.5*Un}}}let et=Math.sqrt(Math.max(.05,Rt.Bsign*Rt.Dsign)/Math.PI),at=At,lt=bt-Rt.Hsign,gt=wt-Rt.esign,vt=at*Ie+gt*hn,Et=-at*hn+gt*Ie,yt=lt,ne=Math.sqrt(vt*vt+yt*yt+Et*Et);if(ne>et){let le=et*et*et,ce=Math.pow(ne,5);if(b+=Nn*le*(ne*ne-3*vt*vt)/(2*ce),O+=-3*Nn*le*vt*yt/(2*ce),z+=-3*Nn*le*vt*Et/(2*ce),vt>0&&Math.sqrt(yt*yt+Et*Et)<et*1.3&&vt<12){let Ee=Math.min(2.2,Rt.St*Math.max(4,D.current)/(2*et)),Vt=Math.exp(-vt*.12);z+=1.1*Math.sin(2*Math.PI*Ee*Bt-vt*.9)*Vt,O+=.5*Math.cos(2*Math.PI*Ee*Bt-vt*.9)*Vt,b*=1-.55*Vt}}else b+=vt*4,O+=yt*4,z+=Et*4;me.x=b*Ie-z*hn,me.y=O,me.z=b*hn+z*Ie},ut=()=>{let At=o.current.input;return Math.max(At.Hpole,At.esign+At.Bsign/2,At.Bsign)*2.2+6},X=()=>{let At=o.current.input;return new P(0,At.Hpole*.45,At.esign*.5)},$=At=>{let bt=ut(),wt=X(),Bt={iso:[bt*.7,bt*.6,bt*.7],front:[0,wt.y,bt],back:[0,wt.y,-bt],right:[bt,wt.y,0],left:[-bt,wt.y,0],top:[.001,bt,0],flow:[-bt*.85,bt*.4,bt*.55]}[At];W.position.set(wt.x+Bt[0],Bt[1],wt.z+Bt[2]),st.target.copy(wt),st.update()};s.current={setView:$},$("iso");let rt=()=>{H=L.clientWidth,Z=L.clientHeight,!(!H||!Z)&&(B.setSize(H,Z),W.aspect=H/Z,W.updateProjectionMatrix())},ht=new ResizeObserver(rt);ht.observe(L);let ae=Ct.getAttribute("position"),ze=Ct.getAttribute("color"),$e=new Ft,Qt={x:0,y:0,z:0},_n=new P,vi=new P,nr=0,No=performance.now(),ni=0,ir=()=>{nr=requestAnimationFrame(ir);let At=performance.now(),bt=(At-No)/1e3;No=At,bt=Math.min(bt,.05),st.update();let wt=k.current,Rt=Math.cos(wt),Bt=Math.sin(wt);if(F.setDirection(_n.set(Rt,0,Bt)),F.position.set(-Rt*15,3,-Bt*15),T.current){ni+=bt;let me=o.current.input,Xe=D.current*.23,Ie=V.current;_tkStep(bt,ni);for(let at=0;at<dt;at++){let lt=at*3,gt=it[lt],vt=it[lt+1],Et=it[lt+2];U(gt,vt,Et,me,ni,Qt),Qt.x*=Xe,Qt.y*=Xe,Qt.z*=Xe,_tkFlow(gt,vt,Et,ni,Qt),gt+=Qt.x*bt,vt+=Qt.y*bt,Et+=Qt.z*bt;let yt=gt*Rt+Et*Bt,ne=-gt*Bt+Et*Rt;yt>qt||vt<-.5||vt>mt+2||Math.abs(ne)>tt+2?Dt(at,D.current>=3):(it[lt]=gt,it[lt+1]=vt,it[lt+2]=Et);let le=Math.hypot(Qt.x,Qt.y,Qt.z)/Math.max(1.5,Xe,_tkSpdRef.current*.23),ce=Math.min(1,Math.max(0,(le-.2)/1.9));$e.setHSL(Ie.h,Ie.s,.38+.34*ce),ct[lt]=$e.r,ct[lt+1]=$e.g,ct[lt+2]=$e.b}ae.needsUpdate=!0,ze.needsUpdate=!0;let hn=Math.max(.2,o.current.r.fn),w0=6.2832*hn,zta=E.current?.005:.008,th0=(o.current.r10.d_total||0)/1e3/Math.max(1,me.Hpole),gwv=.06*Math.sin(1.95*ni)+.04*Math.sin(5.2*ni+1.1)+.025*Math.sin(10.7*ni+.4),vav=D.current*Math.max(.2,1+gwv),thD=th0*vav*vav/100,thL=.45*thD*Math.sin(6.2832*(o.current.r.fs||0)*ni),tkf=_tkForce(ni),thT=th0*_tkSpdRef.current*_tkSpdRef.current/100*.5,TgX=thD*Rt-thL*Bt+thT*tkf.x,TgZ=thD*Bt+thL*Rt+thT*tkf.z,ns=Math.min(32,Math.max(4,Math.ceil(w0*bt/.15))),sdt=bt/ns;for(let sI=0;sI<ns;sI++)_vX+=(w0*w0*(TgX-_oX)-2*zta*w0*_vX)*sdt,_oX+=_vX*sdt,_vZ+=(w0*w0*(TgZ-_oZ)-2*zta*w0*_vZ)*sdt,_oZ+=_vZ*sdt;let gn=E.current?1:1+y.current,G=_oX*gn,I=_oZ*gn,et=Math.hypot(G,I);et>1e-6?q.setRotationFromAxisAngle(vi.set(I,0,-G).normalize(),et):q.rotation.set(0,0,0),_lfAcc+=bt,_lfAcc>=.08&&(()=>{_lfAcc=0;let el=_liveRef.current;if(!el)return;(!_lfB||_lfB.length<5)&&(_lfB=el.querySelectorAll("b"),_lfT=el.querySelector(".lf-tag"));if(_lfB.length<5)return;let rr=o.current.r10,vt=_tkWind(ni),gw=.055*Math.sin(1.95*ni)+.035*Math.sin(5.2*ni+1.1)+.02*Math.sin(10.7*ni+.4),va=D.current*Math.max(.25,1+gw),wa2=k.current,vx=va*Math.cos(wa2)+vt,vz=va*Math.sin(wa2),vi=Math.hypot(vx,vz),f2=vi*vi/100;_lfB[0].textContent=vi.toFixed(1),_lfB[1].textContent=(.5*me.rhoAir*vi*vi/1e3).toFixed(2),_lfB[2].textContent=(rr.V_W*f2).toFixed(2),_lfB[3].textContent=(rr.M_W*f2).toFixed(1),_lfB[4].textContent=(Math.hypot(_oX,_oZ)*me.Hpole*1e3).toFixed(1),_lfT.textContent=vt>.4?"truck wake":"";let fx=_tkFxRef.current,fd=[1,1,2,2,2];if(!fx)_fxSpd=-1;else{let fb=fx.querySelectorAll("b");if(fb.length>=5){let ky=_tkSpdRef.current+"|"+D.current;ky!==_fxSpd&&(_fxSpd=ky,_fxMax=[0,0,0,0,0],fb.forEach((b2,z3)=>b2.textContent=(0).toFixed(fd[z3])));let m2=vt*vt/100,cur=[vt,.5*me.rhoAir*vt*vt,rr.V_W*m2,rr.M_W*m2,Math.hypot(_oX,_oZ)*me.Hpole*1e3];for(let z2=0;z2<5;z2++)cur[z2]>_fxMax[z2]&&(_fxMax[z2]=cur[z2],fb[z2].textContent=_fxMax[z2].toFixed(fd[z2]))}}})()}B.render(Q,W)};return nr=requestAnimationFrame(ir),()=>{cancelAnimationFrame(nr),ht.disconnect(),st.dispose(),Q.traverse(At=>{let bt=At;bt.geometry?.dispose?.();let wt=bt.material,Rt=Array.isArray(wt)?wt:wt?[wt]:[];for(let Bt of Rt){let me=Bt;me.map?.dispose?.(),me.dispose?.()}}),B.dispose(),B.domElement.parentNode===L&&L.removeChild(B.domElement),a.current=null,r.current=null,_psizeRef.current=null}},[]),(0,Jt.useEffect)(()=>{a.current?.(e)},[e.Dbase,e.Dtop,e.Hpole,e.Hsign,e.esign,e.Bsign,e.Dsign]),(0,Jt.useEffect)(()=>{r.current?.(h)},[h]),(0,Jt.useEffect)(()=>{_psizeRef.current?.(_psize)},[_psize]),(0,w.jsxs)("section",{className:"tunnel-view",children:[(0,w.jsxs)("div",{className:"tunnel-stage",children:[(0,w.jsx)("div",{ref:i,className:"tunnel-canvas"}),(0,w.jsx)("div",{className:"view-cube",role:"group","aria-label":"Camera views",children:F2.map(L=>(0,w.jsx)("button",{type:"button",onClick:()=>s.current?.setView(L),children:L},L))}),(0,w.jsxs)("div",{className:"tunnel-toolbar",children:[(0,w.jsx)("button",{type:"button",onClick:()=>c(L=>!L),children:l?"\u275A\u275A Pause":"\u25B6 Play"}),(0,w.jsxs)("label",{children:["Particles",(0,w.jsx)("input",{type:"range",min:.25,max:3,step:.25,value:h,onChange:L=>d(Number(L.target.value))})]}),(0,w.jsxs)("label",{children:["Size",(0,w.jsx)("input",{type:"range",min:.08,max:.7,step:.02,value:_psize,onChange:L=>_setPsize(Number(L.target.value))}),(0,w.jsx)("span",{className:"unit",children:_psize.toFixed(2)})]}),(0,w.jsxs)("label",{children:["Colour",(0,w.jsx)("input",{type:"color",value:f,onChange:L=>p(L.target.value)})]}),(0,w.jsxs)("label",{children:["Vibration \xD7",(0,w.jsx)("input",{type:"range",min:0,max:60,step:1,value:g,disabled:S,onChange:L=>_(Number(L.target.value))}),(0,w.jsx)("span",{className:"unit",children:g})]}),(0,w.jsxs)("label",{className:"toggle",children:[(0,w.jsx)("input",{type:"checkbox",checked:_truck,onChange:L=>_setTruck(L.target.checked)}),"Truck"]}),(0,w.jsxs)("label",{children:["Truck speed",(0,w.jsx)("input",{type:"range",min:0,max:40,step:1,value:_tkSpd,disabled:!_truck,onChange:L=>_setTkSpd(Number(L.target.value))}),(0,w.jsxs)("span",{className:"unit",children:[_tkSpd," m/s"]})]}),(0,w.jsxs)("label",{className:"toggle",children:[(0,w.jsx)("input",{type:"checkbox",checked:S,onChange:L=>R(L.target.checked)}),"1:1 real"]}),(0,w.jsx)("span",{className:"hint",children:"Drag to orbit \xB7 scroll to zoom"})]}),(0,w.jsxs)("div",{className:"live-forces",ref:_liveRef,children:[(0,w.jsxs)("div",{className:"lf-head",children:[(0,w.jsx)("span",{children:"Live on pole"}),(0,w.jsx)("em",{className:"lf-tag",children:""})]}),(0,w.jsx)("div",{className:"lf-rows",children:["V|m/s","q|kPa","V_base|kN","M_base|kN·m","δ tip|mm"].map(L2=>{let P2=L2.split("|");return(0,w.jsxs)("div",{className:"lf-row",children:[(0,w.jsx)("span",{children:P2[0]}),(0,w.jsx)("b",{children:"—"}),(0,w.jsx)("i",{children:P2[1]})]},L2)})})]}),(0,w.jsxs)("div",{className:"speed-legend",children:[(0,w.jsx)("span",{children:"slow"}),(0,w.jsx)("i",{}),(0,w.jsx)("span",{children:"fast"})]})]}),(0,w.jsx)(V2,{input:e,r:C,windSpeed:v,setWindSpeed:x,windDeg:m,setWindDeg:u}),_truck?(0,w.jsxs)("aside",{className:"tunnel-hud truck-fx",ref:_tkFxRef,children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"TRUCK SLIPSTREAM · SESSION PEAK"}),(0,w.jsx)("h2",{children:"Max truck-induced effect on pole"})]}),(0,w.jsxs)("span",{children:[_tkSpd," m/s truck"]})]}),(0,w.jsx)("div",{className:"tkfx-rows",children:[["Peak slipstream at pole","m/s"],["Peak dynamic pressure","Pa"],["Added base shear","kN"],["Added moment","kN·m"],["Peak dynamic tip sway","mm"]].map(L2=>(0,w.jsxs)("div",{className:"tkfx-row",children:[(0,w.jsx)("span",{children:L2[0]}),(0,w.jsx)("b",{children:"0.0"}),(0,w.jsx)("i",{children:L2[1]})]},L2[0]))}),(0,w.jsx)("p",{className:"dir-note",children:"Running maxima at the current wind and truck speed (reset when either changes) · illustrative, not code loads."})]}):null]})}function V2({input:e,r:t,windSpeed:n,setWindSpeed:i,windDeg:s,setWindDeg:a}){let r=.5*e.rhoAir*n**2;return(0,w.jsxs)("aside",{className:"tunnel-hud",children:[(0,w.jsxs)("div",{className:"result-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"DYNAMIC WIND LOAD \xB7 ESTIMATE"}),(0,w.jsx)("h2",{children:"Wind on the structure"})]}),(0,w.jsx)("span",{children:t.regime})]}),(0,w.jsxs)("div",{className:"wind-inputs",children:[(0,w.jsxs)("label",{className:"wind-input",children:["Wind speed",(0,w.jsx)("input",{type:"number",min:0,max:120,step:1,value:n,onChange:o=>i(Number(o.target.value))}),(0,w.jsx)("span",{children:"m/s"})]}),(0,w.jsxs)("label",{className:"wind-input",children:["Direction",(0,w.jsx)("input",{type:"number",min:0,max:360,step:5,value:s,onChange:o=>a(Number(o.target.value))}),(0,w.jsx)("span",{children:"\xB0"})]})]}),(0,w.jsx)("p",{className:"dir-note",children:"0\xB0 = wind square to the sign face; sign load \u221D cos\xB2\u03B8."}),(0,w.jsxs)("div",{className:"fig-result",children:[(0,w.jsxs)("span",{children:[(0,w.jsx)("b",{children:"V"})," ",Tt(n,0)," m/s"]}),(0,w.jsxs)("span",{children:[(0,w.jsx)("b",{children:"Re"})," ",Pa(t.Re)]}),(0,w.jsxs)("span",{className:t.vivRisk?"ng":"ok",children:[(0,w.jsx)("b",{children:"VIV"})," ",t.vivRisk?"REVIEW":"OK"]}),(0,w.jsxs)("span",{className:t.galloping?"ng":"ok",children:[(0,w.jsx)("b",{children:"Galloping"})," ",t.galloping?"FAIL":"OK"]})]}),(0,w.jsx)(Cu,{rows:[["Dynamic pressure, q = \xBD\u03C1V\xB2",Tt(r,0),"Pa"],["Wind drag on sign, F_sign",Tt(t.F_sign,2),"kN"],["Wind drag on pole, F_pole",Tt(t.F_pole,2),"kN"],["Base shear (service), V_W",Tt(t.V_W,2),"kN"],["Overturning moment, M_W",Tt(t.M_W,1),"kN\xB7m"],["Torsion (eccentric sign), T_W",Tt(t.T_W,1),"kN\xB7m"],["Vortex-shedding freq, fs",Tt(t.fs,2),"Hz"],["Natural frequency, fn",Tt(t.fn,2),"Hz"],["Lock-in wind speed, Vcr",Tt(t.Vcr,1),"m/s"],["Reduced velocity, Ur",Tt(t.Ur,1),"-"],["Scruton number, Sc",Tt(t.Sc,1),"-"],["Strouhal number, St",Tt(t.St,2),"-"]]}),(0,w.jsx)("p",{className:"assumption",children:"Flow model superposes the exact inviscid potential-flow fields for a circular cylinder (pole, per height) and a sphere doublet (sign blockage), with an empirical K\xE1rm\xE1n wake at fs = St\xB7V/D. Forces are the service wind demands from the design model \u2014 indicative only, for visualising the wind\u2013structure interaction. Not for design or construction."})]})}function as({title:e,rows:t}){return(0,w.jsxs)("div",{className:"help-block",children:[(0,w.jsx)("h3",{children:e}),(0,w.jsx)("table",{className:"formula",children:(0,w.jsx)("tbody",{children:t.map(n=>(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"fn",children:n.name}),(0,w.jsx)("td",{className:"fx",children:(0,w.jsx)("code",{children:n.expr})}),(0,w.jsx)("td",{className:"fnote",children:n.note})]},n.name))})})]})}function G2({csa:e,onClose:t}){return(0,w.jsxs)("section",{className:"help-panel",children:[(0,w.jsxs)("div",{className:"help-panel-head",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"REFERENCE"}),(0,w.jsx)("h2",{children:"Formulas & design process"}),(0,w.jsxs)("small",{children:["Active code basis: ",e?"CAN/CSA S6-19 (CHBDC) only \u2014 AASHTO LTS excluded":"CAN/CSA S6-19 + AASHTO LRFD LTS"," \xB7 SI units"]})]}),(0,w.jsx)("button",{type:"button",className:"reset",onClick:t,children:"Close"})]}),(0,w.jsxs)("div",{className:"help-block help-steps",children:[(0,w.jsx)("h3",{children:"Design process \u2014 step by step"}),(0,w.jsx)("ol",{className:"steps",children:[["1 \xB7 Define geometry","Enter the pole height H\u209A, the sign centroid elevation h\u209B, the eccentricity e of the sign from the pole axis (the torsion arm), the panel size B\u209B \xD7 d\u209B, the base/top outside diameters D, D\u209C and the wall thickness t. These drive both the loads and the section properties."],["2 \xB7 Wind velocity pressure",e?"Convert the site wind speed V into a velocity pressure using the CAN/CSA S6-19 (CHBDC) Cl.3.10 form qz = 0.5\xB7\u03C1\xB7Ce\xB7Cg\xB7V\xB2 with \u03C1 = 1.25 kg/m\xB3, where Ce is the exposure coefficient and Cg the gust effect coefficient (no separate topographic term).":"Convert the site 3-second gust V into a velocity pressure qz using the height/exposure Kz, topographic Kzt and gust G factors (AASHTO LTS Eq 3.8.1-1, SI form with air density 1.225 kg/m\xB3)."],["3 \xB7 Wind forces","Apply qz to the projected areas with drag coefficients: the flat sign panel (Cd,s) and the round pole (Cd,p, using the average diameter over the height). This gives the point wind force F_sign at h\u209B and the distributed wind force F_pole on the shaft."],["4 \xB7 Dead & ice loads",`Add the pole self-weight (steel volume \xD7 \u03B3s from the average of base and top sections), the supplied DMS + attachment weight Wd, and the radial ice on the pole surface and one sign face (${e?"CHBDC climatic ice / owner":"AASHTO LTS 3.9"}).`],["5 \xB7 Service demands at base","Sum the effects at the fixed base: shear V_W = F_sign + F_pole, overturning moment M_W = F_sign\xB7h\u209B + F_pole\xB7(H\u209A/2), and torsion T_W = F_sign\xB7e from the sign eccentricity."],["6 \xB7 Factor the load combinations","Form CSA S6-19 combinations \u2014 Combo 1: 1.1D + 1.3W and Combo 2: 1.1D + 0.7W + 1.3I \u2014 for axial, shear, moment and torsion, then take the governing (maximum) factored demand Pf, Vf, Mf, Tf."],["7 \xB7 Section properties at base","Compute the circular-hollow section properties from D and t: area A, inertia I, elastic/plastic moduli S and Z, torsion constant J and modulus Ct, and the D/t ratio. Classify the section (class 1\u20134) per CSA S16 to decide whether Z or S governs bending."],["8 \xB7 Factored resistances",`Compute \u03C6-factored member resistances: moment Mr, axial (squash) Pr, shear Vr and torsional Tr per ${e?"CSA S16-19":"CSA S16-19 / LTS 5"}.`],["9 \xB7 Strength checks","Divide each demand by its resistance to get utilizations, then combine: axial+bending (P/Pr + M/Mr) and shear+torsion (V/Vr + T/Tr). The governing utilization U must be \u2264 1.0 (OK), otherwise the section is NG."],["10 \xB7 Serviceability (deflection)","Check the cantilever tip deflection from the sign (point load) plus the pole wind (UDL) against the limit H\u209A/n. Excessive sway also drives the fatigue/vibration behaviour animated in the elevation figure."],["11 \xB7 Foundation design (CSA S6-19 & CSA A23.3-19)","Calculate footing self-weight, neck pier weight, and granular overburden. Check ULS Meyerhof bearing pressure P_max \u2264 q_r (factored 250 kPa default), middle-third kern eccentricity 6e \u2264 D and 6e \u2264 B, sliding stability (FOS \u2265 1.5), and uplift resistance. Compute cantilever bending moment M_face at neck face and one-way shear V_f at d from neck face, checking against CSA A23.3-19 flexural resistance M_r (\xA710) and shear resistance V_c (\xA711 simplified)."],["12 \xB7 Anchor bolt design (CSA A23.3-19 Annex D)","Evaluate anchor cage for steel tensile resistance N_sar (Eq. D.2, R=0.75), concrete pullout N_pr (Eq. D.16 for heavy hex head), steel shear V_sar (Eq. D.31), and concrete pryout V_cp (Eq. D.44). Check maximum tension and shear demands under factored pole reactions against combined interaction \u03B2_N^(5/3) + \u03B2_V^(5/3) \u2264 1.00 (Clause D.7)."]].map(([i,s])=>(0,w.jsxs)("li",{children:[(0,w.jsx)("b",{children:i}),(0,w.jsx)("span",{children:s})]},i))})]}),(0,w.jsxs)("div",{className:"help-grid",children:[(0,w.jsx)(as,{title:e?"A \xB7 Wind pressure & forces (CAN/CSA S6-19 Cl.3.10)":"A \xB7 Wind pressure & forces (AASHTO LTS 3.8)",rows:[{name:"A_sign",expr:"A_s = B_s \xB7 d_s",note:"Sign panel area (m\xB2)"},e?{name:"qz",expr:"qz = 0.625 \xB7 Ce \xB7 Cg \xB7 V\xB2",note:"CHBDC, 0.5\xB7\u03C1\xB7V\xB2 with \u03C1=1.25 (Pa)"}:{name:"qz",expr:"qz = 0.613 \xB7 Kz \xB7 Kzt \xB7 G \xB7 V\xB2",note:"Velocity pressure (Pa), SI air 1.225"},{name:"A_pole",expr:"A_p = ((D + D_t)/2)/1000 \xB7 H_p",note:"Projected pole area, avg dia (m\xB2)"},{name:"F_sign",expr:"F_sign = qz \xB7 Cd_s \xB7 A_s / 1000",note:"Wind force on sign (kN)"},{name:"F_pole",expr:"F_pole = qz \xB7 Cd_p \xB7 A_p / 1000",note:"Wind force on pole (kN)"}]}),(0,w.jsx)(as,{title:e?"B \xB7 Dead & ice loads (CHBDC climatic)":"B \xB7 Dead & ice loads (LTS 3.9 / 3.4)",rows:[{name:"W_ice",expr:"W_i = \u03B3_i \xB7 (\u03C0\xB7(D/1000)\xB7(t_i/1000)\xB7H_p + A_s\xB7(t_i/1000))",note:"Ice on pole + one sign face (kN)"},{name:"W_pole",expr:"W_p = \u03B3_s \xB7 ((A + A_t)/2)/10\u2076 \xB7 H_p",note:"Pole self-weight, avg section (kN)"},{name:"P_D",expr:"P_D = W_p + W_d",note:"Total dead axial at base (kN)"}]}),(0,w.jsx)(as,{title:"C \xB7 Service demands at base",rows:[{name:"V_W",expr:"V_W = F_sign + F_pole",note:"Wind shear (kN)"},{name:"M_W",expr:"M_W = F_sign\xB7h_s + F_pole\xB7(H_p/2)",note:"Overturning moment (kN\xB7m)"},{name:"T_W",expr:"T_W = F_sign \xB7 e",note:"Torsion from sign eccentricity (kN\xB7m)"},{name:"P_ice",expr:"P_i = W_i",note:"Ice axial (kN)"}]}),(0,w.jsx)(as,{title:"D \xB7 Factored demands (CSA S6-19)",rows:[{name:"Combo 1",expr:"1.1D + 1.3W  \u2192  Pf\u2081 Vf\u2081 Mf\u2081 Tf\u2081",note:"Wind-governed"},{name:"Combo 2",expr:"1.1D + 0.7W + 1.3I  \u2192  Pf\u2082 Vf\u2082 Mf\u2082 Tf\u2082",note:"Ice + reduced wind"},{name:"Governing",expr:"Pf = max(Pf\u2081,Pf\u2082), \u2026 Tf = max(Tf\u2081,Tf\u2082)",note:"Max of combos"}]}),(0,w.jsx)(as,{title:"E \xB7 Section properties \u2014 circular hollow (base)",rows:[{name:"d_i",expr:"d_i = D \u2212 2t",note:"Inside diameter (mm)"},{name:"A",expr:"A = (\u03C0/4)\xB7(D\xB2 \u2212 d_i\xB2)",note:"Cross-section area (mm\xB2)"},{name:"I",expr:"I = (\u03C0/64)\xB7(D\u2074 \u2212 d_i\u2074)",note:"Moment of inertia (mm\u2074)"},{name:"S",expr:"S = I / (D/2)",note:"Elastic section modulus (mm\xB3)"},{name:"Z",expr:"Z = (D\xB3 \u2212 d_i\xB3)/6",note:"Plastic section modulus (mm\xB3)"},{name:"r",expr:"r = \u221A(I / A)",note:"Radius of gyration (mm)"},{name:"J",expr:"J = 2I",note:"Torsion constant, round (mm\u2074)"},{name:"Ct",expr:"Ct = J / (D/2)",note:"Torsion section modulus (mm\xB3)"},{name:"Class",expr:"D/t \u2264 13000/Fy \u21921, \u226418000/Fy \u21922, \u226466000/Fy \u21923, else 4",note:"CSA S16 CHS class"}]}),(0,w.jsx)(as,{title:e?"F \xB7 Factored resistances (CSA S16-19)":"F \xB7 Factored resistances (CSA S16-19 / LTS 5)",rows:[{name:"Mr",expr:"Mr = \u03C6 \xB7 Fy \xB7 (class\u22642 ? Z : S) / 10\u2076",note:"Moment resistance (kN\xB7m)"},{name:"Pr",expr:"Pr = \u03C6 \xB7 A \xB7 Fy / 1000",note:"Axial squash resistance (kN)"},{name:"Vr",expr:"Vr = \u03C6 \xB7 0.66\xB7Fy \xB7 (0.5A) / 1000",note:"Shear resistance, CHS (kN)"},{name:"Tr",expr:"Tr = \u03C6 \xB7 0.66\xB7Fy \xB7 Ct / 10\u2076",note:"Torsional resistance (kN\xB7m)"}]}),(0,w.jsx)(as,{title:"G \xB7 Design checks",rows:[{name:"Utilizations",expr:"P/Pr, M/Mr, V/Vr, T/Tr",note:"Each \u2264 1"},{name:"Axial+bending",expr:"U = P/Pr + M/Mr",note:"S16 13.8 (simplified)"},{name:"Shear+torsion",expr:"U = V/Vr + T/Tr",note:"Combined shear"},{name:"Governing",expr:"U = max(axial+bending, shear+torsion) \u2264 1",note:"OK if \u2264 1, else NG"}]}),(0,w.jsx)(as,{title:"H \xB7 Serviceability \u2014 tip deflection (SLS)",rows:[{name:"\u03B4_sign",expr:"\u03B4_s = P\xB7a\xB2\xB7(3L \u2212 a) / (6EI)",note:"Point load at h\u209B (P=F_sign, a=h\u209B, L=H\u209A)"},{name:"\u03B4_pole",expr:"\u03B4_p = w\xB7L\u2074 / (8EI)",note:"UDL from pole wind (w=F_pole/H\u209A)"},{name:"\u03B4_total",expr:"\u03B4 = \u03B4_s + \u03B4_p",note:"Total tip deflection (mm)"},{name:"Limit",expr:"\u03B4_lim = H_p\xB71000 / n",note:"OK if \u03B4 \u2264 \u03B4_lim"}]}),(0,w.jsx)(as,{title:"I \xB7 Aerodynamics \u2014 wind tunnel (VIV & galloping)",rows:[{name:"D_avg",expr:"D = (D_base + D_top)/2 / 1000",note:"Average pole diameter (m)"},{name:"f_n",expr:"f_n = (1/2\u03C0)\xB7\u221A(k/m_eff), k = 3EI/L\xB3",note:"Fundamental frequency, m_eff = m_DMS + 0.24\xB7m_pole (Hz)"},{name:"Re",expr:"Re = V\xB7D / \u03BD",note:"Reynolds number \u2192 flow regime"},{name:"f_s",expr:"f_s = St \xB7 V / D",note:"Vortex-shedding frequency at design V (Hz)"},{name:"V_cr",expr:"V_cr = f_n \xB7 D / St",note:"Lock-in wind speed where f_s = f_n (m/s)"},{name:"U_r",expr:"U_r = V / (f_n \xB7 D)",note:"Reduced velocity (lock-in near 5\u20137)"},{name:"Sc",expr:"Sc = 4\u03C0\xB7m_e\xB7\u03B6 / (\u03C1_a\xB7D\xB2)",note:"Scruton number; VIV-prone if Sc \u2272 10"},{name:"V_g",expr:"V_g = 2\xB7Sc\xB7f_n\xB7D / a_g",note:"Den Hartog galloping onset, a_g \u2248 1 (m/s)"}]}),(0,w.jsx)(as,{title:"J \xB7 Foundation design (CSA S6-19 / CSA A23.3-19)",rows:[{name:"N_f",expr:"N_f = 1.2\xB7W_conc + 1.25\xB7W_soil + P_f,pole",note:"Total factored axial at base (kN)"},{name:"e",expr:"e = M_f / N_f,  6e \u2264 D, B",note:"Eccentricity & kern check (m)"},{name:"P_max",expr:"P = N_f/(B\xB7D) \xB1 6M_f/(B\xB7D\xB2)",note:"Meyerhof bearing pressure (kPa)"},{name:"Sliding",expr:"FOS = \u03BC\xB7N_f / V_f \u2265 1.5",note:"Sliding stability factor of safety"},{name:"M_face",expr:"M_f = P_M\xB7B\xB7L_c\xB2/2 + \xBD(P_max\u2212P_M)\xB7L_c\xB7B\xB7(2/3)L_c",note:"Cantilever moment at neck face (kN\xB7m)"},{name:"M_r",expr:"M_r = \u03C6_s\xB7n_b\xB7A_b\xB7f_y\xB7(d \u2212 a/2) / 10\u2076",note:"Pad flexural resistance, A23.3 \xA710 (kN\xB7m)"},{name:"V_c",expr:"V_c = 2.5\xB7\u03B2\xB7\u03C6_c\xB7f_cr\xB7b_v\xB7d_v / 1000",note:"Pad shear resistance, A23.3 \xA711 (kN)"}]}),(0,w.jsx)(as,{title:"K \xB7 Anchor bolt design (CSA A23.3-19 Annex D)",rows:[{name:"N_sar",expr:"N_sar = A_se \xB7 f_uta \xB7 R / 1000, R=0.75",note:"Steel tension resistance, Eq. D.2 (kN)"},{name:"N_pr",expr:"N_pr = 8 \xB7 A_brg \xB7 f'c \xB7 \u03BB_a / 1000",note:"Concrete pullout resistance, Eq. D.16 (kN)"},{name:"V_sar",expr:"V_sar = 0.6 \xB7 A_se \xB7 f_uta \xB7 R / 1000",note:"Steel shear resistance, Eq. D.31 (kN)"},{name:"V_cp",expr:"V_cp = k_cp \xB7 N_br",note:"Concrete pryout resistance, Eq. D.44 (kN)"},{name:"Interaction",expr:"\u03B2_N^(5/3) + \u03B2_V^(5/3) \u2264 1.00",note:"Combined tension & shear, Clause D.7"}]})]}),(0,w.jsxs)("p",{className:"assumption",children:["Symbols: D, D_t = base/top OD; t = wall; Fy = yield; E = modulus; \u03B3s, \u03B3i = steel/ice unit weight; \u03C6 = resistance factor. ",e?"CSA-only mode replaces the AASHTO LTS velocity-pressure equation with the CHBDC Cl.3.10 form; structural resistances and load combinations already follow CSA S6-19 / S16-19.":"Load combinations and resistances follow CSA S6-19 / S16-19; the wind pressure follows AASHTO LTS."," Bending, shear and torsion demands are combined conservatively (simple summation) for preliminary screening \u2014 a detailed interaction check per CSA S16 Cl.13/14 should follow. Not for construction."]})]})}function k2({input:e,r:t,windOn:n,setWindOn:i}){let[s,a]=(0,Jt.useState)(0),r=(0,Jt.useRef)(0),o=Math.min(.16,t.d_total/(e.Hpole*1e3)*6+t.U_gov*.02),l=.9+e.Vwind/60;(0,Jt.useEffect)(()=>{if(!n){a(0);return}let L=0,H=Z=>{L||(L=Z);let B=(Z-L)/1e3,Q=.6+.4*Math.sin(2*Ii*.18*B),W=.12*Math.sin(2*Ii*(l*3.3)*B);a(o*Q*Math.sin(2*Ii*l*B)+o*W),r.current=requestAnimationFrame(H)};return r.current=requestAnimationFrame(H),()=>cancelAnimationFrame(r.current)},[n,o,l]);let c=460,h=470,d=340,f=240,p=Math.max(.5,e.esign+e.Bsign/2),v=d/e.Hpole;f/(p+.6)<v&&(v=f/(p+.6));let x=150,m=60+d,u=m-e.Hpole*v,g=Math.max(7,e.Dbase/1e3*v),_=Math.max(4,e.Dtop/1e3*v),S=x+e.esign*v,R=m-e.Hsign*v,C=e.Bsign*v,T=e.Dsign*v,k=`rotate(${s*180/Ii} ${x} ${m})`,[y,E]=(0,Jt.useState)(0);(0,Jt.useEffect)(()=>{if(!n)return;let L=setInterval(()=>E(H=>(H+1)%40),40);return()=>clearInterval(L)},[n]);let V=(L,H,Z,B,Q,W=2.4,st="fArrow")=>(0,w.jsx)("line",{x1:L,y1:H,x2:Z,y2:B,stroke:Q,strokeWidth:W,markerEnd:`url(#${st})`});return(0,w.jsxs)("section",{className:"canvas-panel",children:[(0,w.jsxs)("div",{className:"drawing-header",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"eyebrow",children:"LIVE ELEVATION"}),(0,w.jsx)("h2",{children:"Loads, reactions & sway"})]}),(0,w.jsxs)("label",{className:"wind-toggle",children:[(0,w.jsx)("input",{type:"checkbox",checked:n,onChange:L=>i(L.target.checked)}),(0,w.jsx)("span",{children:"Wind animation"})]})]}),(0,w.jsxs)("svg",{viewBox:`0 0 ${c} ${h}`,role:"img",className:"pole-svg","aria-label":"Cantilever sign pole elevation with wind, dead, ice and base reaction forces",children:[(0,w.jsxs)("defs",{children:[(0,w.jsx)("marker",{id:"fArrow",markerWidth:"10",markerHeight:"10",refX:"7",refY:"4",orient:"auto",children:(0,w.jsx)("path",{d:"M0 0 L8 4 L0 8 Z",fill:"#1668d6"})}),(0,w.jsx)("marker",{id:"rArrow",markerWidth:"10",markerHeight:"10",refX:"7",refY:"4",orient:"auto",children:(0,w.jsx)("path",{d:"M0 0 L8 4 L0 8 Z",fill:"#c0392b"})}),(0,w.jsx)("marker",{id:"gArrow",markerWidth:"10",markerHeight:"10",refX:"7",refY:"4",orient:"auto",children:(0,w.jsx)("path",{d:"M0 0 L8 4 L0 8 Z",fill:"#1f8a4c"})}),(0,w.jsxs)("linearGradient",{id:"poleFill",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,w.jsx)("stop",{offset:"0",stopColor:"#9fb4d6"}),(0,w.jsx)("stop",{offset:"0.5",stopColor:"#c4d2ea"}),(0,w.jsx)("stop",{offset:"1",stopColor:"#7d95bd"})]})]}),n&&[0,1,2,3,4].map(L=>{let H=u+20+L*46,Z=(y+L*8)%40;return(0,w.jsxs)("g",{className:"streak",opacity:.5,children:[(0,w.jsx)("line",{x1:c-6-Z,y1:H,x2:c-46-Z,y2:H,stroke:"#7fb0e6",strokeWidth:2,strokeLinecap:"round"}),(0,w.jsx)("line",{x1:c-22-Z,y1:H+12,x2:c-54-Z,y2:H+12,stroke:"#a9cbf0",strokeWidth:1.6,strokeLinecap:"round"})]},L)}),(0,w.jsx)("line",{x1:x-90,y1:m,x2:c-20,y2:m,stroke:"#8a8a8a",strokeDasharray:"6 5"}),(0,w.jsx)("rect",{x:x-g*.95,y:m,width:g*1.9,height:26,rx:2,fill:"#c9ccd2",stroke:"#5a5a5a"}),(0,w.jsxs)("text",{x,y:m+44,className:"dim",textAnchor:"middle",children:["Pad ",Tt(e.Dpad,1),"×",Tt(e.Bpad,1),"×",Tt(e.hpad,1),"m · Ø",Tt(e.Dneck,2),"m neck"]}),(0,w.jsxs)("g",{transform:k,style:{transition:n?"none":"transform .4s ease"},children:[(0,w.jsx)("path",{d:`M${x-g/2} ${m} L${x-_/2} ${u} L${x+_/2} ${u} L${x+g/2} ${m} Z`,fill:"url(#poleFill)",stroke:"#33507f",strokeWidth:1.6}),(0,w.jsx)("line",{x1:x,y1:R,x2:S-C/2,y2:R,stroke:"#33507f",strokeWidth:3}),(0,w.jsx)("rect",{x:S-C/2,y:R-T/2,width:C,height:T,rx:2,fill:"#2b2f3a",stroke:"#0d0f14",strokeWidth:1.4}),(0,w.jsx)("rect",{x:S-C/2+4,y:R-T/2+4,width:Math.max(0,C-8),height:Math.max(0,T-8),rx:1,fill:"none",stroke:"#f2c14e",strokeWidth:1,opacity:.7}),(0,w.jsx)("text",{x:S,y:R+3,className:"sign-label",textAnchor:"middle",children:"DMS PANEL"}),(()=>{let L=Math.min(S+C/2+52,c-6);return(0,w.jsxs)(w.Fragment,{children:[V(L,R,S+C/2+4,R,"#1668d6",2.6),(0,w.jsxs)("text",{x:L,y:R-8,className:"load blue",textAnchor:"end",children:["F_sign ",Tt(t.F_sign,1)," kN"]})]})})(),V(x+46,(m+u)/2,x+4,(m+u)/2,"#1668d6",2.2),(0,w.jsxs)("text",{x:x+50,y:(m+u)/2-5,className:"load blue",children:["F_pole ",Tt(t.F_pole,1)," kN"]}),V(S,R-T/2-40,S,R-T/2-4,"#1f8a4c",2.2,"gArrow"),(0,w.jsxs)("text",{x:S+6,y:R-T/2-26,className:"load green",children:["Wd ",Tt(e.Wdms,1)," kN"]})]}),V(x,m+82,x,m+34,"#c0392b",2.6,"rArrow"),(0,w.jsxs)("text",{x:x+6,y:m+70,className:"load red",children:["Pf ",Tt(t.Pf,1)," kN"]}),V(x-70,m+54,x-10,m+54,"#c0392b",2.6,"rArrow"),(0,w.jsxs)("text",{x:x-148,y:m+50,className:"load red",children:["Vf ",Tt(t.Vf,1)," kN"]}),(0,w.jsx)("path",{d:`M${x-34} ${m+12} A 34 34 0 0 1 ${x+2} ${m-22}`,fill:"none",stroke:"#c0392b",strokeWidth:2.4,markerEnd:"url(#rArrow)"}),(0,w.jsxs)("text",{x:x-150,y:m+22,className:"load red",children:["Mf ",Tt(t.Mf,0)," kN\xB7m"]}),(0,w.jsx)("circle",{cx:x,cy:m-2,r:4,fill:"#a02090"}),(0,w.jsxs)("text",{x:x+14,y:m-6,className:"load purple",children:["Tf ",Tt(t.Tf,0)," kN\xB7m"]}),(0,w.jsxs)("text",{x:x-g/2-8,y:(u+m)/2,className:"dim",textAnchor:"end",children:["H = ",Tt(e.Hpole,1)," m"]}),(0,w.jsxs)("text",{x:(x+S)/2,y:R-T/2-6,className:"dim",textAnchor:"middle",children:["e = ",Tt(e.esign,1)," m"]})]}),(0,w.jsxs)("div",{className:"fig-result",children:[(0,w.jsxs)("span",{children:[(0,w.jsx)("b",{children:"qz"})," ",Tt(t.qz,0)," Pa"]}),(0,w.jsxs)("span",{children:[(0,w.jsx)("b",{children:"class"})," ",t.Cls]}),(0,w.jsxs)("span",{className:t.strengthOK?"ok":"ng",children:[(0,w.jsx)("b",{children:"U"})," ",Tt(t.U_gov,2)," ",t.strengthOK?"OK":"NG"]}),(0,w.jsxs)("span",{className:t.deflOK?"ok":"ng",children:[(0,w.jsx)("b",{children:"\u03B4"})," ",Tt(t.d_total,1)," / ",Tt(t.d_limit,1)," mm"]})]})]})}var iv=O2;var IM=ma(Uo()),zM=ma(PM()),i0=ma(sl());(0,zM.createRoot)(document.getElementById("root")).render((0,i0.jsx)(IM.StrictMode,{children:(0,i0.jsx)(iv,{})}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

    