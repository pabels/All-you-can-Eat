var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var RestaurantR = new Schema({
  name:      {type : String},
  type:      { type: String, enum: 
  	       ['Italian', 'Chinese', 'Mexican', 'American', 'Japanese'] },
  menu:      { type: String },
  direction: { type: String } 
});

module.exports = mongoose.model('RestaurantR', RestaurantR);