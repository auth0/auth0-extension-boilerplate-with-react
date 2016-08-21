var nconf = require('nconf');
var Webtask = require('webtask-tools');

var server = null;
const getServer = function(req, res){
  if (!server) {
    nconf.defaults({
      AUTH0_DOMAIN: req.webtaskContext.secrets.AUTH0_DOMAIN,
      EXTENSION_SECRET: req.webtaskContext.secrets.EXTENSION_SECRET,
      WT_URL: req.webtaskContext.secrets.WT_URL,
      NODE_ENV: 'development',
      HOSTING_ENV: 'webtask',
      CLIENT_VERSION: process.env.CLIENT_VERSION
    });

    // Start the server.
    server = require('./index.js');
  }
  return server(req, res);
};

module.exports = Webtask.fromExpress(function(req, res){return getServer(req, res)});
