import AdminLayout from "../layout/AdminLayout";
import MenuView from "../views/pc/admin/MenuView";
import BannerView from "../views/pc/admin/BannerView";
import PostListView from "../views/pc/admin/PostListView";
import PostEditView from "../views/pc/admin/PostEditView";
import AssociationListView from "../views/pc/admin/AssociationListView";
import AssociationEditView from "@/views/pc/admin/AssociationEditView";
import EnterpriseListView from "@/views/pc/admin/EnterpriseListView";
import EnterpriseEditView from "@/views/pc/admin/EnterpriseEditView";


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
        {
            path: '/admin/posts/:postId/md',
            components: {
                'dashboard': PostEditView
            }
        },
        {
            path: '/admin/associations',
            components: {
                'dashboard': AssociationListView
            }
        },
        {
            path: '/admin/associations/md',
            components: {
                'dashboard': AssociationEditView
            }
        },
        {
            path: '/admin/associations/:associationId/md',
            components: {
                'dashboard': AssociationEditView
            }
        },
        {
            path: '/admin/enterprises',
            components: {
                'dashboard': EnterpriseListView
            }
        },
        {
            path: '/admin/enterprises/md',
            components: {
                'dashboard': EnterpriseEditView
            }
        },
        {
            path: '/admin/enterprises/:enterpriseId/md',
            components: {
                'dashboard': EnterpriseEditView
            }
        },
    ]
};

export default adminRouter;
