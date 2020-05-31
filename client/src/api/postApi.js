import axios from '../utils/axiosUtils';

const post = {
    selectMainPosts(num) {
        return axios({
            method: 'post',
            url: '/posts/main',
            data: {
                num: num,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    selectPostsByPage(page) {
        return axios({
            method: 'post',
            url: '/posts/page',
            data: {
                pageNo: page,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default post;