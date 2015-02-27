var daoRestaurant = require('../dao/restaurant');



function createFavorite(restaurant, callback) {
	daoRestaurant.createFavorite(restaurant, callback);
}


function create(restaurant, callback) {
	daoRestaurant.create(restaurant, callback);
}

function findAll(callback) {
	daoRestaurant.findAll(callback);

}

function findFavorites(owner, callback) {
	daoRestaurant.findFavorites(owner, callback);

}

function findById(restaurantId, callback){
	daoRestaurant.findById(restaurantId, callback);
}
/////////////////////nueva funcion////////////////////////7
function findName(restaurantName, callback){
	daoRestaurant.findName(restaurantName, callback);
}


function updateRestaurant(restaurantId, newRestaurant, callback){
	

	daoRestaurant.updateRestaurant(restaurantId, newRestaurant, callback);
}

function deleteRestaurant(restaurantId, callback){
	daoRestaurant.deleteRestaurant(restaurantId, callback);
}

function deleteRestaurantF(restaurantId, callback){
	daoRestaurant.deleteRestaurantF(restaurantId, callback);
}

module.exports = {
	createFavorite: createFavorite,
	create: create,
	findFavorites: findFavorites,
	findAll: findAll,
	findById: findById,
	updateRestaurant: updateRestaurant,
	deleteRestaurant: deleteRestaurant,
	deleteRestaurantF: deleteRestaurantF
};