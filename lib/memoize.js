/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert-is-function' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var identity = require( '@stdlib/utils-identity-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns a memoized function.
*
* @param {Function} fcn - function to memoize
* @param {Function} [hashFunction] - function to map a set of arguments to a single value identifying that set
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} memoized function
*
* @example
* function factorial( n ) {
*     var prod;
*     var i;
*     prod = 1;
*     for ( i = n; i > 1; i-- ) {
*         prod *= i;
*     }
*     return prod;
* }
*
* var memoized = memoize( factorial );
*
* var v = memoized( 5 );
* // returns 120
*
* v = memoized( 5 );
* // returns 120
*/
function memoize( fcn, hashFunction ) {
	var toKey;
	var cache;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( arguments.length < 2 ) {
		toKey = identity;
	} else {
		toKey = hashFunction;
		if ( !isFunction( toKey ) ) {
			throw new TypeError( format( 'invalid argument. Hash function argument must be a function. Value: `%s`.', toKey ) );
		}
	}
	cache = {};
	setReadOnly( memoized, 'cache', cache );
	return memoized;

	/**
	* Memoized function.
	*
	* @private
	* @param {...*} args - function arguments
	* @returns {*} memoized function result
	*/
	function memoized() {
		var args;
		var out;
		var key;
		var i;
		args = new Array( arguments.length );
		for ( i = 0; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}
		key = toKey( args ).toString();
		if ( hasOwnProp( cache, key ) ) {
			return cache[ key ];
		}
		out = fcn.apply( null, args );
		cache[ key ] = out;
		return out;
	}
}


// EXPORTS //

module.exports = memoize;
