module.exports = function (app) {

	//var RestaurantR = require('../../model/restaurant.js');
	var restaurantManager = require('../manager/restaurant');
	var ensureAuth = require('../middleware/sec').ensureAuthenticated;
			var ensureOwner = require('../middleware/sec').ensureOwner;


	function addRestaurantR(req, res) {
		var rest={
			name:  req.body.name,
		 	paragraph: req.body.paragraph,
  			image:    req.body.image,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction,
  			favoriteCard: req.body.favoriteCard,
  			owner: req.user.id
		};

		restaurantManager.create(rest, function(err, restaurant) { 

				if(!err){
				    console.log('Restaurant created');
					res.send(restaurant);



                }else{
					console.log('Error' + err);
				    res.status(500).send('Error');
				}
        });

	}


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
	
	
	updateRestaurant = function(req, res){
		restaurantId = req.params.id ;
		restaurantManager.updateRestaurant(restaurantId , {name:  req.body.name,
			 paragraph: req.body.paragraph,
 			 image:   req.body.image,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction,
  			favoriteCard: req.body.favoriteCard},
  			function(err) { 
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
	app.post('/restaurants', ensureAuth, addRestaurantR);
	app.put('/restaurants/:id', ensureAuth, updateRestaurant);
	app.delete('/restaurants/:id', deleteRestaurant);

};