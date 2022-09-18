const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ?
      '/CirnoIntroduction/' :
      '/'
})
