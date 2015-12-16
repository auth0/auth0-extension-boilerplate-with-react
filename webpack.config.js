var fs = require('fs');

function readExternals() {
  // We need to exclude node_modules, otherwise webpack will bundle them
  var nodeModules = {};

  fs.readdirSync('./node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      // if (mod.indexOf('auth0') <0) {
        nodeModules[mod] = 'commonjs ' + mod;
      // }
    });

  return nodeModules;
}

module.exports = {
  target:      'node',
  node:        {
    __dirname:  false,
    __filename: true
  },
  entry: './index',
  externals: readExternals(),
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: require.resolve('jade-loader') }
    ]
  }
};
