var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var nconf    = require('nconf');
var app      = express();
var template = require('./templates/index.jade');
var metadata   = require('./webtask.json');

app.use(auth0({
  clientName: 'Auth0 Extension with React',
  scopes: 'read:connections'
}));

app.get('/', function (req, res) {
  var config = {
    AUTH0_DOMAIN: nconf.get("AUTH0_DOMAIN"),
    EXTENSION_SECRET: nconf.get("EXTENSION_SECRET"),
    WT_URL: nconf.get("WT_URL")
  };
  res.header("Content-Type", 'text/html');
  res.status(200).send(template({
    baseUrl: res.locals.baseUrl,
    windowConfig: JSON.stringify(config)
  }));
});

// This endpoint would be called by webtask-gallery to dicover your metadata
app.get('/meta', function (req, res) {
  res.status(200).send(metadata);
});

module.exports = app;
