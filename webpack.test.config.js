module.exports = {
  entry: './webpack.spec-loader.js',
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
        },
      },
    ],
  },
  eslint: {
    configFile: 'spec/.eslintrc', // only for test; prod will ignore these
    failOnWarning: false,
    failOnError: false,
  },
};
