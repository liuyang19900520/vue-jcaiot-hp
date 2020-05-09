import HomeView from "../views/pc/web/HomeView";
import MemberView from "../views/pc/web/MemberView";
import WebLayout from "../layout/WebLayout";
import MobileLayout from "../layout/MobileLayout";
import MobileHomeView from "../views/mobile/web/MobileHomeView";
import PostListView from "../views/pc/web/PostListView";
import PostView from "../views/pc/web/PostView";

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
                path: '/:lang(jp|en)/posts',
                components: {
                    'pc-web': PostListView,
                },
            }, {
                path: '/posts/:postId',
                components: {
                    'pc-web': PostView,
                },
            }, {
                path: '/:lang(jp|en)/posts/:postId',
                components: {
                    'pc-web': PostView,
                },
            }, {
                path: '/members',
                components: {
                    'pc-web': MemberView,
                },
            }, {
                path: '/:lang(jp|en)/members',
                components: {
                    'pc-web': MemberView,
                },
            },
        ]
    };
export default webRouter;
