const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const templateParameters = { test: 'hello' }

const cleanPlugin = new CleanWebpackPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: false,
  template: "./src/templates/index.ejs-loader.ejs",
  templateParameters,
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
        test: /\.ejs$/, 
        exclude: /node_modules/,
        use: {
          loader: 'ejs-webpack-loader',
          options: {
            data: templateParameters
          }
        }
      }, {
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
