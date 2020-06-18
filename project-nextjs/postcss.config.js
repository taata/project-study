require("postcss-easy-import")({ prefix: "_" }),
  (module.exports = {
    plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
  });
