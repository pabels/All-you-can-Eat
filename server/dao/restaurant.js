var db = require('../util/mongodb').db;
//var col = db.bind('restaurant');

function create(restaurant, callback){
	this.insert (restaurant, callback);
}


/*col.bind({
	create: create

});
module.exports = col ;*/