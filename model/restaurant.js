var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var Images = new Schema({
    
    url: { type: String, required: true }
});

var RestaurantR = new Schema({
  name:      {type : String},
  paragraph: {type: String},
  images:    [Images],
  type:      { type: String, enum: 
  	       ['Italian', 'Chinese', 'Mexican', 'American', 'Japanese'] },
  menu:      { type: String },
  direction: { type: String } 
});

var Images = new Schema({
    
    url: { type: String, required: true }
});
module.exports = mongoose.model('RestaurantR', RestaurantR);