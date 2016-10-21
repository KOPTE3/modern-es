// оборачивание асинхронного функционала в обёртку, возвращающую промис
function wait() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('OK');
		}, 2000);
	});
}


wait()
	.then(() => console.log('Прошло 2 сек'));
