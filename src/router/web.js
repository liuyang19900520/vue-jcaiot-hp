import HomeView from "../views/pc/web/HomeView";
import MemberView from "../views/pc/web/MemberView";
import WebLayout from "../layout/WebLayout";
import MobileLayout from "../layout/MobileLayout";
import MobileHomeView from "../views/mobile/web/MobileHomeView";
import PostListView from "../views/pc/web/PostListView";

// function langReg() {
//     var pathToRegexp = require('path-to-regexp')
//     var keys = [{name: 'foo', delimiter: '/', optional: false, repeat: true}]
//     var re = pathToRegexp('/:foo+', keys)
//     return re
// }

const webRouter =
    {
        path: '/',
        components: {
            'root-pc': WebLayout,
            'root-mobile': MobileLayout,
        }, children: [
            {
                path: '/',
                components: {
                    'pc-web': HomeView,
                    'mobile-web': MobileHomeView,
                },
            }, {
                path: '/:lang(jp|en)',
                components: {
                    'pc-web': HomeView,
                    'mobile-web': MobileHomeView,
                },
            }, {
                path: '/posts',
                components: {
                    'pc-web': PostListView,
                },
            }, {
                path: '/members',
                components: {
                    'pc-web': MemberView,
                },
            }
        ]
    }
export default webRouter
