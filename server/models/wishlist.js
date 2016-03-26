var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var titleValidator = [
	validate({
		validator: 'isLength',
		arguments: [5, 50],
		message: 'Title needs to be at least 5 characters'
	})
];

var description = [
	validate({
		validator: 'isLength',
		arguments: [10, 200],
		message: 'Description needs to be at least 10 characters'
	})
];

var WishlistSchema = new mongoose.Schema({
	title: String,
	description: String,
	user_name: String
});

mongoose.model('Wishlist', WishlistSchema);
