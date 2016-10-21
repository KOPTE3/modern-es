function * gen() {
	yield 1;
	yield 2;
	return 3;
}

let generator = gen();
console.log(generator.next());	// { value: 1, done: false }
console.log(generator.next());	// { value: 2, done: false }
console.log(generator.next());	// { value: 3, done: true }
console.log(generator.next());	// { value: undefined, done: true }
