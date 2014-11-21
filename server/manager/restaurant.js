var daoRestaurant = require('../dao/restaurant');
var RestaurantR = require('../../model/restaurant');


function createRestaurant(callback){
	 var restaurant = new RestaurantR({
		 	name:  'pepe',
  			type:  'Mexican',
  			menu:  'carne',
  			direction: 'madrid'
		 });
	 daoRestaurant.create(restaurant, callback);

}
module.exports = {
	createRestaurant: createRestaurant
};