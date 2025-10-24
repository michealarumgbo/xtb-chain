import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'

// user layout
import UserLayout from '@/views/layouts/UserLayout.vue'
import SpotTrading from '@/views/User/SpotTrading.vue'

// homepage views
import MarketsPage from '@/views/MarketsPage.vue'
import Derivatives from '@/views/Derivatives.vue'
import TradePage from '@/views/TradePage.vue'
import Earn from '@/views/Earn.vue'
import Learn from '@/views/Learn.vue'

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
          name: 'spotTrading',
          component: SpotTrading,
        },
      ],
    },
    {
      path: '/markets',
      name: 'marketsPage',
      component: MarketsPage,
    },
    {
      path: '/derivatives',
      name: 'derivativesPage',
      component: Derivatives,
    },
    {
      path: '/trade-page',
      name: 'tradePage',
      component: TradePage,
    },
    {
      path: '/earn-page',
      name: 'earnPage',
      component: Earn,
    },
    {
      path: '/learn',
      name: 'learnPage',
      component: Learn,
    },
  ],
})

export default router
