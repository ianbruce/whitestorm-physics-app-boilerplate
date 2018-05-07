const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackConfig = require('./config')

module.exports = merge(webpackConfig, {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },

  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      { root: path.join(__dirname, '../') }
    )
  ]
})
