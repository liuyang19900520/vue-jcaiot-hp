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
};
export default association;