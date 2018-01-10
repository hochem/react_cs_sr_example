const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: {
    client: './client.js'
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
