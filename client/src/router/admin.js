import AdminLayout from "../layout/AdminLayout";
import MenuView from "../views/pc/admin/MenuView";
import BannerView from "../views/pc/admin/BannerView";
import PostListView from "../views/pc/admin/PostListView";
import PostEditView from "../views/pc/admin/PostEditView";


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
        {
            path: '/admin/posts',
            components: {
                'dashboard': PostListView
            }
        },
        {
            path: '/admin/posts/md',
            components: {
                'dashboard': PostEditView
            }
        },
    ]
};

export default adminRouter;
