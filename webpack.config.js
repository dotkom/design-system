const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',

  module: {

    rules: [

      {

        test: /\.tsx?$/,

        exclude: /node_modules/,

        use: ['ts-loader']

      }

    ]

  },

  resolve: {
      modules: [path.resolve(__dirname, 'src'), "node_modules"],
      alias: {
          'common': path.resolve(__dirname, 'src/common'),
          'components': path.resolve(__dirname, 'src/components'),
          'react': path.resolve('./node_modules/react'),
      },
      extensions: ['*', '.ts', '.tsx', '.js']
  },

  output: {

    path: __dirname + '/dist',

    publicPath: '/',

    filename: 'index.js',


    libraryTarget: 'commonjs2'

  },
    target: 'web',
};

