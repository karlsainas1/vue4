import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Loomad from './views/Loomad.vue';
import Leitud from './views/Leitud.vue';
import Toeta from './views/Toeta.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loomad',
      name: 'loomad',
      component: Loomad,
    },
    {
      path: '/leitud',
      name: 'leitud',
      component: Leitud,
    },
    {
      path: '/toeta',
      name: 'toeta',
      component: Toeta,
    },
  ],
});
