import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Antd from 'ant-design-vue'
// import Antd from '../../../@modules/ant-design-vue'
import  'ant-design-vue/dist/antd.css'
// import  '../../../@modules/ant-design-vue/dist/antd.css'
import useComponents from './views/components'

const app = createApp(App)
app.use(router)
app.use(Antd)
useComponents(app.component)
app.mount('#app')