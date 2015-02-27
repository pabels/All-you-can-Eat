
var express = require("express"),
    app = express(),
    path = require('path'),
    bodyParser  = require("body-parser"), // Parsear con JSON. Poder analizar el cuerpo de la peticion, si no lo tienes solo podras analizar la cabecera 
    mongoose = require("mongoose");
    fs = require('fs'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
     passport = require('passport'),

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(passport.initialize());


app.get('/', function (req, res) {
   res.send ("Go to start");
}); 

routes = require("./routes/restaurants")(app),
routes = require("./routes/auth")(app),
routes = require("./routes/user")(app);


mongoose.connect('mongodb://localhost/restaurants', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database');
    }
});


io.on('restaurant-created', function(){
  socket.on('restaurant-created', function(restaurant){
    io.emit('restaurant-created', restaurant);

  });
});


app.listen(8080);

  console.log("Node server running on http://localhost:8080");

module.exports = app;