const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = {
  withSass: {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
