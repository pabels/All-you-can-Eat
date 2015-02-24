module.exports = function (app) {
	var ensureAuth = require('../middleware/sec').ensureAuthenticated;
console.log("***************")

	/* ROUTES */
	app.get('/profile', ensureAuth, getProfile);

	function getProfile(req, res){

		res.json(req.user);
	}
};