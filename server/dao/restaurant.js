
var RestaurantR = require('../../model/restaurant.js');

function create(restaurant, callback) {
	var restaurantInstance =  new RestaurantR(restaurant);
	restaurantInstance.save (callback);
}

function findAll(callback) {
	RestaurantR.find({}, callback);
}

function findById(restaurantId, callback){
	RestaurantR.findById(restaurantId, callback);
}

function updateRestaurant(restaurantId, newRestaurant, callback){
	RestaurantR.update({_id: restaurantId},{$set:{name: newRestaurant.name,paragraph: newRestaurant.paragraph,
 			 images:   newRestaurant.images, type: newRestaurant.type,
		menu: newRestaurant.menu, direction: newRestaurant.direction, favoriteCard: newRestaurant.favoriteCard}}, callback);
}

function deleteRestaurant(restaurantId,callback) {
	RestaurantR.find({_id: restaurantId}).remove(callback);
}


module.exports = {
	create: create,
	findAll: findAll,
	findById: findById,
	updateRestaurant: updateRestaurant,
	deleteRestaurant: deleteRestaurant
};
