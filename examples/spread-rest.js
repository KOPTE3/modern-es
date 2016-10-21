// При деструктуризации
let names = [`Jhon`, `Charlie`, `Emma`];
let [first, ...others] = names;

console.log(others);    // [ 'Charlie', 'Emma' ]

// При вызове функций
function f(count, ...nums) {
	// не используем arguments
	console.log(`${count} чисел: ${nums}`);
}

f(5, 11, 42, 37, 59, 66);   // 5 чисел: 11,42,37,59,66
