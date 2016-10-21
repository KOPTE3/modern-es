class User {
	constructor(name) {
		this.name = name;
	}
	hello() {
		console.log(`Hello, ${this.name}`);
	}
}

class Admin extends User {
	constructor(name, age) {
		super(name);
		this.Age = age;
	}

	set Age(years) {
		console.log(`${years} лет`);
	}
}

let admin = new Admin(`Jnoh`, 19);	// 19 лет
admin.hello();				// Hello, Jhon
admin.Age = 25;				// 25 лет
