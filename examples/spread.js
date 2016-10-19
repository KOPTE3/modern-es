'use strict';

let a = [2, 3, 4];
let b = [1, ...a, 5];	// [1, 2, 3, 4, 5]
console.log(b);

let names = [`Jhon`, `Charlie`, `Emma`];
let [first, ...others] = names;

console.log(others);

function f(count, ...nums) {
	console.log(`${count} чисел: ${nums}`);
}

f(5, 11, 42, 37, 59, 66);	//
