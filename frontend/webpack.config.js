const webpack = require('webpack');
var BundleTracker  = require('webpack-bundle-tracker');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = {
  context: `${__dirname}/static_src`,
  entry: {
    index: './index.jsx'
  },
  output: {
    path: `${__dirname}/static/build/`,
    filename: NODE_ENV == 'development' ? '[name].js' : '[hash].js',
    publicPath: '/static/build/',
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? 'source-map-inline' : false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: `${__dirname}/static_src`,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'] //add stage0
        }
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },

      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
        loader: 'url-loader?limit=4096$name=[path][name].[ext]'
      }
    ]
  },

  resolve: {
      modules: [
        path.resolve(__dirname, './static_src'),
        'node_modules',
      ],
      extensions: ['.js', '.jsx'],
    },

    resolveLoader: {
      modules: ['node_modules'],
      extensions: ['loader.js', '.js'],
    },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings:false,
    //     drop_console:true,
    //     unsafe:true,
    //   }
    // }),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

};
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings:false,
          drop_console:true,
          unsafe:true,
        }
      })
    );
  }
