import Vue from 'vue';
import Router from 'vue-router';
import adminRouter from "./admin";
import webRouter from "./web";
import LoginView from "../views/pc/LoginView";


/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 * 添加，相同路由跳转时，触发watch (针对el-menu，仅限string方式传参，形如"view?id=5")
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    if (typeof (location) == "string") {
        let Separator = "&";
        if (location.indexOf('?') === -1) {
            Separator = '?';
        }
        location = location + Separator + "random=" + Math.random();
    }
    return routerPush.call(this, location).catch(error => error);
};

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/login',
        components: {
            'root-pc': LoginView,
        }
    }, webRouter, adminRouter]

});

export default router;