// Параметры по умолчанию
function hello(name = 'Anon') {
	console.log(`Hello, ${name}!`);
}

hello();			// Hello, Anon!
hello('Jhon');		// Hello, Jhon!


// Деструктуризация аргументов функции
function square({width, height}) {
	return width * height;
}

let rectangle = {
	width: 20,
	height: 30
};

console.log(square(rectangle));		// 600
