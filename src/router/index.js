import Vue from 'vue';
import Router from 'vue-router';
import WebView from '@/components/pc/WebView';
import WebViewMobile from '@/components/mobile/WebViewMobile';
import HomeView from '@/components/pc/web/HomeView';
import HomeViewMobile from '@/components/mobile/web/HomeViewMobile';
import MemberView from '@/components/pc/web/MemberView';
import MemberViewMobile from '@/components/mobile/web/MemberViewMobile';
import AdminView from '@/components/pc/AdminView';
import LoginView from '@/components/pc/LoginView';


/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 * 添加，相同路由跳转时，触发watch (针对el-menu，仅限string方式传参，形如"view?id=5")
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    if (typeof (location) == "string") {
        var Separator = "&";
        if (location.indexOf('?') == -1) {
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
        path: '/',
        name: 'WebView',
        components: {
            'root': WebView,
            'root-mobile': WebViewMobile,
        },
        children: [{
            path: '/',
            components: {
                'web': HomeView,
                'web-mobile': HomeViewMobile,
            }
        }, {
            path: '/members',
            components: {
                'web': MemberView,
                'web-mobile': MemberViewMobile,
            }
        }]
    }, {
        path: '/:lang',
        name: 'WebView',
        components: {
            'root': WebView,
            'root-mobile': WebViewMobile,
        },
        children: [{
            path: '/',
            components: {
                'web': HomeView,
                'web-mobile': HomeViewMobile,
            }
        }, {
            path: '/:lang/members',
            params: {
                lang: ['jp', 'zh', 'en']
            },
            components: {
                'web': MemberView,
                'web-mobile': MemberViewMobile,
            }
        }]
    }, {
        path: '/admin/dashboard',
        name: 'AdminView',
        components: {
            'root': AdminView
        },
    },
        {
            path: '/admin/login',
            name: 'LoginView',
            components: {
                'root': LoginView
            },
        }
    ]
});

export default router;