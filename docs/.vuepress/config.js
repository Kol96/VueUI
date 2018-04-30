const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  base: process.env.CI_ENV || '/VueUI/',
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
        '@': resolve('src')
      }
    }
  }
}
