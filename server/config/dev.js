module.exports = {
	server: {
		ip: process.env.IP || '0.0.0.0',
		port: process.env.PORT || 8080
	},
	db: {
		conn: 'mongodb://0.0.0.0:27017/restaurants'
	},
	ids: {
		google: {
			client_id:'214016590977-v9e2ck9lf5e4c60ojb7l8v363uq6ohti.apps.googleusercontent.com',
			client_secret: 'z6LKultr_yckka_uhI5qt_1U',
			callback_url: 'http://localhost:8080/oauth2callback',
			scopes: ['https://www.googleapis.com/auth/userinfo.profile']
		}
	},
	jwtSecret: 'ale esta aprendiendo a boxear'
};