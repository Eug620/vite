/*
 * @Author: yeyuhang
 * @Date: 2020-10-20 10:17:40
 * @LastEditTime: 2020-11-13 14:39:40
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Antd from 'ant-design-vue'
// import Antd from '../../../@modules/ant-design-vue'
// import  'ant-design-vue/dist/antd.css'
import  'ant-design-vue/dist/antd.css'
import './index.css'
import useComponents from './views/components'
const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(Antd)
useComponents(app.component)
app.mount('#app')