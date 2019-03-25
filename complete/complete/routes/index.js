`use strict`;
const express = require(`express`);
const newUser = require(`../model/newUser.js`);
const router = express.Router();
const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
const client = new pg.Client(connection);
client.connect();

router.get(`/`, function(req, res, next) {
  res.render(`index.html`);
});

router.post(`/`, function(req, res, next) {
  newUser(req,res);
});

module.exports = router;
