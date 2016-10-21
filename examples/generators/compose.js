let twice = function *(value) {
	yield value; yield value;
};

let twicer = function *(array) {
	for (let item of array) {
		yield * twice(item);
	}
};

console.log(...twicer(['a', 42, true, {foo: 'bar'}]));
// Выведет: a a 42 42 true true { foo: 'bar' } { foo: 'bar' }
