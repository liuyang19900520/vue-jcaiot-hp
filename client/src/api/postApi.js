import axios from '../utils/axiosUtils';

const post = {
    selectMainPosts(num) {
        return axios({
            method: 'get',
            url: '/api/posts/main' + '?limit=' + num,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    selectPostsByPage(pageNo, pageCount) {
        return axios({
            method: 'get',
            url: '/api/posts' + '?pageNo=' + pageNo + '&pageCount=' + pageCount,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    findPostById(id) {
        return axios({
            method: 'get',
            url: '/api/posts/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createPost(newPost) {
        return axios({
            method: 'post',
            url: '/api/posts/',
            data: {
                "title": newPost.title,
                "content": newPost.content,
                "updateTime": newPost.updateTime,
                "mainPic": newPost.mainPicture,
                "summary": newPost.summary
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updatePost(newPost) {
        return axios({
            method: 'put',
            url: '/api/posts/',
            data: {
                "title": newPost.title,
                "content": newPost.content,
                "updateTime": newPost.updateTime,
                "mainPic": newPost.mainPicture,
                "summary": newPost.summary
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deletePost(id) {
        return axios({
            method: 'delete',
            url: '/api/posts/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default post;