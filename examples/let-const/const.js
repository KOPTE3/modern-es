'use strict';

const v1 = 42;
const v2 = [1, 2];
const v3 = {foo: 'bar'};

// SyntaxError: Missing initializer in const declaration
const v4;

v1 = 1337;			// TypeError: Assignment to constant variable
v2.push(3);			// OK
v3.foo = 'baz';		// OK
