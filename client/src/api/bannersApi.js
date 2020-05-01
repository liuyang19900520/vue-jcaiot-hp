import axios from '../utils/axiosUtils';

const banner = {
    selectBanner(lang) {
        return axios.get("/banners/" + lang);
    },
    editBanner(lang, title, content) {
        return axios({
            method: 'post',
            url: '/banners',
            data: {
                lang: lang,
                banner: title,
                content: content
            },
            headers: {
                'content-type': 'application/json'
            }
        });
    }
};
export default banner;