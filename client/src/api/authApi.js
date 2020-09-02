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
    profile(){
        return axios({
            method: 'get',
            url: '/auth/profile',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default auth;