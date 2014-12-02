
var express = require("express"),
    app = express(),
    path = require('path');
    bodyParser  = require("body-parser"), // Parsear con JSON. Poder analizar el cuerpo de la peticion, si no lo tienes solo podras analizar la cabecera 
    mongoose = require("mongoose");
    fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));


app.get('/', function (req, res) {
   res.send ("Go to start");
}); 

routes = require("./routes/restaurants")(app);

mongoose.connect('mongodb://localhost/restaurants', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database');
    }
});



app.listen(8080);

  console.log("Node server running on http://localhost:8080");

module.exports = app;