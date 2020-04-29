import axios from '../utils/axiosUtils';

const menu = {
    listMenus() {
        return axios.get("/menus");
    }
};
export default menu;