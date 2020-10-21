/*
 * @Author: yeyuhang
 * @Date: 2020-10-15 19:12:09
 * @LastEditTime: 2020-10-21 12:38:29
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import layout from '../components/layout/index.vue'
import { getCurrentInstance } from 'vue'
import ApplicationConfig from '../views/pages/Application-Config/index.vue'
import ApplicationAPI from '../views/pages/Application-API/index.vue'
import GlobalAPI from '../views/pages/Global-API/index.vue'
import OptionsAPI from '../views/pages/Options-API/index.vue'
import InstanceProperties from '../views/pages/Instance-Properties/index.vue'
import InstanceMethods from '../views/pages/Instance-Methods/index.vue'
import Directives from '../views/pages/Directives/index.vue'
import SpecialAttributes from '../views/pages/Special-Attributes/index.vue'
import BuiltInComponents from '../views/pages/Built-In-Components/index.vue'
import ReactivityAPI from '../views/pages/Reactivity-API/index.vue'
import CompositionAPI from '../views/pages/Composition-API/index.vue'
const vm = getCurrentInstance()
console.log(vm);

const routes = [
  {
    path:'/',
    name:'layout',
    component:layout,
    redirect: 'Composition-API',
    children:[
      {
        path: 'Application-Config',
        name: 'Application-Config',
        component: ApplicationConfig
      },      {
        path: 'Application-API',
        name: 'Application-API',
        component: ApplicationAPI
      },      {
        path: 'Global-API',
        name: 'Global-API',
        component: GlobalAPI
      },      {
        path: 'Options-API',
        name: 'Options-API',
        component: OptionsAPI
      },      {
        path: 'Instance-Properties',
        name: 'Instance-Properties',
        component: InstanceProperties
      },      {
        path: 'Instance-Methods',
        name: 'Instance-Methods',
        component: InstanceMethods
      },      {
        path: 'Directives',
        name: 'Directives',
        component: Directives
      },      {
        path: 'Special-Attributes',
        name: 'Special-Attributes',
        component: SpecialAttributes
      },      {
        path: 'BuiltIn-Components',
        name: 'BuiltIn-Components',
        component: BuiltInComponents
      },
      {
        path: 'Reactivity-API',
        name: 'Reactivity-API',
        component: ReactivityAPI
      },
      {
        path: 'Composition-API',
        name: 'Composition-API',
        component: CompositionAPI
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/Composition-API' } // 找不到路径，重定向到首页
]
  
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
    
    // return desired position
  }
});
  
export default router;