const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.mdx?$/,
    use: ['babel-loader', '@mdx-js/loader'],
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    use: [{ loader: require.resolve('@storybook/addon-storysource/loader') }],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  if (config.resolve.plugins === undefined) {
    config.resolve.plugins = [];
  }
  config.resolve.plugins.push(new TsconfigPathsPlugin({}));
  return config;
};
