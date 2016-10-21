let numbers = [13, 24, 522, 3.14, -7];
// Math.max принимает аргументы через запятую
Math.max(numbers);		// не сработает!


// Раньше делали так:
Math.max.apply(null, numbers);	// 522


// Новый оператор spread: ...
Math.max(...numbers);			// 522
