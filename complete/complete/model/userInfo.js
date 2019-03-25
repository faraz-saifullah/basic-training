const userInfo =  function (req,res) {
  if(!req.session.user) {
    return res.send(`Unauthorized`);
  } else {
    return res.json(req.session.user);
  }
}

module.exports = userInfo;
