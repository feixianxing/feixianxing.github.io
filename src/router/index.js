import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: ()=>import('../views/MessageView.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: ()=>import('../views/MyView.vue')
    },
  ]
})

export default router
