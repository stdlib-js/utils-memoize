<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# memoize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Memoize a function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
memoize = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var memoize = require( 'path/to/vendor/umd/utils-memoize/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.memoize;
})();
</script>
```

#### memoize( fcn\[, hashFunction] )

Memoizes a function.

```javascript
var randu = require( '@stdlib/random-base-randu' );

function rand( n ) {
    return n * randu();
}

var memoized = memoize( rand );

var v1 = memoized( 5 );
var v2 = memoized( 5 );

var bool = ( v1 === v2 );
// returns true
```

By default, the implementation serializes provided arguments as a `string` and stores results using the `string` as an identifier. To use a custom hash function, provide a hash function argument.

```javascript
function add( obj ) {
    return obj.x + obj.y + obj.z;
}

obj = {
    'x': 3,
    'y': 4,
    'z': 5
};

// Default behavior...

var memoized = memoize( add );

var v1 = memoized( obj );
// returns 12

var str = obj.toString();
// returns '[object Object]'

var v2 = memoized.cache[ str ];
// returns 12

obj.x = 1000;

var v3 = memoized( obj );
// returns 12

// Custom hash function...

function hashFunction( args ) {
    return JSON.stringify( args );
}

memoized = memoize( add, hashFunction );

v1 = memoized( obj );
// returns 1009

str = hashFunction( [ obj ] );
// returns '[{"x":1000,"y":4,"z":5}]'

v2 = memoized.cache[ str ];
// returns 1009

obj.x = 6;

v3 = memoized( obj );
// returns 15
```

#### memoized.cache

Results cache. Note that, while the property is **read-only**, cache contents may be modified independently of the memoized function.

```javascript
function beep( x ) {
    throw new Error( 'boop' );
}

var memoized = memoize( beep );

var cache = memoized.cache;
// returns {}

// Modify the cache:
cache[ 'bop' ] = 'bip';

var str = memoized( 'bop' );
// returns 'bip'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation does **not** set the `length` of the returned function. Accordingly, the returned function `length` is **always** `0`.
-   The evaluation context is **always** `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var fcn;
var n;
var v;
var i;

function rand( n ) {
    return n * randu();
}

fcn = memoize( rand );

for ( i = 0; i < 100; i++ ) {
    n = floor( randu() * 5 );
    v = fcn( n );
    console.log( 'rand(%d) = %d', n, v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-memoize.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-memoize

[test-image]: https://github.com/stdlib-js/utils-memoize/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/utils-memoize/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-memoize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-memoize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-memoize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-memoize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-memoize/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-memoize/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-memoize/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-memoize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-memoize/main/LICENSE

</section>

<!-- /.links -->
