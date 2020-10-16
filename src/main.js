/*
 * @Author: yeyuhang
 * @Date: 2020-05-27 01:50:14
 * @LastEditTime: 2020-10-16 19:38:01
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Antd from 'ant-design-vue'
// import Antd from '../../../@modules/ant-design-vue'
import  'ant-design-vue/dist/antd.css'
// import  '../../../@modules/ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')