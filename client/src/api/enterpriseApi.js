import axios from '../utils/axiosUtils';

const enterprise = {
    selectEnterprises() {
        return axios({
            method: 'get',
            url: '/api/enterprises',
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    findEnterpriseById(id) {
        return axios({
            method: 'get',
            url: '/api/enterprises/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createEnterprise(newEnterprise) {
        return axios({
            method: 'post',
            url: '/api/enterprises/',
            data: {
                "name": newEnterprise.name,
                "detail": newEnterprise.detail,
                "picture": newEnterprise.picture,
                "address": newEnterprise.address,
                "updateTime": newEnterprise.updateTime,
                "updateUser": newEnterprise.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updateEnterprise(newEnterprise) {
        return axios({
            method: 'put',
            url: '/api/enterprises/',
            data: {
                "_id": newEnterprise._id,
                "name": newEnterprise.name,
                "detail": newEnterprise.detail,
                "updateTime": newEnterprise.updateTime,
                "picture": newEnterprise.picture,
                "address": newEnterprise.address,
                "updateUser": newEnterprise.updateUser,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deleteEnterprise(id) {
        return axios({
            method: 'delete',
            url: '/api/enterprises/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default enterprise;