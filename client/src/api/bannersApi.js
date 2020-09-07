import axios from '../utils/axiosUtils';

const banner = {
    selectBanner(lang) {
        return axios.get("/api/banners/" + lang);
    },
    editBanner(lang, title, content,updateTime,updateUser) {
        return axios({
            method: 'post',
            url: '/api/banners',
            data: {
                lang: lang,
                banner: title,
                content: content,
                updateTime:updateTime,
                updateUser:updateUser
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default banner;