import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';

Vue.use(VueI18n);

function loadLocaleMessages() {
    //加载json文件
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    })
    return messages;
}

export default new VueI18n({
    //判断当前环境语言
    locale: store.state.locale || 'zh',
    fallbackLocale: 'en',
    // locale: process.env.VUE_APP_I18N_LOCALE || 'zh',
    // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
    messages: loadLocaleMessages()
});