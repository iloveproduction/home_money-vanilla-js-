const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { env } = require('process');

module.exports = function() {
  return {
    entry: './src/index.js',
    mode:'development',
    module:{
        rules:[
          {
              test:/\.sass$/,
              use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                "sass-loader"
              ],
          },
          {
            test: /\.(js)$/,
            use:['babel-loader']
          }
        ],
    },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
      }
      ),
      new MiniCssExtractPlugin(),
    ],
    devServer:{
      port:9000
    },
    devtool:'source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
};