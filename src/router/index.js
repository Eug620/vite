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
    children:[
      {
        path: 'page1',
        name: 'page1',
        component: import('../views/pages/page1/index.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        component: import('../views/pages/page2/index.vue')
      }
    ]
  }
]
  
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash
  routes,
});
  
export default router;