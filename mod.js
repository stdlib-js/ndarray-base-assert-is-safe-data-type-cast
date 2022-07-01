// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var n=t.default;if("function"==typeof n){var r=function(){return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var n=function(t){return Object.keys(Object(t))},r=n;var e=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,a=c;var l=function(t){return a.call(t)},f=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&f.call(t,n)},v="function"==typeof Symbol?Symbol.toStringTag:"",y=p,s=v,b=c;var m=l,g=function(t){var n,r,e;if(null==t)return b.call(t);r=t[s],n=y(t,s);try{t[s]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[s]=r:delete t[s],e},d=u()?g:m,h=d;var j=function(t){return"[object Arguments]"===h(t)},w=j;var O=function(){return w(arguments)}(),x="function"==typeof Object.defineProperty?Object.defineProperty:null;var _=function(){try{return x({},"x",{}),!0}catch(t){return!1}},P=Object.defineProperty,S=Object.prototype,E=S.toString,T=S.__defineGetter__,I=S.__defineSetter__,A=S.__lookupGetter__,k=S.__lookupSetter__;var V=function(t,n,r){var e,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===E.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===E.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(A.call(t,n)||k.call(t,n)?(e=t.__proto__,t.__proto__=S,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(t,n,r.get),u&&I&&I.call(t,n,r.set),t},N=P,B=V,F=_()?N:B,G=F;var L=function(t,n,r){G(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=d,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=d,nt=Z,rt=function(t){try{return $.call(t),!0}catch(t){return!1}},et=u();var it=function(t){return"object"==typeof t&&(t instanceof nt||(et?rt(t):"[object Number]"===tt(t)))},ot=Q,ut=it;var ct=M,at=function(t){return ot(t)||ut(t)},lt=it;ct(at,"isPrimitive",Q),ct(at,"isObject",lt);var ft=at;var pt=function(t){return t!=t},vt=ft.isPrimitive,yt=pt;var st=function(t){return vt(t)&&yt(t)},bt=ft.isObject,mt=pt;var gt=function(t){return bt(t)&&mt(t.valueOf())},dt=st,ht=gt;var jt=M,wt=function(t){return dt(t)||ht(t)},Ot=gt;jt(wt,"isPrimitive",st),jt(wt,"isObject",Ot);var xt=wt,_t=Number.POSITIVE_INFINITY,Pt=Z.NEGATIVE_INFINITY,St=Math.floor;var Et=function(t){return St(t)===t},Tt=_t,It=Pt,At=Et;var kt=function(t){return t<Tt&&t>It&&At(t)},Vt=ft.isPrimitive,Nt=kt;var Bt=function(t){return Vt(t)&&Nt(t)},Ft=ft.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Bt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Bt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=xt.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,n){var r;return null!=t&&(!(r=Jt.call(t,n))&&Kt&&zt(t)?!Ut(n=+n)&&qt(n)&&n>=0&&n<t.length:r)},Zt=Qt,$t=d;var tn=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},nn=p,rn=Zt,en=tn,on=Et;var un=O?j:function(t){return null!==t&&"object"==typeof t&&!en(t)&&"number"==typeof t.length&&on(t.length)&&t.length>=0&&t.length<=4294967295&&nn(t,"callee")&&!rn(t,"callee")},cn=un,an=n,ln=Array.prototype.slice;var fn=function(t){return cn(t)?an(ln.call(t)):an(t)},pn=tn;var vn=function(t){return null!==t&&"object"==typeof t};M(vn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!pn(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(vn));var yn=vn;var sn=Zt((function(){}),"prototype"),bn=!Zt({toString:null},"toString"),mn=Et;var gn=xt,dn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&mn(t.length)&&t.length>=0&&t.length<=9007199254740991},hn=K.isPrimitive,jn=Rt.isPrimitive;var wn=function(t,n,r){var e,i;if(!dn(t)&&!hn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!jn(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;i=r}else(i=e+r)<0&&(i=0)}else i=0;if(gn(n)){for(;i<e;i++)if(gn(t[i]))return i}else for(;i<e;i++)if(t[i]===n)return i;return-1},On=/./;var xn=function(t){return"boolean"==typeof t},_n=Boolean.prototype.toString;var Pn=d,Sn=function(t){try{return _n.call(t),!0}catch(t){return!1}},En=u();var Tn=function(t){return"object"==typeof t&&(t instanceof Boolean||(En?Sn(t):"[object Boolean]"===Pn(t)))},In=xn,An=Tn;var kn=M,Vn=function(t){return In(t)||An(t)},Nn=Tn;kn(Vn,"isPrimitive",xn),kn(Vn,"isObject",Nn);var Bn=Vn;var Fn=function(){return new Function("return this;")()},Gn="object"==typeof self?self:null,Ln="object"==typeof window?window:null,Mn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xn="object"==typeof Mn?Mn:null;module.exports=Xn;var Yn=Bn.isPrimitive,Cn=Fn,Dn=Gn,Hn=Ln,Rn=t(Object.freeze({__proto__:null}));var Wn=function(t){if(arguments.length){if(!Yn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Cn()}if(Dn)return Dn;if(Hn)return Hn;if(Rn)return Rn;throw new Error("unexpected error. Unable to resolve global object.")},zn=Wn(),Un=zn.document&&zn.document.childNodes,qn=Int8Array,Jn=On,Kn=Un,Qn=qn;var Zn=function(){return"function"==typeof Jn||"object"==typeof Qn||"function"==typeof Kn};var $n=function(){return/^\s*function\s*([^(]*)/i},tr=$n;M(tr,"REGEXP",$n());var nr=yn;var rr=d,er=tr.REGEXP,ir=function(t){return nr(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var or=function(t){var n,r,e;if(("Object"===(r=rr(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=er.exec(e.toString()))return n[1]}return ir(t)?"Buffer":r},ur=or;var cr=or;var ar=function(t){var n;return null===t?"null":"object"===(n=typeof t)?ur(t).toLowerCase():n},lr=function(t){return cr(t).toLowerCase()},fr=Zn()?lr:ar;var pr,vr=function(t){return t.constructor&&t.constructor.prototype===t},yr="undefined"==typeof window?void 0:window,sr=p,br=wn,mr=fr,gr=vr,dr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],hr=yr;pr=function(){var t;if("undefined"===mr(hr))return!1;for(t in hr)try{-1===br(dr,t)&&sr(hr,t)&&null!==hr[t]&&"object"===mr(hr[t])&&gr(hr[t])}catch(t){return!0}return!1}();var jr="undefined"!=typeof window,wr=pr,Or=vr,xr=jr;var _r=yn,Pr=p,Sr=un,Er=sn,Tr=bn,Ir=function(t){if(!1===xr&&!wr)return Or(t);try{return Or(t)}catch(t){return!1}},Ar=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kr=n,Vr=fn,Nr=function(t){var n,r,e,i,o,u,c;if(i=[],Sr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!Pr(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1===(e="function"==typeof t)&&!_r(t))return i;r=Er&&e}for(o in t)r&&"prototype"===o||!Pr(t,o)||i.push(String(o));if(Tr)for(n=Ir(t),c=0;c<Ar.length;c++)u=Ar[c],n&&"constructor"===u||!Pr(t,u)||i.push(String(u));return i},Br=i?e()?Vr:kr:Nr,Fr=tn;var Gr=function(t){return"object"==typeof t&&null!==t&&!Fr(t)},Lr=fr;var Mr=function(t){return"function"===Lr(t)},Xr=Object.getPrototypeOf;var Yr=function(t){return t.__proto__},Cr=d,Dr=Yr;var Hr=function(t){var n=Dr(t);return n||null===n?n:"[object Function]"===Cr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Rr=Xr,Wr=Hr,zr=Mr(Object.getPrototypeOf)?Rr:Wr;var Ur=Gr,qr=Mr,Jr=function(t){return null==t?null:(t=Object(t),zr(t))},Kr=p,Qr=d,Zr=Object.prototype;var $r=function(t){var n;return!!Ur(t)&&(!(n=Jr(t))||!Kr(t,"constructor")&&Kr(n,"constructor")&&qr(n.constructor)&&"[object Function]"===Qr(n.constructor)&&Kr(n,"isPrototypeOf")&&qr(n.isPrototypeOf)&&(n===Zr||function(t){var n;for(n in t)if(!Kr(t,n))return!1;return!0}(t)))},te=Br,ne=tn,re=$r,ee=yn,ie=Bn.isPrimitive,oe=p;var ue=function(t,n){var r,e,i,o,u,c,a,l=!0;if(!ee(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!re(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(oe(n,"duplicates")&&(l=n.duplicates,!ie(l)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(e=(r=te(t)).length,u={},l)for(a=0;a<e;a++)o=t[i=r[a]],oe(u,o)?(c=u[o],ne(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(a=0;a<e;a++)u[t[i=r[a]]]=i;return u},ce=ue,ae=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var le=function(){return ae.slice()},fe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pe=F;var ve=function(t,n,r){pe(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})},ye=ve,se=ye,be=Br;var me=function(t,n){var r,e,i;for(r=be(n),i=0;i<r.length;i++)e=r[i],se(t,e,n[e]);return t},ge=function(){return fe.slice()},de=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},he=me;M(ge,"enum",de),he(ge,de());var je=ge,we=(0,je.enum)();var Oe=ye,xe=Br;var _e=function(t,n){var r,e,i;for(r=xe(n),i=0;i<r.length;i++)e=r[i],Oe(t,e,n[e]);return t},Pe=le,Se=function(){return{bool:we.bool,int8:we.int8,uint8:we.uint8,uint8c:we.uint8c,int16:we.int16,uint16:we.uint16,int32:we.int32,uint32:we.uint32,int64:we.int64,uint64:we.uint64,float32:we.float32,float64:we.float64,complex64:we.complex64,complex128:we.complex128,binary:we.binary,generic:we.generic,notype:we.notype,userdefined_type:we.userdefined_type}},Ee=_e;M(Pe,"enum",Se),Ee(Pe,Se());var Te=ce((0,Pe.enum)(),{duplicates:!1});var Ie=function(t){var n=Te[t];return"string"==typeof n?n:null},Ae=(0,je.enum)();var ke=Ie,Ve=function(t){var n=Ae[t];return"number"==typeof n?n:null};var Ne,Be=Br,Fe=p,Ge=function(t){var n=typeof t;return"string"===n?null===Ve(t)?null:t:"number"===n?ke(t):null},Le={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Me(){var t,n,r,e,i,o,u,c,a;for(r={},n=(t=Be(Le)).length,a=0;a<n;a++){for(i=t[a],u=Le[i],e={},c=0;c<n;c++)e[o=t[c]]=u[o];r[i]=e}return r}function Xe(){var t,n,r,e,i,o,u,c,a;for(r={},n=(t=Be(Le)).length,a=0;a<n;a++){for(i=t[a],u=Le[i],e=[],c=0;c<n;c++)1===u[o=t[c]]&&e.push(o);r[i]=e}return r}var Ye=function(t){return 0===arguments.length?Me():(void 0===Ne&&(Ne=Xe()),t=Ge(t),Fe(Ne,t)?Ne[t].slice():null)}();function Ce(t,n){return t===n||Ye[t][n]>0}export{Ce as default};
//# sourceMappingURL=mod.js.map
