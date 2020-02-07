const markdown = require('remark-parse')
const slugs = require('remark-slug')
const headings = require('remark-autolink-headings')


module.exports = function (config, env) {
  config.module.rules = config.module.rules.map(rule => {
    if (
      typeof rule.test !== 'undefined' ||
      typeof rule.oneOf === 'undefined'
    ) {
      return rule
    }
    rule.oneOf.unshift({
      test: /.mdx$/,
      use: [
        {
          loader: 'babel-loader'
        }, {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [
              [markdown, { gfm: true }],
              slugs,
              [headings, {
                behavior: 'wrap'
              }]
            ]
          }
        }]
    })
    return rule
  })
  return config
}
