const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { env } = require('process');

const isProd = env.production

module.exports = function(isProd) {
  return {
    entry: './src/index.js',
    mode:isProd?'production':'development',
    module:{
        rules:[
          {
              test:/\.css$/,
              use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
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
        template:'./src/index.html'
      }
      ),
      new MiniCssExtractPlugin(),
    ],
    devServer:{
      contentBase:'./dist',
      port:9000
    },
    devtool:isProd?false:'source-map',
    output: {
      filename: isProd?'bundle.[hash].js':'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
};