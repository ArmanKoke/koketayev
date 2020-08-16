import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "main" */ "./components/pages/Main.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ "./components/pages/About.vue")
        },
        {
            path: '/algorithms',
            name: 'algorithms',
            component: () => import(/* webpackChunkName: "algorithms" */ "./components/pages/Algorithms.vue")
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ "./components/pages/Contact.vue")
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import(/* webpackChunkName: "projects" */ "./components/pages/Projects.vue")
        },
    ]
})