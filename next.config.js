
const rehypePrism = require('@mapbox/rehype-prism')
const heading = require('remark-autolink-headings')
const slug = require('remark-slug')
const ogp = require('remark-ogp')


const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [
      slug,
      ogp,
      [
        heading, {
          behavior: 'wrap',
          linkProperties: { class: 'inactive-link' }
        }
      ]
    ],
    rehypePlugins: [rehypePrism],
  },
  extension: /\.mdx?$/
})


module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
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