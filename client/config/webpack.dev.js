const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports =  merge(common, {
  entry: {
    main: ["babel-runtime/regenerator",
      "webpack-hot-middleware/client?reload=true"]
  },
  mode: "development",
  devServer: {
    contentBase: "dist",
    overlay:true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

});
