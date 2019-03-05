var createError = require('http-errors');
var express = require('express');
var path = require('path');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('html',engines.mustache);
app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

module.exports = app;