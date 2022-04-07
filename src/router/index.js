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
            }, {
                path: 'search',
                component: () => import(/* webpackChunkName: "about" */ '../components/Seach.vue')
            }, {
                path: 'courses',
                component: () => import(/* webpackChunkName: "about" */ '../components/Courses.vue')
            }, {
                path: 'newsinfo/:id',
                component: () => import(/* webpackChunkName: "about" */ '../views/user/NewsInfo')
            },{
                path: 'userexhibit',
                component: () => import(/* webpackChunkName: "about" */ '../views/user/UserExhibit'),
                children: [
                    {
                    path: 'userdata',
                    component: () => import(/* webpackChunkName: "about" */ '../views/user/UserData'),
                    children: [{
                        path: 'userinfos',
                        component: () => import(/* webpackChunkName: "about" */ '../views/user/UserInfos'),

                    }]
                }, {
                        path: 'check',
                        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Check')},
                    {
                        path: 'usercar',
                        component: () => import(/* webpackChunkName: "about" */ '../views/user/UserCar')},
                    {
                        path: 'editing',
                        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Editing')}
                ]
            }, {
                path: 'CompanyInfo/:id',
                component: () => import(/* webpackChunkName: "about" */ '../views/company/CompanyInfo')
            }, {
                path: 'news',
                component: () => import(/* webpackChunkName: "about" */ '../views/user/News')
            }
        ]
    }, {
        path: '/callback',
        name: 'App',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
        path: '/user-info',
        name: 'UserInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
    }, {
        path: '/e',
        component: () => import(/* webpackChunkName: "about" */ '../components/MEditor')
    }, {
        path: '/404',
        component: () => import(/* webpackChunkName: "about" */ '../views/404')
    },{
        path: '/test',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/test')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
