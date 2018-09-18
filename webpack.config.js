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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,  
        use: [
          {
            loader: 'file-loader',
            options: { 
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
            } 
          }
        ]
      }
    ]
  },
  devServer: {
    port: process.env.PORT||8080,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/assets/components'),
      Pages: path.resolve(__dirname, 'src/assets/pages'),
      Actions: path.resolve(__dirname, 'src/assets/actions'),
      Stylesheets: path.resolve(__dirname, 'src/assets/stylesheets'),
      Images: path.resolve(__dirname, 'src/assets/images')
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