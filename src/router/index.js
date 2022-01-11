import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Layout.vue')
    },
    {
      path: '/login',
      component: () => import('../components/pages/Login.vue'),
    },
  ],
})
export default router