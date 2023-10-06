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
var dtypes = require( '@stdlib/ndarray-dtypes' );
var safeCasts = require( '@stdlib/ndarray-safe-casts' );
var isSafeCast = require( './../../dist' );


// VARIABLES //

var DTYPES = dtypes();
var SAFE_CASTS = safeCasts();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSafeCast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean indicating if an ndarray data type can be safely cast to another ndarray data type', function test( t ) {
	var expected;
	var actual;
	var dt;
	var i;
	var j;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			expected = ( SAFE_CASTS[ dt ][ DTYPES[j] ] > 0 );
			actual = isSafeCast( dt, DTYPES[ j ] );
			t.strictEqual( actual, expected, 'returns expected value. from: '+dt+'. to: '+DTYPES[j]+'.' );
		}
	}
	t.end();
});
