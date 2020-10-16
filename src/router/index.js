import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/index.vue'),
    }
  ];
  
  const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(), // hash
    routes,
  });
  
  export default router;