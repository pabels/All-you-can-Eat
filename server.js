var express = require('express');
var app = express();
var debug = require('debug')('all-you-can-eat');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var passport = require('passport');

app.configure(function(){
	app.use(express.bodyParser()); // modulos de express para poder usar los metodos de http
	app.use(express.methodOverride());
	app.use(app.router);

});
 app.get('/', function(req, res, next){
 	res.send('holaa');
 });

app.listen(3000);
console.log('servidor express listening in port 5000');