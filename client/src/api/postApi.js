import axios from '../utils/axiosUtils';

const post = {
    selectPosts() {
        return axios.get("/posts/");
    }

};
export default post;