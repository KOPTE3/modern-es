'use strict';

function f(callback) {
	callback();
}

let a = {
	func: function () {
		f(() => this.number++);
	},
	number: 5
};

let square = num => num * num;
console.log([1, 2, 3, 4].map(square));

let words = '12, 234, 212, 11, 543, 12, 33';
let numbers = words
	.split(', ')
	.map(num => parseInt(num, 10))
	.filter(num => num % 2)
	.sort((l, r) => r - l);

console.log(numbers);

a.func();
console.log(a.number);

