const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

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
        test: /\.(s*)css$/,
        use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                },
                "css-loader"
              ]
      },
      {
        test: /\.scss$/,
        use: ['sass-loader']
      }
    ]
  },
  devServer: { //object
    port: process.env.PORT||8080,
    //content: './dist',
    // ...
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/assets/components'),
      Stylesheets: path.resolve(__dirname, 'src/assets/stylesheets')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./bundle.css",
      chunkFilename: "[id].css"
    })
  ]
};