const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanPlugin = new CleanWebpackPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: false,
  template: "./src/templates/index.ejs",
  templateParameters: { test: 'data' },
  minify: false
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    cleanPlugin,
    htmlPlugin
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env')
            ]
          }
        }
      }
    ]
  }
};
