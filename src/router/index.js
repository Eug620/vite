/*
 * @Author: yeyuhang
 * @Date: 2020-10-15 19:12:09
 * @LastEditTime: 2020-10-20 17:58:47
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import layout from '../components/layout/index.vue'
import { getCurrentInstance } from 'vue'
import CompositionAPI from '../views/pages/Composition-API/index.vue'
import ReactivityAPI from '../views/pages/Reactivity-API/index.vue'
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
        path: 'Composition-API',
        name: 'Composition-API',
        component: CompositionAPI
      },
      {
        path: 'Reactivity-API',
        name: 'Reactivity-API',
        component: ReactivityAPI
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