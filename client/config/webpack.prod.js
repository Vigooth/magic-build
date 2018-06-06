const path = require("path");
const webpack = require("webpack");
const HTLMWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  entry: {
    main: ['babel-polyfill','./src/main.js']
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [

          {
            loader: "html-loader",
            options: {
              attrs:["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[content-hash].css"
    }),
    new HTLMWebpackPlugin({
      template: "./src/index.html"
    })],

};
