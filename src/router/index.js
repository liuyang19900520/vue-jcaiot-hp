import Vue from 'vue';
import Router from 'vue-router';
import WebView from '@/components/WebView';
import HomeView from '@/components/web/HomeView';
import MemberView from '@/components/web/MemberView';
import AdminView from '@/components/AdminView';
import LoginView from '@/components/LoginView';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'WebView',
            components: {
                'root': WebView
            },
            children: [{
                path: '/',
                components: {
                    'web': HomeView
                }
            }, {
                path: '/members',
                components: {
                    'web': MemberView
                }
            }]
        }, {
            path: '/:lang',
            name: 'WebView',
            components: {
                'root': WebView
            },
            children: [{
                path: '/',
                components: {
                    'web': HomeView
                }
            }, {
                path: '/:lang/members',
                components: {
                    'web': MemberView
                }
            }]
        }, {
            path: '/admin',
            name: 'AdminView',
            components: {
                'root': AdminView
            },

        },
        {
            path: '/login',
            name: 'LoginView',
            components: {
                'root': LoginView
            },
        }
    ]
});

export default router;