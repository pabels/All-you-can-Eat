
var RestaurantR = require('../../model/restaurant.js').resraurantr;
var RestaurantF = require('../../model/restaurant.js').resraurantf;

function createFavorite(restaurant, callback) {
	var restaurantInstance =  new RestaurantF(restaurant);
	restaurantInstance.save (callback);
}


function create(restaurant, callback) {
	var restaurantInstance =  new RestaurantR(restaurant);
	restaurantInstance.save (callback);
}

function findAll(callback) {
	RestaurantR.find({}, callback);
}

function findFavorites(ownerFavorite, callback) {
	RestaurantF.where('ownerFavorite').in([ownerFavorite]).exec(callback);
	
}

function findById(restaurantId, callback){
	RestaurantR.findById(restaurantId, callback);
}

////////////////////////////aqui ver el buscar de la documentacion de monguse
function findName(restaurantName, callback){
	RestaurantR.find(restaurantName, callback);
}

function updateRestaurant(restaurantId, newRestaurant, callback){
	RestaurantR.update({_id: restaurantId},{$set:{name: newRestaurant.name,paragraph: newRestaurant.paragraph,
 			 images:   newRestaurant.images, type: newRestaurant.type,
		menu: newRestaurant.menu, direction: newRestaurant.direction, favoriteCard: newRestaurant.favoriteCard,comments :newRestaurant.comments }}, callback);
}

function deleteRestaurant(restaurantId,callback) {
	RestaurantR.find({_id: restaurantId}).remove(callback);
}

function deleteRestaurantF(restaurantId,callback) {
	RestaurantF.find({_id: restaurantId}).remove(callback);
}

function searchRestaurants(search, callback) {
	console.log("")

	RestaurantR.find({name: new RegExp('^'+search+'+?')},callback);
  
}

module.exports = {
	createFavorite: createFavorite,
	create: create,
	findFavorites: findFavorites,
	findAll: findAll,
	findById: findById,
	updateRestaurant: updateRestaurant,
	deleteRestaurant: deleteRestaurant,
	deleteRestaurantF: deleteRestaurantF,
	searchRestaurants : searchRestaurants

};
