const path = require('path')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 't-buffer.js',
    path: path.join(__dirname, '../dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    library: 'TBuffer',
    libraryTarget: 'window'
  },
  devtool: 'source-map',
  resolve: {
    symlinks: true,
    extensions: ['.js', '.jsx', '.html', '.css', '.scss'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new NamedModulesPlugin()
  ]
}
