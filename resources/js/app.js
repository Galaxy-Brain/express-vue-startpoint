require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

Vue.component('App', App)

const routes = [
    {
        path:'/',
        component: require('./components/Home.vue').default
    },
    {
        path:'/About',
        component: require('./components/About.vue').default
    },
    {
        path:'/Contact',
        component: require('./components/Contact.vue').default
    }
]


const router = new VueRouter({
    mode:'history',
    routes,
})

const app = new Vue({
    router
}).$mount('#app')