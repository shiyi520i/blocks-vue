import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
        //redirect: '/category',
        children: [
            {
                path: 'category',
                component: () => import(/* webpackChunkName: "about" */ '../views/company/Category')
            },
            {
                path: 'search',
                component: () => import(/* webpackChunkName: "about" */ '../components/Seach.vue')
            },
            {
                path: 'courses',
                component: () => import(/* webpackChunkName: "about" */ '../components/Courses.vue')
            },
            {
                path: 'userexhibit',
                component: () => import(/* webpackChunkName: "about" */ '../views/user/UserExhibit'),
                children: [{
                    path: 'userdata',
                    component: () => import(/* webpackChunkName: "about" */ '../views/user/UserData'),
                },
                    {
                        path: 'userinfos',
                        component: () => import(/* webpackChunkName: "about" */ '../views/user/UserInfos'),
                    }
                ]
            },{
                path: 'a',
                component: () => import(/* webpackChunkName: "about" */ '../views/company/CompanyInfo')
            },{
                path: 'news',
                component: () => import(/* webpackChunkName: "about" */ '../views/user/news')
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
