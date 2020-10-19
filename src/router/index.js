/*
 * @Author: yeyuhang
 * @Date: 2020-10-15 19:12:09
 * @LastEditTime: 2020-10-19 18:59:58
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import layout from '../components/layout/index.vue'
import { getCurrentInstance } from 'vue'
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
        component: import('../views/pages/Composition-API/index.vue')
      },
      {
        path: 'Reactivity-API',
        name: 'Reactivity-API',
        component: import('../views/pages/Reactivity-API/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/Composition-API' } // 找不到路径，重定向到首页
]
  
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash
  routes,
});
  
export default router;