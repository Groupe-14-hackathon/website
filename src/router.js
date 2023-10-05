import { createRouter, createWebHistory, useRouter } from 'vue-router'
import VueCookies from 'vue-cookies'
import home from './components/Home.vue'
import login from './components/Login.vue'
import artistes from './components/Artistes.vue'
import billeterie from './components/Billeterie.vue'
import map from './components/Map.vue'
import register from './components/Register.vue'
import p404 from './components/404.vue'
import dashboard from './components/Dashboard.vue'

const auth = () => {
    const router = useRouter()
    const token = VueCookies.get('token')
    if(token == null) {
        router.push('login')
        return false
    } return true
}

const isConnected = () => {
    const router = useRouter()
    const token = VueCookies.get('token')
    if(token == null) {
        return true
    } router.push('dashboard')

}

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
            beforeEnter: [isConnected]
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
            path: '/dashboard',
            component: dashboard,
            beforeEnter: [auth]
        },
        {
            path: '/:catchAll(.*)',
            component: p404,
        },
    ],
})