var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var nameValidator = [
	validate({
		validator: 'isLength',
		arguments: [2, 50],
		message: 'Name needs to be at least 2 characters'
	})
];

var UserSchema = new mongoose.Schema({
	name: String, 
});

mongoose.model('User', UserSchema);