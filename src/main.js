import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Antd from 'ant-design-vue'
// import Antd from '../../../@modules/ant-design-vue'
import  'ant-design-vue/dist/antd.css'
// import  '../../../@modules/ant-design-vue/dist/antd.css'
import './index.css'
import useComponents from './views/components'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(Antd)
useComponents(app.component)
app.mount('#app')