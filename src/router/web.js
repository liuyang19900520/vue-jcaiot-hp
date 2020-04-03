import HomeView from "../views/pc/web/HomeView";
import MemberView from "../views/pc/web/MemberView";
import WebLayout from "../layout/WebLayout";
import MobileLayout from "../layout/MobileLayout";
import MobileHomeView from "../views/mobile/web/MobileHomeView";


import toPath from "path-to-regexp";

function langReg() {
// 引入模块
// 要使用路径中找到的键填充的数组
    var keys = []
    var re = toPath('/foo/:bar', keys)
    console.log(re)
    return re;
}

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
                path: langReg(),
                components: {
                    'pc-web': HomeView,
                    'mobile-web': MobileHomeView,
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
