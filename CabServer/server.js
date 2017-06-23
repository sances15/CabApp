var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dbHelper = require('./config/dbHelper')

//connect to Mongo
dbHelper.openCon();

//middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var routes = require('./config/routes/routes')(app);

//server listning
var port = 8000;
app.listen(port);
console.log("We are live on " + port );