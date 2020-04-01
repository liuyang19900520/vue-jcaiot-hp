import AdminLayout from "../layout/AdminLayout";

const adminRouter = {
    path: '/',
    component: AdminLayout,
    name: 'AdminLayout',
    children: [{
        path: '/',
        components: {
            'admin': AdminLayout,
        },
    }]
}

export default adminRouter
