import axios from '../utils/axiosUtils';

const association = {
    selectAssociations() {
        return axios({
            method: 'get',
            url: '/api/associations',
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    findAssociationById(id) {
        return axios({
            method: 'get',
            url: '/api/associations/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createAssociation(newAssociation) {
        return axios({
            method: 'post',
            url: '/api/associations/',
            data: {
                "name": newAssociation.name,
                "detail": newAssociation.detail,
                "updateTime": newAssociation.updateTime,
                "picture": newAssociation.picture,
                "address": newAssociation.address
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updateAssociation(newAssociation) {
        return axios({
            method: 'put',
            url: '/api/associations/',
            data: {
                "_id": newAssociation._id,
                "name": newAssociation.name,
                "detail": newAssociation.detail,
                "updateTime": newAssociation.updateTime,
                "picture": newAssociation.picture,
                "address": newAssociation.address
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deleteAssociation(id) {
        return axios({
            method: 'delete',
            url: '/api/associations/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default association;