import axios from '../utils/axiosUtils';

const menu = {
    listMenus() {
        return axios.get("/api/menus");
    },
    findMenuById(id) {
        return axios({
            method: 'get',
            url: '/api/menus/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createMenu(newMenu) {
        return axios({
            method: 'post',
            url: '/api/menus/',
            data: {
                "title": newMenu.title,
                "admin": "admin",
                "icon": newMenu.icon,
                "link": newMenu.link,
                "order": newMenu.order,
                "profile": "",
                "updateTime": newMenu.updateTime,
                "updateUser": newMenu.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updateMenu(newMenu) {
        return axios({
            method: 'put',
            url: '/api/menus/',
            data: {
                "_id": newMenu._id,
                "title": newMenu.title,
                "admin": "admin",
                "icon": newMenu.icon,
                "link": newMenu.link,
                "order": newMenu.order,
                "profile": "",
                "updateTime": newMenu.updateTime,
                "updateUser": newMenu.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deleteMenu(id) {
        return axios({
            method: 'delete',
            url: '/api/menus/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default menu;