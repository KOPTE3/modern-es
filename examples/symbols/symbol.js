// без new
let [sym1, sym2] = [Symbol(), Symbol(`label`)];

console.log(typeof sym1);				// symbol
console.log(sym2 == Symbol(`label`));	// false


// реестр глобальных символов
let me = Symbol.for(`Jhon`);
console.log(Symbol.for(`Jhon`) === me);	// true
console.log(Symbol.keyFor(me));			// Jhon
