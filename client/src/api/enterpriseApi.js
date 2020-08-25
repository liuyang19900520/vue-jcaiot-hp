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
};
export default enterprise;