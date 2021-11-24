module.exports = function fontsLoader(config, basePath = '') {
  config.module.rules.push({
    test: /\.(woff|woff2)$/,
    use: [
      {
        loader: require.resolve('file-loader'),
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'static/fonts/',
          publicPath: `${basePath}/static/fonts`,
        },
      },
    ],
  });
  return config;
};
