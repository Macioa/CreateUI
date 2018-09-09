const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          },
        ]
      },
      {
        test: /\.css$/,
        //fallback: 'style-loader',
        use: ExtractTextPlugin.extract(
          {
             use: ['style-loader','css-loader']
          })
          // {loader:"style-loader"},           
          // {
          //   loader: "css-loader",
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   localIdentName: "[name]_[local]_[hash:base64]",
            //   sourceMap: true,
            //   minimize: true
            // }
        //   }
        // ]
      },
      {
        test: /\.scss$/,
        use: ['sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};