const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
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
    template: './src/index.html'
  })],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 9000,
    https: false,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    useLocalIp: false,
  }
};
