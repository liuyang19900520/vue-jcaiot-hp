import axios from '../utils/axiosUtils';

const auth = {
    login(username, password) {
        return axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: username,
                password: password
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    listMenus() {
        return axios.get("/menus")
    }


};
export default auth;