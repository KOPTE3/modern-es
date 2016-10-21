// метод fetch возвращает промис
let promise = fetch(`/logo.png`);
promise
	.then(function (response) {
		console.log(`Промис без ошибок`);
		console.log(`${response.status}`);
	})
	.catch(function (err) {
		console.log(`Ошибка в промисе`);
		console.error(err);
	});




