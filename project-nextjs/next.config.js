const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = {
  withSass: {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    sassLoaderOptions: {
      url: false,
    },
    webpack(config, options) {
      return config;
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    includePaths: ["pages"],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
