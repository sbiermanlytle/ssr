const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ['**/*', '!server.js']
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  target: 'web',
  stats: true,
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    cleanPlugin,
    htmlPlugin
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [{
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
