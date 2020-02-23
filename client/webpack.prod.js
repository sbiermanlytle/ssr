const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var PACKAGE = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `[name]-${PACKAGE.version}.min.js`,
    path: path.resolve(__dirname, '../server/dist')
  }
});
