var daoRestaurant = require('../dao/restaurant');
var RestaurantR = require('../../model/restaurant');


function createRestaurant(callback){
	 var restaurant = new RestaurantR({
		 	name:  req.body.name,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction
		 });
	 daoRestaurant.create(restaurant, callback);

}
