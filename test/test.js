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

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isObject = require( '@stdlib/assert-is-plain-object' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var memoize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof memoize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			memoize( value );
		};
	}
});

tape( 'the function throws an error if provided a non-function hash function argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			memoize( noop, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = memoize( noop );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.notEqual( fcn, noop, 'returns a new function' );
	t.end();
});

tape( 'attached to the returned function is the result cache', function test( t ) {
	var fcn = memoize( noop );
	t.strictEqual( hasOwnProp( fcn, 'cache' ), true, 'has cache property' );
	t.strictEqual( isObject( fcn.cache ), true, 'cache is an object' );
	t.end();
});

tape( 'the returned function is memoized', function test( t ) {
	var vals;
	var fcn;
	var n;
	var v;
	var i;

	function rand( n ) {
		return n * randu();
	}

	fcn = memoize( rand );

	vals = new Array( 5 );
	for ( i = 0; i < vals.length; i++ ) {
		vals[ i ] = fcn( i );
	}
	for ( i = 0; i < 100; i++ ) {
		n = floor( randu() * 5 );
		v = fcn( n );
		t.strictEqual( v, vals[ n ], 'returns '+v+' when provided '+n );
	}
	t.end();
});

tape( 'the function supports providing a custom hash function', function test( t ) {
	var fcn;
	var v;

	function hash( args ) {
		return args.join( '|' );
	}

	function foo( x, y, z ) {
		return x + y + z;
	}

	fcn = memoize( foo, hash );
	t.strictEqual( hasOwnProp( fcn.cache, '3|4|5' ), false, 'cache does not have key' );

	v = fcn( 3, 4, 5 );
	t.strictEqual( v, 12, 'returns expected value' );

	t.strictEqual( hasOwnProp( fcn.cache, '3|4|5' ), true, 'cache does have key' );

	t.end();
});
