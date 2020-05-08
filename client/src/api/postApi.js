import axios from '../utils/axiosUtils';

const post = {
    selectPosts(num) {
        return axios.get("/posts/" + num);
    }

};
export default post;