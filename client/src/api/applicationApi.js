import axios from '../utils/axiosUtils';

const application = {
    selectApplications() {
        return axios({
            method: 'get',
            url: '/api/applications',
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    findApplicationById(id) {
        return axios({
            method: 'get',
            url: '/api/applications/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    createApplication(newApplication) {
        return axios({
            method: 'post',
            url: '/api/applications/',
            data: {
                "name": newApplication.name,
                "email": newApplication.email,
                "type": newApplication.type,
                "profile": newApplication.profile,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    updateApplication(newApplication) {
        return axios({
            method: 'put',
            url: '/api/applications/',
            data: {
                "_id": newApplication._id,
                "name": newApplication.name,
                "email": newApplication.email,
                "type": newApplication.type,
                "profile": newApplication.profile,
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    },
    deleteApplication(id) {
        return axios({
            method: 'delete',
            url: '/api/applications/' + id,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default application;