module.exports = function (app) {

	
	var restaurantManager = require('../manager/restaurant');
	var ensureAuth = require('../middleware/sec').ensureAuthenticated;
	var ensureOwner = require('../middleware/sec').ensureOwner;


function addRestaurantF(req, res) {
		var rest={
			name:  req.body.name,
		 	paragraph: req.body.paragraph,
  			image:    req.body.image,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction,
  			favoriteCard: req.body.favoriteCard,
  			owner: req.body.id ,
  			picture : req.body.picture ,
  			comments : [],
  			ownerFavorite: req.body.ownerFavorite
  	
		};

		restaurantManager.createFavorite(rest, function(err, data) { 

			if(!err){
			    console.log('RestaurantF created');
				res.send(data);
            }else{
				console.log('Error' + err);
			    res.status(500).send('Error');
			}
        });

	}

	function addRestaurantR(req, res) {
		var rest={
			name:  req.body.name,
		 	paragraph: req.body.paragraph,
  			image:    req.body.image,
  			type:  req.body.type,
  			menu:  req.body.menu,
  			direction: req.body.direction,
  			favoriteCard: req.body.favoriteCard,
  			owner: req.user.id,
  			picture : req.user._json.picture ,
  			comments : []
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

function findFavorites(req, res){

		restaurantManager.findFavorites(req.params.id, function(err, restaurants ) { 
			if(!err){
				console.log('Favorite restaurants  retrieved '+ req.params.id);
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
	///////////////////////nueva funcion/////////////////////////////////////////

	function findByName(req, res){
		var restaurantName = req.params.name;
		restaurantManager.findName(restaurantId,function(err, restaurant){
			if(!err){
					console.log('Getting restaurants by name');
					res.send(restaurant);
				}else{
                    console.log('Error' + err);
				    res.status(500).send('Error');
				}

		});

	}
	
	
	updateRestaurant = function(req, res){
		restaurantId = req.params.id ;
		
		restaurantManager.updateRestaurant(restaurantId ,{name:  req.body.name,
														 paragraph: req.body.paragraph,
											 			 image:   req.body.image,
											  			type:  req.body.type,
											  			menu:  req.body.menu,
											  			direction: req.body.direction,
											  			owner: req.body.owner,
											  			favoriteCard: req.body.favoriteCard,
											  			comments : req.body.comments},
  			
  			function(err,restaurant) { 
				if(!err){
				    console.log('Updating restaurant');
					res.send(restaurant);

                }else{
					console.log('Error' + err);
				    res.status(500).send('Error');
				}
        });
	}


	deleteRestaurant = function(req, res){
		//el problema esque el ide se pasa por params
		restaurantId = req.params.id ;
		restaurantManager.deleteRestaurant(restaurantId,function(err,data){
			if(!err){
					console.log('Deleting restaurant by id');
					res.send(data);
					console.log('Restaurant deleted');
				}else{
                    console.log('Error' + err);
				    res.status(500).send('Error');
				}

		});
	}

	deleteRestaurantF = function(req, res){
		//el problema esque el ide se pasa por params
		restaurantId = req.params.id ;
		restaurantManager.deleteRestaurantF(restaurantId,function(err,data){
			if(!err){
				console.log('Deleting favorite restaurant by id');
				res.send(data);
				console.log('Restaurant favorite deleted');
			}else{
                console.log('Error' + err);
			    res.status(500).send('Error');
			}
		});
	}
	function searchRestaurants(req, res){
		

		restaurantManager.searchRestaurants(req.params.search, function(err, restaurants ) { 

			if(!err){
				console.log('Favorite restaurants  retrieved '+ req.params.search);
				res.send(restaurants);
			}else{
                console.log('Error' + err);
			    res.status(500).send('Error');
			}
        });
	}

    //rutes

    app.post('/restaurants/favorites', ensureAuth , addRestaurantF);
    app.get('/restaurants/favorites/:id',ensureAuth, findFavorites);
	app.get('/restaurants', findAllRestaurantRs);
	app.get('/restaurants/:id', findById);
	app.post('/restaurants', ensureAuth, addRestaurantR);
	app.put('/restaurants/:id', ensureAuth ,updateRestaurant);
	app.delete('/restaurants/:id',ensureAuth ,ensureOwner , deleteRestaurant);
	app.delete('/restaurants/favorites/:id',ensureAuth, deleteRestaurantF);
	
	//nuevo ruter para buscar por una exprecion regular
		app.get('/restaurants/search/:search', searchRestaurants);
		//PREGUNTAR A JAVIER COMO ES POIBLE Q DESPUES DE HACER UNA PETICION AJAX POR GET BY ALGO SEPA QUE ESE ALG ES UN ID Y NO UN NANR

};