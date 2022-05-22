import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
    },

    { path: '/:catchAll(.*)', name: "PageNotFound", component: PageNotFound },
  ],
});

export default router;
