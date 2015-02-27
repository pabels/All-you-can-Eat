var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var RestaurantR = new Schema({
  name:      {type : String},
  paragraph: {type: String},
  image:    {type: String},
  type:     {type: String },
  menu:      {type: String },
  direction: {type: String },
  favoriteCard: {type: Boolean },
  owner : {type: String},
  picture : {type: String},
  comments: {type: []}
 
});

var RestaurantF = new Schema({
  name:      {type : String},
  paragraph: {type: String},
  image:    {type: String},
  type:     {type: String },
  menu:      {type: String },
  direction: {type: String },
  favoriteCard: {type: Boolean },
  owner : {type: String},
  picture : {type: String},
  comments: {type: []},

  ownerFavorite: {type: String}
 
});

module.exports = {
	resraurantr: mongoose.model('RestaurantR', RestaurantR),
	resraurantf: mongoose.model('RestaurantF', RestaurantF)
};