let [,name, fam] = `Lord Jhon Snow`.split(` `);
console.log(name);	// Jhon

[name = `Иван`, fam = `Иванов`] = [`Пётр`];
console.log(name, fam);	// Пётр Иванов


let {username, age} = {username: `Jhon Snow`, age: 20, title: `lord`};
console.log(`${username}, ${age} лет`);		// Jhon Show, 20 лет

let opts = {
	height: 120,
	width: 560,
	attrs: {classname: `button__text`}
};

let {width: w = 600, attrs: {classname}} = opts;
console.log(w, classname);					// 560 button__text
