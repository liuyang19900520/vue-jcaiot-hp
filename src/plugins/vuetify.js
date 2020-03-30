import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: ['mdi', 'fa', 'mdiSvg', 'md', 'fa4']// 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: colors.teal,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            }
        },
    },
});
