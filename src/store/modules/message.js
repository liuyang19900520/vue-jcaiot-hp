export default {
    namespaced: true,
    //负责储存
    state: {
        lang: 'zh'
    },
    //负责修改,可以理解为私有方法
    mutations: {
        SET_LANGUAGE(state, lang) {
            state.lang = lang;
        }
    },
    //类似于暴露给外部的方法，简单理解为message.js进行了state的封装
    actions: {
        setLang({
            commit
        }, lang) {
            commit("SET_LANGUAGE", lang)
        }
    }
};