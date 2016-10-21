// было
fetch('/api/user/123')
	.then(function (response) {
		this.status = response.status;
	}.bind(this));

// стало
fetch('/api/user/123')
	.then(response=> {
		this.status = response.status;
	});
