const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev')

const dirNode = path.join(__dirname, '../node_modules')
const dirSrc = path.join(__dirname, '../src')
const dirApp = path.join(dirSrc, 'app')
const dirAssets = path.join(dirSrc, 'assets')


/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    bundle: path.join(dirApp, 'index.js')
  },
  resolve: {
    modules: [
      dirNode,
      dirSrc,
    ],
    alias: {
      // absolute imports
      '/app': path.resolve(dirSrc, 'app/'),
      '/styles': path.resolve(dirSrc, 'assets/styles/'),
      '/images': path.resolve(dirSrc, 'assets/images/')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: path.join(dirSrc, 'index-template.html'),
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: dirApp,
        exclude: dirNode,
        options: {
          compact: true
        }
      },
      // STYLES
      {
        test: /\.css$/,
        include: dirAssets,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // CSS / SASS
      {
        test: /\.scss/,
        include: dirAssets,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        include: dirAssets,
        exclude: dirNode,
        options: {
          name: '[path][name].[ext]'
        }
      },
      // RAW
      {
        test: [ /\.vert$/, /\.frag$/ ],
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }
}
