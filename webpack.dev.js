const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins:[
    new HtmlWebpackPlugin({  
      template: './src/index.html',      
      inject: true
    }),    
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../web/')
  },
  devtool: 'source-map',
  devServer: {
    port: 9000,
    hot: true,
    compress:true,
    host:"0.0.0.0"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
