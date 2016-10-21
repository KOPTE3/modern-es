let range = function *(begin, end) {
	for (let v = begin; v <= end; v++) {
		yield v
	}
};

console.log(...range(5, 12));	// 5 6 7 8 9 10 11 12
