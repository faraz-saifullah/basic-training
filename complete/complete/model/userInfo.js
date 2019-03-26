const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
pg.defaults.poolSize = 1;
const client = new pg.Client(connection);
client.connect();
const userInfo =  function (req,res) {
  if(!req.session.user) {
    return res.send(`Unauthorized`);
  } else {
    res.write(`User details\nName : ${req.session.user.firstname}\nEmail : ${req.session.user.email}\nPhone : ${req.session.user.phone}\n`);
    // res.setHeader(`Content-Type`, `text`);
    let Query = `select * from orderlogs where userid = ${req.session.user.userid}`;
    client.query(Query, function(err, result0) {
      if(result0 != undefined) {

        res.write(`All the orders by ${req.session.user.firstname}:\n${JSON.stringify(result0.rows)}\nAll the items bought by ${req.session.user.firstname}:\n`);
        for(let i = 0; i < result0.rowCount; i++) {
          Query = `select * from cartdetails where orderid = ${result0.rows[i].orderid}`;
          client.query(Query, function(err, result1) {
            res.write(JSON.stringify(result1.rows));
            if(i == result0.rowCount - 1) {
              res.end();
            }
          });
        }
      }
    });
  }
}

module.exports = userInfo;
