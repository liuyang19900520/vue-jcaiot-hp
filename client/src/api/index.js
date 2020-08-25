/**
 * api接口的统一出口
 */

import banner from './bannersApi';
import auth from './authApi';
import menu from './menuApi';
import post from './postApi';
import association from './associationApi';
import enterprise from './enterpriseApi';

// 导出接口
export default {
    banner, auth, menu, post, association, enterprise
};