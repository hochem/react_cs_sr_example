const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: {
    client: './client.js',
    vendor: ['react', 'react-dom', 'lodash', 'moment']
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
    chunkFilename: 'chunks/[name]-[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new ExtractTextPlugin("app.css"),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: false,
      reportFilename: 'report.html'
    }),
    new HtmlWebpackPlugin({title: 'My App', template: 'index.tmpl'})
  ]
};

module.exports = [
  clientConfig
];
