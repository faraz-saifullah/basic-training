const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
const client = new pg.Client(connection);
client.connect();
const newUser =  function (req,res) {
  let userData = req.body;
  let firstname = userData.name;
  let username = userData.usernameSignup;
  let email = userData.email;
  let password = userData.passwordSignup;
  let phone = Number(userData.phone);
  client.query(`INSERT INTO userData (firstname, username, email, password, phone) VALUES ( '${firstname}', '${username}', '${email}', '${password}', ${phone});`);
  res.redirect(`/`);
}

module.exports = newUser;
