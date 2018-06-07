const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//const isProd = process.env.NODE_ENV === "production";
module.exports =  merge(common, {
  mode: "production",
  plugins: [
    new OptimizeCssAssetPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[content-hash].css"
    }),
    new UglifyJsPlugin({
      sourceMap: true})
  ],


});
