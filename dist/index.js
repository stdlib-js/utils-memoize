"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(w,g){
var m=require('@stdlib/assert-is-function/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/utils-identity-function/dist'),p=require('@stdlib/assert-has-own-property/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r){var t,a;if(!m(e))throw new TypeError(v('1Vj3c',e));if(arguments.length<2)t=h;else if(t=r,!m(t))throw new TypeError(v('1Vj4C',t));return a={},f(s,"cache",a),s;function s(){var i,o,n,u;for(i=[],u=0;u<arguments.length;u++)i.push(arguments[u]);return n=t(i).toString(),p(a,n)?a[n]:(o=e.apply(null,i),a[n]=o,o)}}g.exports=y
});var q=l();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
