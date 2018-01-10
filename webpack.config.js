const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeExternals = require('webpack-node-externals');
const AssetsPlugin = require('assets-webpack-plugin');

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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new ExtractTextPlugin({filename: '[name]-[contenthash].css', allChunks: true}),
    new AssetsPlugin({
      filename: 'assets.json',
      path: `${__dirname}/build`,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: false,
      reportFilename: 'report.html'
    })
  ]
};

const serverConfig = {
  entry: ['./index.js'],
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      loaders: ['css-loader/locals']
    }]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  externals: [nodeExternals(
    {
      whitelist:
      [
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/
      ]
    }
  )]
};

module.exports = [
  clientConfig,
  serverConfig
];
