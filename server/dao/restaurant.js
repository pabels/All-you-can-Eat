
var RestaurantR = require('../../model/restaurant.js');

function create(restaurant, callback) {
	var restaurantInstance =  new RestaurantR(restaurant);
	 restaurantInstance.save (callback);

		// res.send(restaurant); 
}

function findAll(callback) {
	RestaurantR.find({}, callback);


}

function findById(restaurantId, callback){
	RestaurantR.findById(restaurantId, callback);
}

function updateRestaurant(restaurantId, newRestaurant, callback){
	RestaurantR.update({_id: restaurantId},{$set:{name: newRestaurant.name, type: newRestaurant.type,
		menu: newRestaurant.menu, direction: newRestaurant.direction}}, callback);
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


/*
addRestaurantR = function (req, res){
		 console.log('Post');
		 console.log(req.body); // para ver el cuerpo de la peticion 

		 var restaurant = new RestaurantR({
		 	name:  req.body.name,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction
		 });

		 restaurant.save (function(err){ // save the object in the db
		 	if(!err){
				console.log('Restaurant created');
		 	}else{
		 		console.log('Error' + err);
		 	}
		 });

		 res.send(restaurant); 
	}*/