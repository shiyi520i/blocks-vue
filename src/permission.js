/**
 * 全站权限配置
 *
 */
//路由
import router from "./router/router";
//表单验证
//import { validatenull } from "@/util/validate";
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
         console.log(to,from,next)
/*   NProgress.start();
  if (to.meta.isAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }*/
} 
)

//后置路由守卫
router.afterEach(() => {
  NProgress.done();
  const title = store.getters.tag.label;
  router.$avueRouter.setTitle(title);
});
