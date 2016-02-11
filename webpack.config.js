var fs      = require('fs');
var webpack = require('webpack');

function readExternals() {
  // We need to exclude node_modules, otherwise webpack will bundle them
  var nodeModules = {};

  fs.readdirSync('./node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

  return nodeModules;
}

module.exports = {
  target:      'node',
  node:        {
    __dirname:  false,
    __filename: true
  },
  entry: './server',
  externals: readExternals(),
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: require.resolve('jade-loader') }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('module.exports = ', {raw: true, entryOnly: false})
  ]
};
