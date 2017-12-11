var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// connect to mongoDB
require('dotenv').config();
require('./config/database');

// require our routes
// var products = require('./routes/product');

app.use(logger('dev'));

// configure favicon & middlewares
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./config/auth'))

// API routes here
app.use('/api/users', require('./routes/api/users'));
app.use('/api/scores', require('./routes/api/scores'));
// app.use('/', require('./routes/question'));

// "catch all" routes for SPA client-side routing
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});