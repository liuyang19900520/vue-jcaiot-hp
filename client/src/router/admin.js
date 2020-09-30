import AdminLayout from "../layout/AdminLayout";
import BannerView from "../views/pc/admin/BannerView";
import PostListView from "../views/pc/admin/PostListView";
import PostEditView from "../views/pc/admin/PostEditView";
import AssociationListView from "../views/pc/admin/AssociationListView";
import AssociationEditView from "@/views/pc/admin/AssociationEditView";
import EnterpriseListView from "@/views/pc/admin/EnterpriseListView";
import EnterpriseEditView from "@/views/pc/admin/EnterpriseEditView";
import ExpertListView from "@/views/pc/admin/ExpertListView";
import ExpertEditView from "@/views/pc/admin/ExpertEditView";
import MenuListView from "@/views/pc/admin/MenuListView";
import MenuEditView from "@/views/pc/admin/MenuEditView";
import ApplicatioinListView from "@/views/pc/admin/ApplicatioinListView";


const adminRouter = {
    path: '/admin',
    components: {
        'root-pc': AdminLayout,
    },
    children: [
        {
            path: '/admin/banners',
            components: {
                'dashboard': BannerView
            }
        },
        {
            path: '/admin/menus',
            components: {
                'dashboard': MenuListView
            }
        },
        {
            path: '/admin/menus/md',
            components: {
                'dashboard': MenuEditView
            }
        },
        {
            path: '/admin/menus/:menuId/md',
            components: {
                'dashboard': MenuEditView
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
        {
            path: '/admin/experts',
            components: {
                'dashboard': ExpertListView
            }
        },
        {
            path: '/admin/experts/md',
            components: {
                'dashboard': ExpertEditView
            }
        },
        {
            path: '/admin/experts/:expertId/md',
            components: {
                'dashboard': ExpertEditView
            }
        },
        {
            path: '/admin/applications',
            components: {
                'dashboard': ApplicatioinListView
            }
        },
    ]
};

export default adminRouter;
