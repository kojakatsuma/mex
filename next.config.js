
const rehypePrism = require('@mapbox/rehype-prism')
const heading = require('remark-autolink-headings')
const slug = require('remark-slug')
const ogp = require('remark-ogp')


const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [
      ogp,
      slug,
      [
        heading, {
          behavior: 'wrap',
          linkProperties: { class: 'inactive-link' }
        }
      ],
    ],
    rehypePlugins: [rehypePrism],
  },
  extension: /\.mdx?$/
})


module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx']
})