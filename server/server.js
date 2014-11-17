
var express = require("express"),
    app = express(),
   // path = require("path"),
 //   fs = require("fs"),
    bodyParser  = require("body-parser"), // Parsear con JSON. Poder analizar el cuerpo de la peticion, si no lo tienes solo podras analizar la cabecera 
   // methodOverride = require("method-override"); //implementar metodos http
    mongoose = require("mongoose");
   // http     = require("http"),
   // server   = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(methodOverride());
//app.use(express.static(path.join(__dirname, '/../start')));
//var basePath = path.join(__dirname, '/routes/');

/*fs.readdirSync(basePath).forEach(function(filename) {
	var basePathService = '/' + filename.replace(/\.js$/, '');
	var serviceDefinition = basePath + filename;
	app.use(basePathService, require(serviceDefinition));
}); */


app.get('/', function(req, res) {
   res.send("Hello World!");
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