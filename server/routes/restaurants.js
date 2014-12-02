module.exports = function (app) {

	//var RestaurantR = require('../../model/restaurant.js');
	var restaurantManager = require('../manager/restaurant');

	//post insert a new RestaurantR in the db

	function addRestaurantR(req, res) {

		restaurantManager.create({
		 	name:  req.body.name,
		 	paragraph: req.body.paragraph,
  			images:    req.body.images,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction
		 }, function(err) { 
				if(!err){
				    console.log('Restaurant created');
					res.send('Restaurant created');

                }else{
					console.log('Error' + err);
				    res.status(500).send('Error');
				}
        });
	}

	// get return all restaurants in the db

	function findAllRestaurantRs (req, res){
		restaurantManager.findAll(function(err, restaurants ) { 
				if(!err){
					console.log('Restaurants retrieved');
					res.send(restaurants);
				}else{
                    console.log('Error' + err);
				    res.status(500).send('Error');
				}
        });
    }


	/*/	RestaurantR.find (function(err, restaurants){
			if(!err){
				res.send(restaurants);
			}else{
					console.log('Error' + err);
			 		res.status(500).send('Error');
			}
		});
	};
	*/
	// get return a restaurant with specified id
	//req.params.id is the parameter that the browser is going to send

	function findById(req, res){
		var restaurantId = req.params.id;
		restaurantManager.findById(restaurantId,function(err, restaurant){
			if(!err){
					console.log('Getting restaurant by id');
					res.send(restaurant);
				}else{
                    console.log('Error' + err);
				    res.status(500).send('Error');
				}

		});

	}
	/*findById = function (req, res){
		RestaurantR.findById (req.params.id, function(err, restaurant){
			if(!err){
				res.send(restaurant);
			}else{
				console.log('Error:' + err);
			}
		});
	};
*/
	
	//put  update a register already exists
	/*function updateRestaurant(req, res){
		var restaurantId = req.params.id;
		restaurantManager.findById(restaurantId, function(err, restaurant){
		   { restaurant.name = req.body.name,
			restaurant.type = req.body.type;
			restaurant.menu = req.body.menu;
			restaurant.direction = req.body.direction;
			

		});
	}*/
	updateRestaurant = function(req, res){
		restaurantId = req.params.id ;
		restaurantManager.updateRestaurant(restaurantId , {name:  req.body.name,
			 paragraph: req.body.paragraph,
 			 images:   req.body.images,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction},function(err) { 
				if(!err){
				    console.log('Updating restaurant');
					res.send('Restaurant updated');

                }else{
					console.log('Error' + err);
				    res.status(500).send('Error');
				}
        });
	}


	deleteRestaurant = function(req, res){
		restaurantId = req.params.id ;
		restaurantManager.deleteRestaurant(restaurantId,function(err, restaurant){
			if(!err){
					console.log('Deleting restaurant by id');
					res.send(restaurant);
					console.log('Restaurant deleted');
				}else{
                    console.log('Error' + err);
				    res.status(500).send('Error');
				}

		});
	}

    //rutes
	app.get('/restaurants', findAllRestaurantRs);
	app.get('/restaurants/:id', findById);
	app.post('/restaurants', addRestaurantR);
	app.put('/restaurants/:id', updateRestaurant);
	app.delete('/restaurants/:id', deleteRestaurant);


};