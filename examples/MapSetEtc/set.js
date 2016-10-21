// Set – множество уникальных элементов
let set = new Set();
let [a, b] = [{prop: `value1`}, {prop: `value2`}];

set.add(a);	// повторяющиеся элементы хранятся один раз
set.add(b);
set.add(a);
set.add(a);
set.add(b);

console.log(set.size);	// 2
set.forEach(elem => console.log(elem.prop));	// value1 value2
