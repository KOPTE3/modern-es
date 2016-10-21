// короткий синтаксис определения
let square = num => num * num;
console.log([1, 2, 3, 4].map(square));		// 1 4 9 16
// console.log([1,2,3,4].map(num => num * num));


let hello = () => console.log('Hello!');
let sum = (n1, n2) => n1 + n2;
let modul = number => {
	if (number < 0) {
		return -number;
	}
	return number;
};
