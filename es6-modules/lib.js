'use strict';

const admin = {
	username: 'Jhon Snow',
	password: 'passw0rd'
};

const hello = function (user) {
	console.log(`Hello, ${user.username}`);
};

export {admin, hello};
