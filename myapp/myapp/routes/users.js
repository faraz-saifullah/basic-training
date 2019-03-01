var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = "postgres://postgres:rails@localhost:5432/test_my_api";
var client = new pg.Client(connection);
client.connect();

/* GET users listing. */
router.get('/:id/:password', function(req, res, next) {
  let id = parseInt(req.params.id);
  let password = parseInt(req.params.password);
  // console.log(id);
  // console.log(req.params.password);
  res.setHeader('Content-Type', 'text/html');
  client.query('select * from userData where userid = $1 and password = $2;',[id,password],function(err,result) {
    // console.log(typeof(result.rows[0]));
    if(result.rows[0] == undefined) {
      res.write('Invalid Credentials');
    } else {
      res.json(result.rows);
    }

    res.end();
  });
});

//api for signup of new user
router.post('/', function(req, res, next) {
  // console.log('Post req parameters',req.body.firstname);
  let userData = req.body;
  let firstname = userData.firstname;
  // console.log(typeof(firstname));
  let lastname = userData.lastname;
  // console.log(typeof(lastname));
  let email = userData.email;
  // console.log(typeof(email));
  let password = userData.password;
  // console.log(typeof(password));
  let phone = Number(userData.phone);
  // console.log(typeof(phone));
  client.query('INSERT INTO userData (firstname, lastname, email, password, phone) VALUES ( $1, $2, $3, $4, $5)',[firstname, lastname, email, password, phone]);
  res.send('Data written successfully!');
  res.end();
});

module.exports = router;
