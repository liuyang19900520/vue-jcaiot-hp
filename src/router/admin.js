import AdminLayout from "../layout/AdminLayout";
import MenuView from "../views/pc/admin/MenuView";
import BannerView from "../views/pc/admin/BannerView";

const adminRouter = {
    path: '/admin',
    components: {
        'root-pc': AdminLayout,
    },
    children: [
        {
            path: '/admin/banner',
            components: {
                'dashboard': BannerView
            }
        },
        {
            path: '/admin/menu',
            components: {
                'dashboard': MenuView
            }
        },
    ]
}

export default adminRouter
