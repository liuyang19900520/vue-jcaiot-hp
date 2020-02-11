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

// router.beforeEach((to, from, next) => {
//     let toPath = this.$route.path;
//       console.log("toPath1", toPath);

//       if (toPath.startsWith("/en")) {
//         toPath = toPath.replace("/en", "");
//       } else if (toPath.startsWith("/jp")) {
//         toPath = toPath.replace("/en", "");
//       }
//       console.log("toPath2", toPath);
//       let toLang = "";
//       if (lang != "zh") {
//         toLang = lang;
//       }
//       console.log("toLang", toLang);

// });

export default router;