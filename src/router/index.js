import Vue from 'vue';
import Router from 'vue-router';
import WebView from '@/components/WebView';
import AdminView from '@/components/AdminView';
import LoginView from '@/components/LoginView';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'WebView',
            component: WebView
        }, {
            path: '/admin',
            name: 'AdminView',
            component: AdminView
        },
        {
            path: '/login',
            name: 'LoginView',
            component: LoginView
        }
    ]
});