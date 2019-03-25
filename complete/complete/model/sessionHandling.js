const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
const client = new pg.Client(connection);
client.connect();
const sessionHandling =  function (req,res) {
  res.setHeader(`Content-Type`, `text/html`);
  let userData = req.query;
  let id = userData.usernameLogin;
  let password = userData.passwordLogin;
  let Query = `select * from userData where firstname = '${id}' and password ='${password}';`;
  console.log(Query);
  client.query(Query,function(err,result) {
    if(result.rowCount == 0) {
      res.send(`Invalid Credentials`);
    } else {
      res.render(`order.html`);
      req.session.user = result.rows[0];
    }
  });
}

module.exports = sessionHandling;
