var config = require('./config');
var mongo = require('mongoose');

//var db = mongo.db(config.db.conn, {native_parser:true});
var opts = { db: { native_parser: true }},
 	db = mongo.createConnection('mongodb://127.0.0.1:27017/restaurants', opts);

module.exports = {
	db: db,
};