"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(d,g){
var m=require('@stdlib/assert-is-function/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/utils-identity-function/dist'),y=require('@stdlib/assert-has-own-property/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e,r){var t,a;if(!m(e))throw new TypeError(v('1Vj3c',e));if(arguments.length<2)t=h;else if(t=r,!m(t))throw new TypeError(v('1Vj4C',t));return a={},f(s,"cache",a),s;function s(){var i,o,u,n;for(i=new Array(arguments.length),n=0;n<arguments.length;n++)i[n]=arguments[n];return u=t(i).toString(),y(a,u)?a[u]:(o=e.apply(null,i),a[u]=o,o)}}g.exports=p
});var q=l();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
