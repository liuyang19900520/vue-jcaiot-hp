import axios from '../utils/axiosUtils';

const post = {
    selectMainPosts(num) {
        return axios({
            method: 'get',
            url: '/api/posts/main'+'?limit='+num,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    selectPostsByPage(pageNo,pageCount) {
        return axios({
            method: 'get',
            url: '/api/posts'+'?pageNo='+pageNo+'&pageCount='+pageCount,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default post;