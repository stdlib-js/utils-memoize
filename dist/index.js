"use strict";var c=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var l=c(function(w,g){
var m=require('@stdlib/assert-is-function/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/utils-identity-function/dist'),p=require('@stdlib/assert-has-own-property/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function y(t,r){var e,a;if(!m(t))throw new TypeError(v('1Vj3c',t));if(arguments.length<2)e=h;else if(e=r,!m(e))throw new TypeError(v('1Vj4C',e));return a={},f(s,"cache",a),s;function s(){var i,o,n,u;for(i=[],u=0;u<arguments.length;u++)i.push(arguments[u]);return n=e(i).toString(),p(a,n)?a[n]:(o=t.apply(null,i),a[n]=o,o)}}g.exports=y
});var q=l();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
