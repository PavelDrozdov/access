const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};