import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import router from './router';
import store from './store';
import api from './api';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import moment from 'moment';



Vue.prototype.$moment = moment; //赋值使用 就是调用一下
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false;
Vue.use(mavonEditor);
new Vue({
    vuetify,
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');