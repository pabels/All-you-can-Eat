var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


var RestaurantR = new Schema({
  name:      {type : String},
  paragraph: {type: String},
  image:    {type: String},
  type:     {type: String, enum: ['Italian', 'Chinese', 'Mexican', 'American', 'Japanese'] },
  menu:      {type: String },
  direction: {type: String },
  favoriteCard: {type: Boolean }
});


module.exports = mongoose.model('RestaurantR', RestaurantR);