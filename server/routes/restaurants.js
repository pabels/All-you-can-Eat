var express = require("express");
var router = express.Router();

var restaurants = {};
var numRests = 0;

 
router.post('/', createRestaurant);
router.put('/:restaurantId', updateRestaurant);
router.get('/:restaurantId', getRestaurant);
router.delete('/:restaurantId', delRestaurant);
router.get('/', getAll);


//params: 

router.param('restaurantId', checkRestaurantExists);

function createRestaurant(req, res){
	var restaurant = {
		id: numRests,
		name: req.body.name,
		type: req.body.type,
		menu: req.body.menu,
		direction: req.body.direction
	};
	restaurants[restaurant.id] = restaurant; //me creo un restaurante
	numRests++; // aumento el num de restau creados
	res.json(restaurant); // creo el obj y lo deevuelvo con json
}

function updateRestaurant(req, res){
	var newRestaurant = {
		id: req.params.restaurantId,
		name: req.body.name,
		type: req.body.type,
		menu: req.body.menu,
		direction: req.body.direction
	};
	restaurants[req.params.restaurantId] = newRestaurant;
	res.json(newRestaurant);
}

function delRestaurant(req, res){
	delete restaurants[req.params.restaurantId];
	res.send('restaurant' + req.params.restaurantId + 'has been removed');
}

function getRestaurant(req, res){
	res.json(restaurants[req.params.restaurantId]);
}

function getAll(req, res){
	res.json(restaurants);
}

function checkRestaurantExists(req , res, next, restaurantId){
	if(restaurants[restaurantId]){
		req.restaurant= restaurants[restaurantId];
		next();
	}else{
	next(new Error( restaurantId + 'not exists'));
}
}


module.exports = router;