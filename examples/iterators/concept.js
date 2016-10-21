// для перебора итерируемых объектов используется новый вид циклов
for (variable of iterable) {
	void 0;
}

const iterable1 = [10, 20, 30];
const iterable2 = 'hello';


for (let num of iterable1) {
	console.log(num);		// 10 20 30
}

for (let char of iterable2) {
	console.log(char);		// h e l l o
}


