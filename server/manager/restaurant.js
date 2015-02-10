var daoRestaurant = require('../dao/restaurant');

//var RestaurantR = require('../../model/restaurant.js');


function create(restaurant, callback) {
	console.log(restaurant.owner+ ' OooOooOOOooooo0o0o');
	daoRestaurant.create(restaurant, callback);
}

function findAll(callback) {
	daoRestaurant.findAll(callback);

}

function findById(restaurantId, callback){
	daoRestaurant.findById(restaurantId, callback);
}


function updateRestaurant(restaurantId, newRestaurant, callback){
	daoRestaurant.updateRestaurant(restaurantId, newRestaurant, callback);
}

function deleteRestaurant(restaurantId, callback){
	daoRestaurant.deleteRestaurant(restaurantId, callback);
}

module.exports = {
	create: create,
	findAll: findAll,
	findById: findById,
	updateRestaurant: updateRestaurant,
	deleteRestaurant: deleteRestaurant
};