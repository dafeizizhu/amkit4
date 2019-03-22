const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpackConfig = require('./webpack.config.base')

webpackConfig.entry = path.join(__dirname, '../test/run.js')

webpackConfig.output = {
  filename: 'run.js',
  path: path.join(__dirname, '../dist')
}

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '../test/index.html')
  }),
  new CopyWebpackPlugin([
    path.join(__dirname, '../test/mocha.css'),
    path.join(__dirname, '../test/mocha.js')
  ])
]

webpackConfig.devServer = {
  port: 10091,
  host: '0.0.0.0',
  historyApiFallback: true,
  disableHostCheck: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  contentBase: './src',
  open: false
}

webpackConfig.mode = 'development'

module.exports = webpackConfig
