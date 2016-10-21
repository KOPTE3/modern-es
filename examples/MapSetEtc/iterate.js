// Перебор элементов коллекции
let map = new Map([[`key1`, 1], [`key2`, 2], [`key3`, 3]]);	// три элемента

map.forEach(function (value, key, allMap) {
	console.log(`${key}=${value} `);		// key1=1 key2=2 key3=3
});

map.entries().forEach(console.log);	// ошибка: не массив!


// key1=1 key2=2 key3=3
[...map.entries()].forEach(el => console.log(`${el[0]}=${el[1]} `));
