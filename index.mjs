// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-identity-function@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function i(i,o){var d,l;if(!t(i))throw new TypeError(n("1Vj3c,J9",i));if(arguments.length<2)d=r;else if(!t(d=o))throw new TypeError(n("1Vj4C,Lz",d));return e(m,"cache",l={}),m;function m(){var t,e,r,n;for(t=new Array(arguments.length),n=0;n<arguments.length;n++)t[n]=arguments[n];return r=d(t).toString(),s(l,r)?l[r]:(e=i.apply(null,t),l[r]=e,e)}}export{i as default};
//# sourceMappingURL=index.mjs.map