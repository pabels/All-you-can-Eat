var express = require('express');
var app = express();
var debug = require('debug')('all-you-can-eat');

app.configure(function(){
	app.use(express.bodyParser()); // modulos de express para poder usar los metodos de http
	app.use(express.methodOverride());
	app.use(app.router);

});
 app.get('/', function(req, res){
 	res.send('holaa');
 });

app.listen(5000);
console.log('servidor express listening in port 5000');