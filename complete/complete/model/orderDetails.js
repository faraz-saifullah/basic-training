const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
pg.defaults.poolSize = 1;
const client = new pg.Client(connection);
client.connect();

exports.user = function (user) {
  client.query(`INSERT INTO orderlogs (userid,total,totaltax) VALUES ( ${user.userid},0,0);`);
}

exports.itemDetails = async function(name, category, imported, quantity, price, finalPrice, salesTax) {
  let orderId = await client.query(`select max(orderid) from orderlogs`);
  orderId = orderId.rows[0].max;
  let Query = `INSERT INTO cartdetails (orderid, item, category, imported, price, quantity, tax, cost) VALUES (${orderId}, '${name}', '${category}', ${imported}, ${price}, ${quantity}, ${salesTax}, ${finalPrice});`;
  client.query(Query,function(err, result) {
    Query = `update orderlogs set total = total + ${finalPrice}, totaltax = totaltax + ${salesTax} where orderid = ${orderId};`;
    console.log(Query);
    client.query(Query, function(err, result) {
      if(result) {
        console.log("");
      }
    });
  });
}

