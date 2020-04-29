import axios from '../utils/axiosUtils';
const banner = {
    selectBanner(lang) {
        return axios.get("/banners/" + lang);
    }
}
export default banner;