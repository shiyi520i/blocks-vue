/**
 * 全站权限配置
 *
 */
//路由
import router from 'vue-router';
//进度条
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false });

/**
 * 导航守卫，相关内容可以参考:
 * https://router.vuejs.org/zh/guide/adva
 * nced/navigation-guards.html
 */
router.beforeEach((to, from, next) => {
    NProgress.start();
    return false
});

//后置路由守卫
router.afterEach((to,from) => {
    NProgress.done();
    document.title = to.meta.title
});
