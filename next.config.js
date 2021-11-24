const withPlugins = require('next-compose-plugins');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const fontsLoader = require('./scripts/webpack/fontsLoader.js');

const loadFontsPlugin = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    phases: [
      PHASE_DEVELOPMENT_SERVER,
      PHASE_PRODUCTION_BUILD,
      PHASE_PRODUCTION_SERVER,
    ],
    webpack: (baseConfig, baseOptions) => {
      const config =
        typeof nextConfig.webpack === 'function'
          ? nextConfig.webpack(baseConfig, baseOptions)
          : baseConfig;

      fontsLoader(config, '/_next');

      return config;
    },
  });

module.exports = withPlugins([loadFontsPlugin]);
