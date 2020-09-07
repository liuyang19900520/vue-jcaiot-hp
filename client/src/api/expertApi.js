import axios from '../utils/axiosUtils';

const expert = {
    selectExperts() {
        return axios({
            method: 'get',
            url: '/api/experts',
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    findExpertById(id) {
        return axios({
            method: 'get',
            url: '/api/experts/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createExpert(newExpert) {
        return axios({
            method: 'post',
            url: '/api/experts/',
            data: {
                "name": newExpert.name,
                "detail": newExpert.detail,
                "updateTime": newExpert.updateTime,
                "picture": newExpert.picture,
                "updateUser": newExpert.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updateExpert(newExpert) {
        return axios({
            method: 'put',
            url: '/api/experts/',
            data: {
                "_id": newExpert._id,
                "name": newExpert.name,
                "detail": newExpert.detail,
                "updateTime": newExpert.updateTime,
                "picture": newExpert.picture,
                "updateUser": newExpert.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deleteExpert(id) {
        return axios({
            method: 'delete',
            url: '/api/experts/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default expert;