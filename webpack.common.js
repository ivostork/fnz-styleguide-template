const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['web/*.*'], {root: path.resolve(__dirname , '..'), verbose: true }),
    new HtmlWebpackPlugin({  
      template: './src/pug/components/componentA.pug',
      filename: 'componentA.html',
      inject: false
    }),
    new HtmlWebpackPlugin({  
      template: './src/pug/components/componentB.pug',
      filename: 'componentB.html',
      inject: false
    })    
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './../web/')
  },
  module: {
    rules: [   
      {
        test: /\.pug$/,
        use: [      
          {
            loader:'pug-loader'       
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'[name].[hash].[ext]',
              publicPath:''
            }
          }
        ],
      }
    ]
  }
};
