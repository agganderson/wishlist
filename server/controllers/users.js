var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, results){
				if(err){
					console.log('Idk where your people are', results);
				}
				else {
					// console.log('Here they are!', results);
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newUser = new User({name: req.body.name});
			newUser.save(function(err, results){
				if(err){
					console.log('Did not save, check your code loser :P', results);
				}
				else {
					console.log('User is saved!');
					res.json(results);
				}
			});
		},
		show: function(req, res){
			User.findOne({_id: req.params.id}, function(err, results){
				if(err){
					console.log('Could not find that user');
				}
				else {
					console.log('HAHA got em');
					res.json(results);
				}
			});
		}
	}
})();