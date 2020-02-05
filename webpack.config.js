const path = require('path');

module.exports = {
  mode: 'development',
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
          'react-dom': path.resolve(__dirname, './node_modules/react-dom')
      },
      extensions: ['*', '.ts', '.tsx', '.js']
  },

  output: {

    path: __dirname + '/dist',

    publicPath: '/',

    filename: 'index.js',

    libraryTarget: 'umd'

  },
  externals: {
      react: {
          commonjs: "react",
          commonjs2: "react",
          amd: "react",
          root: "react"
      },
      "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "ReactDOM",
          root: "ReactDOM"
      }
  },
  target: 'web',
};

