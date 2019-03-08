`use strict`;
const express = require(`express`);
const controller = require(`../controller/controller.js`);
const router = express.Router();

router.get(`/`, function(req, res, next) {
  res.render(`index.html`);
});

router.post(`/`, function(req, res, next) {
  controller(req.body.items,res);
});

module.exports = router;
