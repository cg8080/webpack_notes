const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   constBase: './dist',
  //   // outputPath: './dist',
  //   historyApiFallback: true,
  //   hot: true,
  //   host: 'localhost',
  //   inline: true,
  //   port: '8088',
  //   progress: true,
  //   disableHostCheck: true,
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};