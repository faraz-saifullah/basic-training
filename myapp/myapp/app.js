var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('html',engines.mustache);
app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret :"kdjjgoiyoncsjdguymf",
  resave : false,
  saveUninitialized : true
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
