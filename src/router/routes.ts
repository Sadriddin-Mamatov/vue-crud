import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
   {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      redirect:'home',
      children: [
         {
            path: '/home',
            name: 'home',
            component: () => import('pages/Dashboard.vue'),
            meta: {
               breadCrumbName: 'Главная страница'
            }
         },
      ]
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue')
   }
];

export default routes;
