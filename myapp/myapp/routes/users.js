var express = require('express');
var router = express.Router();
var Client = require('../app.js');
var pg = require('pg');
var connection = "postgres://postgres:rails@localhost:5432/test_my_api";
var client = new pg.Client(connection);
client.connect();
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  let userData = req.params;
  console.log(userData);
  let id = userData.usernameLogin;
  let password = userData.passwordLogin;
  let Query = 'select * from userData where firstname = \''+id+'\' and password =\''+password+'\';';
  client.query(Query,function(err,result) {
    if(result == undefined) {
      res.write('Invalid Credentials');
    } else {
      res.render('info.html');
      req.session.user = result.rows[0];
    }
  });
});
router.post('/', function(req, res, next) {
  let userData = req.body;
  let firstname = userData.name;
  let lastname = userData.usernameSignup;
  let email = userData.email;
  let password = userData.passwordSignup;
  let phone = Number(userData.phone);
  client.query('INSERT INTO userData (firstname, lastname, email, password, phone) VALUES ( $1, $2, $3, $4, $5)',[firstname, lastname, email, password, phone]);
  console.log(userData);
  res.render('index.html');
});
router.get('/info', function(req, res, next) {
  if(!req.session.user) {
    return res.send("Unauthorized");
  } else {
    return res.json(req.session.user);
  }
});

module.exports = router;
