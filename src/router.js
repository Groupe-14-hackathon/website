import { createRouter, createWebHistory } from 'vue-router'

import home from './components/Home.vue'
import login from './components/Login.vue'
import artistes from './components/Artistes.vue'
import billeterie from './components/billeterie.vue'
// import map from './components/map.vue'


// import p404 from './views/404.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
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
//   {
//     path: '/map',
//     component: map,
// },
    /*
    {
      path: '/:catchAll(.*)',
      component: p404,
    },
    */
  ],
})