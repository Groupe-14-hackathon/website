import { createRouter, createWebHistory } from 'vue-router'

import home from './components/Home.vue'
import login from './components/Login.vue'
import artistes from './components/Artistes.vue'
import billeterie from './components/billeterie.vue'
import map from './components/map.vue'
import register from './components/Register.vue'
import p404 from './components/404.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/artistes',
        component: artistes,
    },
    {
      path: '/billeterie',
      component: billeterie,
  },   
    {
     path: '/map',
     component: map,
    },
    {
        path: '/register',
        component: register,
    },
    {
      path: '/:catchAll(.*)',
      component: p404,
    },
  ],
})