var jwt = require('jsonwebtoken');
var jwtSecret = require('../config/dev.js').jwtSecret;
var dao = require('../dao/restaurant');


function ensureAuthenticated(req, res, next) {


	var reqAuth = req.headers.authorization;

	if (!reqAuth) {
		console.log('No authorization header found');
		res.send(401); // Unauthorized
		return;
	}

	var token = reqAuth.replace(/^\s*Bearer\s*/, '');

	jwt.verify(token, jwtSecret, function(err, decode) {

		if (err) {
			console.log('Decode token error: ' + err);
			return res.send(500);
		}
		req.user = decode.profile;
		req.token = token;
		next(null);
	});

}


/**
 * Check if the user is the owner of the restaurant, in other case FORBIDDEN
 */
function ensureOwner(req, res, next) {
	console.log(req);
	var restaurantId = req.body._id;
	var userId = req.body.owner;
	
	if (!restaurantId && !userId) {
		console.log('ensureOwner Invalid[' + restaurantId + '] or userId[' + userId + ']');
		return res.status(500).send('Invalid user or restaurant');
	}

	dao.findById(restaurantId, function(err, restaurant) {
		if (err) {
			console.log('ensureOwner error: ' + err);
			return res.status(500).send('error');
		}
		
		if (!restaurant) {
  		console.log('invalid restaurant');
			return res.status(500).send('invalid restaurant');
		}
		
		if (!restaurant || restaurant.owner !== userId) {
			console.log('invalid owner restaurant[' + restaurant.owner + ' logged user[' + userId + ']');
			return res.status(500).send('invalid owner');
		}
		
		next(null);
	});
}


module = module.exports = {
	ensureAuthenticated: ensureAuthenticated,
	ensureOwner: ensureOwner
};
