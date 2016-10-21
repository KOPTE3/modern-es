// Map – ассоциативный массив (хеш-таблица)
let map = new Map();
map.set(`1`, `str1`);
map.set(1, `num1`);
map.set(true, `bool1`);

map.has(key);	// проверяет наличие такого ключа
map.get(key);	// получает элемент по ключу
map.delete(key);		// удаляет элемент с таким ключом

map.keys();		// перебор ключей, значений, пар в Map
map.values();
map.entries();
