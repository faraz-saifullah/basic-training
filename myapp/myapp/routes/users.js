const express = require(`express`);
const router = express.Router();
const Client = require(`../app.js`);
const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
const client = new pg.Client(connection);
client.connect();
router.get(`/`, function(req, res, next) {
  res.setHeader(`Content-Type`, `text/html`);
  let userData = req.query;
  let id = userData.usernameLogin;
  let password = userData.passwordLogin;
  let Query = `select * from userData where firstname = '${id}' and password ='${password}';`;
  client.query(Query,function(err,result) {
    if(result.rowCount == 0) {
      res.send(`Invalid Credentials`);
    } else {
      res.render(`info.html`);
      req.session.user = result.rows[0];
    }
  });
});
router.post(`/`, function(req, res, next) {
  let userData = req.body;
  let firstname = userData.name;
  let lastname = userData.usernameSignup;
  let email = userData.email;
  let password = userData.passwordSignup;
  let phone = Number(userData.phone);
  client.query(`INSERT INTO userData (firstname, lastname, email, password, phone) VALUES ( '${firstname}', '${lastname}', '${email}', '${password}', ${phone});`);
  res.redirect(`/`);
});
router.get(`/info`, function(req, res, next) {
  if(!req.session.user) {
    return res.send(`Unauthorized`);
  } else {
    return res.json(req.session.user);
  }
});
router.get(`/logout`, function(req, res, next) {
  req.session.destroy();
  res.redirect(`/`);
});

module.exports = router;
