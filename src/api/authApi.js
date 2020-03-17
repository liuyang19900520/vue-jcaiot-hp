import axios from '../utils/axiosUtils';
const auth = {
    login(username, password) {
        return axios({
            method: "post",
            url: "/auth/login",
            data: {
                'userName': username,
                'password': password
            },
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}
export default {
    auth
};