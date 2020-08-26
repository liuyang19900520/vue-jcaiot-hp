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
};
export default expert;