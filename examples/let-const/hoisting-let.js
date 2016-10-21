'use strict';

new Foo();		// ReferenceError
bar = true;		// ReferenceError

class Foo {
	constructor() {
	}
}
let bar;
