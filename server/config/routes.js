var wishlists = require('./../controllers/wishlists.js');
var users = require('./../controllers/users.js');

module.exports = (function(app){
	app.get('/dashboard', function(req, res){
		users.index(req, res);
	});

	app.post('/users', function(req, res){
		users.create(req, res);
	});

	app.get('/users/:id', function(req, res){
		users.show(req, res);
	});

	app.get('/buckets', function(req, res){
		wishlists.index(req, res);
	});

	app.post('/buckets', function(req, res){
		wishlists.create(req, res);
	});
})