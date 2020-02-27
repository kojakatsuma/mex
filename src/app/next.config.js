const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})


module.exports = withMDX({
  distDir: '../../dist/functions/next',
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|jpg|jpeg|png|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[path][name].[hash].[ext]',
          },
        },
      ],
    })
    return config
  },
})
