let range = {from: 1, to: 5};

// сделаем объект range итерируемым
range[Symbol.iterator] = function () {
	let current = this.from;
	let last = this.to;
	// метод должен вернуть объект с методом next()
	return {
		next: () => {
			return ((current <= last) ? {done: false, value: current++} : {done: true});
		}
	}
};

for (let num of range) {
	console.log(num);       // 1 2 3 4 5
}

console.log(...range);
