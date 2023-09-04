const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-blocktoggle',
    clientRootMixin: path.resolve(__dirname, 'mixin.js')
  }
}
