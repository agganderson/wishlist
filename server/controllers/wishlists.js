var mongoose = require('mongoose');
var Wishlist = mongoose.model('Wishlist');
module.exports = (function(){
	return {
		index: function(req, res){
			Wishlist.find({}, function(err, results){
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
			var newWishlist = new Wishlist({title: req.body.title, description: req.body.title, user_name: req.body.user_name});
			newWishlist.save(function(err, results){
				if(err){
					console.log('Did not save, check your code loser :P', results);
				}
				else {
					console.log('User is saved!');
					res.json(results);
				}
			});
		}
	}
})();