const path = require('path')
const base = process.env.GH ? 'VueUI' : '/'

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  base,
  title: 'VueUI',
  description: 'Components Library',
  themeConfig: {
    sidebar: {
      '/': ['', 'test']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('')
      }
    }
  }
}
