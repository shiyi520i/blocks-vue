import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
        children: [{
            path: 'ca',
            component: () => import(/* webpackChunkName: "about" */ '../views/company/Category')
            },
            {
                path: 's',
                component: () => import(/* webpackChunkName: "about" */ '../components/Seach.vue')
            },
            {
                path: 'c',
                component: () => import(/* webpackChunkName: "about" */ '../components/Courses.vue')
            }
        ]
    },
    {
        path: '/callback',
        name: 'App',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/user-info',
        name: 'UserInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
