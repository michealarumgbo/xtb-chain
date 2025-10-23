import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'

// user layout
import UserLayout from '@/views/layouts/UserLayout.vue'
import SpotTrading from '@/views/User/SpotTrading.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/user',
      name: 'userLayout',
      component: UserLayout,
      children: [
        {
          path: 'spot-trading',
          name: 'spot-trading',
          component: SpotTrading,
        },
      ],
    },
  ],
})

export default router
