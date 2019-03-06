var express = require('express');
var controller = require('../controller/controller.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res, next) {
  controller(req.body.items,res);
});

module.exports = router;
