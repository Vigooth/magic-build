const path = require("path");
const HTLMWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: ['babel-polyfill','./src/main.js']
  },
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
            loader: "style-loader"
          },
          {
            loader: "css-loader"
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
        test: /\.(jpg|gif|png|svg|ico)$/,
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
    new HTLMWebpackPlugin({
      template: "./src/index.html"
    })],

};
