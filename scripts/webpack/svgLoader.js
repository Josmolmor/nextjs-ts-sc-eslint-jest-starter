module.exports = function svgLoader(config, basePath = '') {
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 8192,
          name: '[name]-[hash].[ext]',
          outputPath: 'static/images/',
          publicPath: `${basePath}/static/images`,
        },
      },
    ],
  });
  return config;
};
