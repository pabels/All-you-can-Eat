var request = require('request');
var ensureAuth = require('../middleware/sec').ensureAuthenticated;


module.exports = function (app) {

	/* ROUTES */
	app.get('/profile', ensureAuth, getProfile);

	function getProfile(req, res){
		console.log(req.user);
		res.json(req.user);
		
	}
	
};