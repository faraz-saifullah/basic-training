`use strict`;
const createError = require(`http-errors`);
const express = require(`express`);
const path = require(`path`);
const engines = require(`consolidate`);
const bodyParser = require(`body-parser`);
const indexRouter = require(`./routes/index`);
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set(`views`, path.join(__dirname, `views`));
app.engine(`html`,engines.mustache);
app.set(`view engine`,`html`);
app.use(express.static(path.join(__dirname, `public`)));
app.use(`/`, indexRouter);

module.exports = app;
