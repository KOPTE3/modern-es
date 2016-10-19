'use strict';

let Me = {
	[Symbol.for(`sayHello`)]() {
		console.log(`Hello, ${this.name}`);
	},
	name: `Anon`
};

Me[Symbol.for(`sayHello`)]();		// Hello, Anon
