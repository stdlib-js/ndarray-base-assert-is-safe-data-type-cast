// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=e();function i(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function c(t,n){return null!=t&&u.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,l="function"==typeof a?a.toStringTag:"";var f=i()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[l],n=c(t,l);try{t[l]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[l]=e:delete t[l],r}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}var s=function(){return p(arguments)}(),y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function d(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+v(i):v(i)+t,r&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!b(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):m.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(t){return"string"==typeof t}var _=Math.abs,O=String.prototype.toLowerCase,x=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,I=/e-(\d)$/,T=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=S.call(e,V,"$1e"),e=S.call(e,k,"e"),e=S.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=S.call(e,E,"e+0$1"),e=S.call(e,I,"e-0$1"),t.alternate&&(e=S.call(e,T,"$1."),e=S.call(e,P,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===x.call(t.specifier)?x.call(e):O.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function B(t,n,e){var r=n-t.length;return r<0?t:t=e?t+F(r):F(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function X(t){var n,e,r,i,o,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(r=t[a]))u+=r;else{if(n=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=d(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function $(t){var n,e,r,i;for(e=[],i=0,r=M.exec(t);r;)(n=t.slice(i,M.lastIndex-r[0].length)).length&&e.push(n),e.push(W(r)),i=M.lastIndex,r=M.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function R(t){return"string"==typeof t}function H(t){var n,e,r;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=$(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return X.apply(null,e)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(J.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(t,n,e.get),u&&q&&q.call(t,n,e.set),t};var Q=U;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=i();function it(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return nt(t)||it(t)}function ut(t){return"number"==typeof t}tt(ot,"isPrimitive",nt),tt(ot,"isObject",it);var ct=Number,at=ct.prototype.toString;var lt=i();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var vt=Number.POSITIVE_INFINITY,dt=ct.NEGATIVE_INFINITY,mt=Math.floor;function ht(t){return mt(t)===t}function wt(t){return t<vt&&t>dt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function Ot(t){return jt(t)||_t(t)}tt(Ot,"isPrimitive",jt),tt(Ot,"isObject",_t);var xt=Object.prototype.propertyIsEnumerable;var St=!xt.call("beep","0");function Et(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&St&&ot(t)?!yt(n=+n)&&jt(n)&&n>=0&&n<t.length:e)}var It=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var Tt=s?p:function(t){return null!==t&&"object"==typeof t&&!It(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&c(t,"callee")&&!Et(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!It(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(At));var kt=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,n,e){var r,i;if(!Nt(t)&&!nt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(bt(n)){for(;i<r;i++)if(bt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=i();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Wt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ut="object"==typeof Ht?Ht:null,Zt="object"==typeof globalThis?globalThis:null;var Dt=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Zt)return Zt;if($t)return $t;if(Rt)return Rt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),zt=Dt.document&&Dt.document.childNodes,qt=Int8Array;function Jt(){return/^\s*function\s*([^(]*)/i}var Kt=/^\s*function\s*([^(]*)/i;function Qt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Kt.exec(r.toString()))return n[1]}return At(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}tt(Jt,"REGEXP",Kt);var tn="function"==typeof Bt||"object"==typeof qt||"function"==typeof zt?function(t){return Qt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Qt(t).toLowerCase():n};function nn(t){return t.constructor&&t.constructor.prototype===t}var en=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],rn="undefined"==typeof window?void 0:window;var on=function(){var t;if("undefined"===tn(rn))return!1;for(t in rn)try{-1===Ft(en,t)&&c(rn,t)&&null!==rn[t]&&"object"===tn(rn[t])&&nn(rn[t])}catch(t){return!0}return!1}(),un="undefined"!=typeof window;var cn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var an=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Tt(n)?t(Pt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,u,a;if(i=[],Tt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!c(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!At(t))return i;e=kt&&r}for(o in t)e&&"prototype"===o||!c(t,o)||i.push(String(o));if(Vt)for(n=function(t){if(!1===un&&!on)return nn(t);try{return nn(t)}catch(t){return!1}}(t),a=0;a<cn.length;a++)u=cn[a],n&&"constructor"===u||!c(t,u)||i.push(String(u));return i};function ln(t){return Object.keys(Object(t))}var fn=void 0!==Object.keys,pn=e();function sn(){return pn&&"symbol"==typeof Symbol.toStringTag}var yn=Object.prototype.toString;var gn=Object.prototype.hasOwnProperty;function bn(t,n){return null!=t&&gn.call(t,n)}var vn="function"==typeof Symbol?Symbol.toStringTag:"";var dn=sn()?function(t){var n,e,r;if(null==t)return yn.call(t);e=t[vn],n=bn(t,vn);try{t[vn]=void 0}catch(n){return yn.call(t)}return r=yn.call(t),n?t[vn]=e:delete t[vn],r}:function(t){return yn.call(t)};function mn(t){return"[object Arguments]"===dn(t)}var hn=function(){return mn(arguments)}(),wn="function"==typeof Object.defineProperty?Object.defineProperty:null;var jn,_n=Object.defineProperty,On=Object.prototype,xn=On.toString,Sn=On.__defineGetter__,En=On.__defineSetter__,In=On.__lookupGetter__,Tn=On.__lookupSetter__;jn=function(){try{return wn({},"x",{}),!0}catch(t){return!1}}()?_n:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===xn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===xn.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(In.call(t,n)||Tn.call(t,n)?(r=t.__proto__,t.__proto__=On,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Sn&&Sn.call(t,n,e.get),u&&En&&En.call(t,n,e.set),t};var Pn=jn;function An(t,n,e){Pn(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kn(t){return"string"==typeof t}var Vn=String.prototype.valueOf;var Nn=sn();function Fn(t){return"object"==typeof t&&(t instanceof String||(Nn?function(t){try{return Vn.call(t),!0}catch(t){return!1}}(t):"[object String]"===dn(t)))}function Bn(t){return kn(t)||Fn(t)}function Ln(t){return"number"==typeof t}An(Bn,"isPrimitive",kn),An(Bn,"isObject",Fn);var Cn=Number,Gn=Cn.prototype.toString;var Yn=sn();function Xn(t){return"object"==typeof t&&(t instanceof Cn||(Yn?function(t){try{return Gn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===dn(t)))}function Mn(t){return Ln(t)||Xn(t)}function Wn(t){return t!=t}function $n(t){return Ln(t)&&Wn(t)}function Rn(t){return Xn(t)&&Wn(t.valueOf())}function Hn(t){return $n(t)||Rn(t)}An(Mn,"isPrimitive",Ln),An(Mn,"isObject",Xn),An(Hn,"isPrimitive",$n),An(Hn,"isObject",Rn);var Un=Number.POSITIVE_INFINITY,Zn=Cn.NEGATIVE_INFINITY,Dn=Math.floor;function zn(t){return Dn(t)===t}function qn(t){return t<Un&&t>Zn&&zn(t)}function Jn(t){return Ln(t)&&qn(t)}function Kn(t){return Xn(t)&&qn(t.valueOf())}function Qn(t){return Jn(t)||Kn(t)}An(Qn,"isPrimitive",Jn),An(Qn,"isObject",Kn);var te=Object.prototype.propertyIsEnumerable;var ne=!te.call("beep","0");function ee(t,n){var e;return null!=t&&(!(e=te.call(t,n))&&ne&&Bn(t)?!$n(n=+n)&&Jn(n)&&n>=0&&n<t.length:e)}var re=Array.isArray?Array.isArray:function(t){return"[object Array]"===dn(t)};var ie=hn?mn:function(t){return null!==t&&"object"==typeof t&&!re(t)&&"number"==typeof t.length&&zn(t.length)&&t.length>=0&&t.length<=4294967295&&bn(t,"callee")&&!ee(t,"callee")},oe=Array.prototype.slice;function ue(t){return null!==t&&"object"==typeof t}function ce(){}An(ue,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!re(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(ue));var ae=ee(ce,"prototype"),le=!ee({toString:null},"toString");function fe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&zn(t.length)&&t.length>=0&&t.length<=9007199254740991}function pe(t,n,e){var r,i;if(!fe(t)&&!kn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Jn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Hn(n)){for(;i<r;i++)if(Hn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var se=/./;function ye(t){return"boolean"==typeof t}var ge=Boolean.prototype.toString;var be=sn();function ve(t){return"object"==typeof t&&(t instanceof Boolean||(be?function(t){try{return ge.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===dn(t)))}function de(t){return ye(t)||ve(t)}function me(){return new Function("return this;")()}An(de,"isPrimitive",ye),An(de,"isObject",ve);var he="object"==typeof self?self:null,we="object"==typeof window?window:null,je="object"==typeof Ht?Ht:null;var _e=function(t){if(arguments.length){if(!ye(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return me()}if(he)return he;if(we)return we;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=_e.document&&_e.document.childNodes,xe=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;function Ie(t){var n,e,r,i;if(("Object"===(e=dn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ee.exec(r.toString()))return n[1]}return ue(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}An(Se,"REGEXP",Ee);var Te="function"==typeof se||"object"==typeof xe||"function"==typeof Oe?function(t){return Ie(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Ie(t).toLowerCase():n};function Pe(t){return t.constructor&&t.constructor.prototype===t}var Ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ke="undefined"==typeof window?void 0:window;var Ve=function(){var t;if("undefined"===Te(ke))return!1;for(t in ke)try{-1===pe(Ae,t)&&bn(ke,t)&&null!==ke[t]&&"object"===Te(ke[t])&&Pe(ke[t])}catch(t){return!0}return!1}(),Ne="undefined"!=typeof window;var Fe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Be=fn?function(){return 2!==(ln(arguments)||"").length}(1,2)?function(t){return ie(t)?ln(oe.call(t)):ln(t)}:ln:function(t){var n,e,r,i,o,u,c;if(i=[],ie(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!bn(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!ue(t))return i;e=ae&&r}for(o in t)e&&"prototype"===o||!bn(t,o)||i.push(String(o));if(le)for(n=function(t){if(!1===Ne&&!Ve)return Pe(t);try{return Pe(t)}catch(t){return!1}}(t),c=0;c<Fe.length;c++)u=Fe[c],n&&"constructor"===u||!bn(t,u)||i.push(String(u));return i};function Le(t){return"function"===Te(t)}var Ce,Ge=Object.getPrototypeOf;Ce=Le(Object.getPrototypeOf)?Ge:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===dn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ye=Ce;var Xe=Object.prototype;function Me(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!re(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Ye(t))}(t),!n||!bn(t,"constructor")&&bn(n,"constructor")&&Le(n.constructor)&&"[object Function]"===dn(n.constructor)&&bn(n,"isPrototypeOf")&&Le(n.isPrototypeOf)&&(n===Xe||function(t){var n;for(n in t)if(!bn(t,n))return!1;return!0}(t)))}var We="function"==typeof Object.defineProperty?Object.defineProperty:null;var $e,Re=Object.defineProperty,He=Object.prototype,Ue=He.toString,Ze=He.__defineGetter__,De=He.__defineSetter__,ze=He.__lookupGetter__,qe=He.__lookupSetter__;$e=function(){try{return We({},"x",{}),!0}catch(t){return!1}}()?Re:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Ue.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Ue.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(ze.call(t,n)||qe.call(t,n)?(r=t.__proto__,t.__proto__=He,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Ze&&Ze.call(t,n,e.get),u&&De&&De.call(t,n,e.set),t};var Je=$e;function Ke(t,n,e){Je(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Qe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function tr(){return Qe.slice()}var nr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function er(){return nr.slice()}function rr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ir(t,n,e){Je(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function or(t){return Object.keys(Object(t))}var ur=void 0!==Object.keys,cr=e();function ar(){return cr&&"symbol"==typeof Symbol.toStringTag}var lr=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;function pr(t,n){return null!=t&&fr.call(t,n)}var sr="function"==typeof Symbol?Symbol.toStringTag:"";var yr=ar()?function(t){var n,e,r;if(null==t)return lr.call(t);e=t[sr],n=pr(t,sr);try{t[sr]=void 0}catch(n){return lr.call(t)}return r=lr.call(t),n?t[sr]=e:delete t[sr],r}:function(t){return lr.call(t)};function gr(t){return"[object Arguments]"===yr(t)}var br=function(){return gr(arguments)}();function vr(t){return"string"==typeof t}var dr=String.prototype.valueOf;var mr=ar();function hr(t){return"object"==typeof t&&(t instanceof String||(mr?function(t){try{return dr.call(t),!0}catch(t){return!1}}(t):"[object String]"===yr(t)))}function wr(t){return vr(t)||hr(t)}function jr(t){return"number"==typeof t}Ke(wr,"isPrimitive",vr),Ke(wr,"isObject",hr);var _r=Number,Or=_r.prototype.toString;var xr=ar();function Sr(t){return"object"==typeof t&&(t instanceof _r||(xr?function(t){try{return Or.call(t),!0}catch(t){return!1}}(t):"[object Number]"===yr(t)))}function Er(t){return jr(t)||Sr(t)}function Ir(t){return t!=t}function Tr(t){return jr(t)&&Ir(t)}function Pr(t){return Sr(t)&&Ir(t.valueOf())}function Ar(t){return Tr(t)||Pr(t)}Ke(Er,"isPrimitive",jr),Ke(Er,"isObject",Sr),Ke(Ar,"isPrimitive",Tr),Ke(Ar,"isObject",Pr);var kr=Number.POSITIVE_INFINITY,Vr=_r.NEGATIVE_INFINITY,Nr=Math.floor;function Fr(t){return Nr(t)===t}function Br(t){return t<kr&&t>Vr&&Fr(t)}function Lr(t){return jr(t)&&Br(t)}function Cr(t){return Sr(t)&&Br(t.valueOf())}function Gr(t){return Lr(t)||Cr(t)}Ke(Gr,"isPrimitive",Lr),Ke(Gr,"isObject",Cr);var Yr=Object.prototype.propertyIsEnumerable;var Xr=!Yr.call("beep","0");function Mr(t,n){var e;return null!=t&&(!(e=Yr.call(t,n))&&Xr&&wr(t)?!Tr(n=+n)&&Lr(n)&&n>=0&&n<t.length:e)}var Wr=Array.isArray?Array.isArray:function(t){return"[object Array]"===yr(t)};var $r=br?gr:function(t){return null!==t&&"object"==typeof t&&!Wr(t)&&"number"==typeof t.length&&Fr(t.length)&&t.length>=0&&t.length<=4294967295&&pr(t,"callee")&&!Mr(t,"callee")},Rr=Array.prototype.slice;function Hr(t){return null!==t&&"object"==typeof t}Ke(Hr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Wr(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Hr));var Ur=Mr(ce,"prototype"),Zr=!Mr({toString:null},"toString");function Dr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Fr(t.length)&&t.length>=0&&t.length<=9007199254740991}function zr(t,n,e){var r,i;if(!Dr(t)&&!vr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Lr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Ar(n)){for(;i<r;i++)if(Ar(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var qr=/./;function Jr(t){return"boolean"==typeof t}var Kr=Boolean.prototype.toString;var Qr=ar();function ti(t){return"object"==typeof t&&(t instanceof Boolean||(Qr?function(t){try{return Kr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===yr(t)))}function ni(t){return Jr(t)||ti(t)}function ei(){return new Function("return this;")()}Ke(ni,"isPrimitive",Jr),Ke(ni,"isObject",ti);var ri="object"==typeof self?self:null,ii="object"==typeof window?window:null,oi="object"==typeof Ht?Ht:null;var ui=function(t){if(arguments.length){if(!Jr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ei()}if(ri)return ri;if(ii)return ii;if(oi)return oi;throw new Error("unexpected error. Unable to resolve global object.")}(),ci=ui.document&&ui.document.childNodes,ai=Int8Array;function li(){return/^\s*function\s*([^(]*)/i}var fi=/^\s*function\s*([^(]*)/i;function pi(t){var n,e,r,i;if(("Object"===(e=yr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=fi.exec(r.toString()))return n[1]}return Hr(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Ke(li,"REGEXP",fi);var si="function"==typeof qr||"object"==typeof ai||"function"==typeof ci?function(t){return pi(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?pi(t).toLowerCase():n};function yi(t){return t.constructor&&t.constructor.prototype===t}var gi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],bi="undefined"==typeof window?void 0:window;var vi=function(){var t;if("undefined"===si(bi))return!1;for(t in bi)try{-1===zr(gi,t)&&pr(bi,t)&&null!==bi[t]&&"object"===si(bi[t])&&yi(bi[t])}catch(t){return!0}return!1}(),di="undefined"!=typeof window;var mi=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var hi=ur?function(){return 2!==(or(arguments)||"").length}(1,2)?function(t){return $r(t)?or(Rr.call(t)):or(t)}:or:function(t){var n,e,r,i,o,u,c;if(i=[],$r(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!pr(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Hr(t))return i;e=Ur&&r}for(o in t)e&&"prototype"===o||!pr(t,o)||i.push(String(o));if(Zr)for(n=function(t){if(!1===di&&!vi)return yi(t);try{return yi(t)}catch(t){return!1}}(t),c=0;c<mi.length;c++)u=mi[c],n&&"constructor"===u||!pr(t,u)||i.push(String(u));return i};Ke(er,"enum",rr),function(t,n){var e,r,i;for(e=hi(n),i=0;i<e.length;i++)ir(t,r=e[i],n[r])}(er,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var wi={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ji(){return{bool:wi.bool,int8:wi.int8,uint8:wi.uint8,uint8c:wi.uint8c,int16:wi.int16,uint16:wi.uint16,int32:wi.int32,uint32:wi.uint32,int64:wi.int64,uint64:wi.uint64,float32:wi.float32,float64:wi.float64,complex64:wi.complex64,complex128:wi.complex128,binary:wi.binary,generic:wi.generic,notype:wi.notype,userdefined_type:wi.userdefined_type}}Ke(tr,"enum",ji),function(t,n){var e,r,i;for(e=hi(n),i=0;i<e.length;i++)ir(t,r=e[i],n[r])}(tr,ji());var _i=function(t,n){var e,r,i,o,u,c,a,l=!0;if(!ue(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Me(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(bn(n,"duplicates")&&!ye(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Be(t)).length,u={},l)for(a=0;a<r;a++)bn(u,o=t[i=e[a]])?(c=u[o],re(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(a=0;a<r;a++)u[t[i=e[a]]]=i;return u}(ji(),{duplicates:!1});var Oi={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function xi(){var t;return 0===arguments.length?Oi.all.slice():(t=Oi[arguments[0]])?t.slice():[]}function Si(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ei(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}tt(xi,"enum",Si),function(t,n){var e,r,i;for(e=an(n),i=0;i<e.length;i++)Ei(t,r=e[i],n[r])}(xi,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ii={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ti(t){var n=typeof t;return"string"===n?null===function(t){var n=Ii[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=_i[t];return"string"==typeof n?n:null}(t):null}var Pi,Ai={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function ki(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=an(Ai)).length,a=0;a<n;a++){for(i=t[a],u=Ai[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Vi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=an(Ai)).length,a=0;a<n;a++){for(i=t[a],u=Ai[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Ni=function(t){return 0===arguments.length?ki():(void 0===Pi&&(Pi=Vi()),t=Ti(t),c(Pi,t)?Pi[t].slice():null)}();function Fi(t,n){return t===n||Ni[t][n]>0}export{Fi as default};
//# sourceMappingURL=mod.js.map
