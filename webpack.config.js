const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer: {
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(__dirname, "public/"), 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};