function f(callback) {
	callback();
}

let a = {
	func: function () {
		f(() => this.number++);
	},
	number: 5
};

a.func();
a.func();
console.log(a.number);

