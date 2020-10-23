/*
 * @Author: yeyuhang
 * @Date: 2020-10-23 10:28:54
 * @LastEditTime: 2020-10-23 11:17:36
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
const path = require('path')
// vite.config.js # or vite.config.ts

console.log(path.resolve(__dirname, './src'))

module.exports = {
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  proxy: {
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': 'http://10.192.195.96:8087',
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': {
    //   target: 'http://10.192.195.96:8087/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/lsbdb/, '')
    // }
  },
  base: './'
}