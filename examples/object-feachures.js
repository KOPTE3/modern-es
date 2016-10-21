let login = 'user', password = 'qwerty123';

let user = {
	login,
	password,
	[`secret-${password}`]: 42,
	hello() {
		console.log(`Hello, ${this.login}`);
		console.log(this[`secret-${this.password}`]);
	}
};

user.hello();		// Hello, user \n 42
