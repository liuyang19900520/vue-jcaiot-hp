import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import router from './router/';
import store from './store';
import api from './api'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false;

new Vue({
    vuetify,
    i18n,
    router,
    store,
    mavonEditor,
    render: h => h(App)
}).$mount('#app');