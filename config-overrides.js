module.exports = function (config, env) {
  config.module.rules.push(
    {
      test: /\.html$/,
      loader: "html-loader",
      options: {
        minimize: true,
      }
    }
  )
  return config;
}
