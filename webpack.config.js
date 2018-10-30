const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)(?![/|\\](swiper))/],
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: '@babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(sass|scss|css)$/,
        include: path.resolve(__dirname, 'src/stylesheets'),
        use: ExtractTextPlugin.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          'resolve-url-loader']
        })
      },
      {
        test:  /\.(woff|woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.(png|svg|jpg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};