
var express = require("express"),
    app = express(),
    path = require("path"),
    fs = require("fs"),
    bodyParser  = require("body-parser"), // poder analizar el cuerpo de la peticion, si no lo tienes solo podras analizar la cabecera 
    methodOverride = require("method-override");
   
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/../start')));//sirve estaticos (css, htmll....)
//var router = express.Router();

/*router.get('/', function(req, res) {
   res.send("Hello World!");
});*/

var basePath = path.join(__dirname, '/routes/'); //leo el directorio express 
fs.readdirSync(basePath).forEach(function(filename) {
	var basePathService = '/' + filename.replace(/\.js$/, '');
	var serviceDefinition = basePath + filename;
	app.use(basePathService, require(serviceDefinition));
}); 


//var ip = config.server.ip; poner una ip
//var port = config.server.port;

//app.use(router);

app.listen(3000, function() { //callback
  console.log("Node server running on http://localhost:3000");
});


module.exports = app;