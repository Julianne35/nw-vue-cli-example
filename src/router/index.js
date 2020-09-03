import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/add_clients',
    name: 'Add_Clients',
    component: () => import('../views/Add_Clients.vue')
  },
  {
    path: '/add_hours',
    name: 'Add_Hours',
    component: () => import('../views/Add_Hours.vue')
  },
  {
    path: '/release',
    name: 'Release',
    component: () => import('../views/Release.vue')
  },
  {
    path: '/export',
    name: 'Export',
    component: () => import('../views/Export.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
