/* eslint-disable filenames/match-regex, import/no-commonjs */

const path = require('path');
//const webpack = require('webpack');

const context = path.resolve(__dirname, 'src');

module.exports = {
  context,
  //context: path.resolve(__dirname, './src'),
  entry: {  
   main: './index.js'
  },
  output: {
    //path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        //include: path.resolve(__dirname, './src'),
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        //include: path.resolve(__dirname, './src'),
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                context // Without this line the demo does not work!!!
              }
            ]
          ]
        }
      }
    ]
  },
  stats: 'minimal'
};
