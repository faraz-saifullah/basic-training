const express = require(`express`);
const router = express.Router();
const calculations = require(`../controller/calculations.js`);
const sessionHandling = require(`../model/sessionHandling.js`);
const userInfo = require(`../model/userInfo.js`);
const pg = require(`pg`);
const connection = `postgres://postgres:rails@localhost:5432/test_my_api`;
const client = new pg.Client(connection);
client.connect();
router.get(`/`, function(req, res, next) {
  sessionHandling(req,res);
});
router.get(`/info`, function(req, res, next) {
  userInfo(req,res);
});
router.get(`/logout`, function(req, res, next) {
  req.session.destroy();
  res.redirect(`/`);
});
router.post(`/`, function(req, res, next) {
  calculations(req.session.user, req.body.items, res);
});

module.exports = router;
