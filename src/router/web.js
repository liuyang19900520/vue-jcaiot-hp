import WebLayout from "../layout/WebLayout";

const webRouter = {
    path: '/',
    component: WebLayout,
    name: 'WebLayout',
    children: [{
        path: '/',
        components: {
            'web-pc': WebView,
        },
    }]
}

export default webRouter
