var db = require('../util/mongodb').db;
var toObjectID = require('../util/mongodb').toObjectID;
var col = db.bind('restaurant');

function create(restaurant, callback){
	this.save (restaurant, callback);
}

