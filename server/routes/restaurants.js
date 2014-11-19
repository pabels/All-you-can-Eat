module.exports = function(app) {
	var restaurantManager = require('../manager/restaurant');
	//var RestaurantR = require('../../model/restaurant.js');

	// get return all restaurants in the db

	findAllRestaurantRs = function (req, res){
		RestaurantR.find (function(err, restaurants){
			if(!err){
				res.send(restaurants);
			}else{
				console.log('Error:' + err);
			}
		});
	};

	// get return a restaurant with specified id
	//req.params.id is the parameter that the browser is going to send

	findById = function (req, res){
		RestaurantR.findById (req.params.id, function(err, restaurant){
			if(!err){
				res.send(restaurant);
			}else{
				console.log('Error:' + err);
			}
		});
	};

	//post insert a new RestaurantR in the db

	addRestaurantR = function (req, res){

		restaurantManager.createRestaurant(function(err, result){
			res.json(result);
		});
		/* console.log('Post');
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

		 res.send(restaurant); */
	}

	//put  update a register already exists

	updateRestaurantR = function(req, res){
		RestaurantR.findById(req.params.id, function(err, restaurant){
		    restaurant.name = req.body.name,
			restaurant.type = req.body.type;
			restaurant.menu = req.body.menu;
			restaurant.direction = req.body.direction;

			restaurant.save(function(err){
				if(!err){
					console.log('restaurant updated');
		 		}else{
		 			console.log('Error' + err);
				}

			res.send(restaurant);
			});
		});
	}

	//delete a RestaurantR with specified id


	deleteRestaurantR = function(req, res){
		RestaurantR.findById(req.params.id, function (err, restaurant){
			restaurant.remove(function(err){
				if(!err){
					console.log('restaurant removed');
		 		}else{
		 			console.log('Error' + err);
				}
			});
		});

	}

	app.get('/restaurants', findAllRestaurantRs);
	app.get('/restaurants/:id', findById);
	app.post('/restaurants', addRestaurantR);
	app.put('/restaurants/:id', updateRestaurantR);
	app.delete('/restaurants/:id', deleteRestaurantR);

}