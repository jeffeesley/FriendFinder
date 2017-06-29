
//Requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlroutes');
var apiRoutes = require('./app/routing/apiroutes');

//Create instance of express, set up port
var app = express();
var PORT = 3000;

//Some boilerplate nonsense
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.listen(PORT, function () {
  console.log('listening on PORT: ' + PORT);
});