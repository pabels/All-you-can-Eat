

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('../config/dev.js').ids.google;
var jwtSecret = require('../config/dev.js').jwtSecret;
var request = require('request');
var jwt = require('jsonwebtoken');

module.exports = function (app) {

console.log("***************")

	/* ROUTES */
	app.get('/login', passportLogin());
	app.get('/oauth2callback', passportCallback(), oauth2Callback);
	app.post('/rt', refreshToken);
	/* END ROUTES */



function passportLogin() {
	return passport.authenticate('google', {
		session: false,
		scope: config.scopes,
		accessType: 'offline'});
}

function passportCallback() {
	return passport.authenticate('google', {session: false, failureRedirect: '/login'});
}

function oauth2Callback(req, res) {
	//debug('Received oauth2callback');
	var token = jwt.sign(req.user, jwtSecret);
	var url = 'start/redirecting.html#token=' + token;
	
	res.redirect(url);
}

function refreshToken(req, res) {
	var rt = req.query.rt;

	if (!rt) {
		throw new Error('No valid token found');
	} else {
		request(
						{
							url: 'https://accounts.google.com/o/oauth2/token',
							form: {
								client_id: config.client_id,
								client_secret: config.client_secret,
								grant_type: 'refresh_token',
								refresh_token: rt
							},
							method: 'POST',
							json: true
						},
		function(err, r, body) {

			if (err) {
				return res.status(500).send("Got error: " + e.message);
			}

			if (body.error) {
				return res.status(500).send(body.error + ": " + body.error_description);
			}

			res.json({access_token: body.access_token, refresh_token: rt});


		});
	}
}
//
//
// Register Google Strategy in Passport
//
passport.use(new GoogleStrategy({
	clientID: config.client_id,
	clientSecret: config.client_secret,
	callbackURL: config.callback_url
}, function(accessToken, refreshToken, profile, done) {
	//debug('passport use');
	console.log('New accessToken: ' + accessToken + ', refreshToken: ' + refreshToken + ', user: ' + profile.id);
	done(null, {accessToken: accessToken, refreshToken: refreshToken, profile: profile});
}
));
};







