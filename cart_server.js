var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cart');
require('./models/cart_model.js');
var app = express();
app.engine('.html',require('ejs').__express);
app.set('view engine','html');
app.use(bodyParser());
require('./cart_routes')(app);
app.listen(80);

