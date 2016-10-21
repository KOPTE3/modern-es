let words = '12, 234, 212, 11, 543, 12, 33';
let numbers = words
	.split(', ')
	.map(num => parseInt(num, 10))
	.filter(num => num % 2)
	.sort((l, r) => r - l);

console.log(numbers);

