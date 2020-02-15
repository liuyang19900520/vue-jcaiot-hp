const routerUtils = {
    link2page(url) {
        console.log("现在路由", this.$route.path);
        // let routeLang = this.$route.params.lang;
        let toLang = this.$store.state.message.lang;
        if (toLang == "zh") {
            url = "/" + url;
        } else {
            url = "/" + toLang + url;
        }
        if (url.startsWith("//")) {
            url = url.substr(1);
        }
        if (url != "/" && url.endsWith("/")) {
            url = url.slice(0, -1);
        }
        console.log("跳转路由", url);
        this.$router.push(url);
    },
    createLangUrl(fromLang) {
        let toLang = this.$store.state.message.lang;
        console.log("fromLang", fromLang);
        console.log("toLang", toLang);
        let toPath = this.$route.path;
        console.log("toPath修改前", toPath);

        if (toPath.startsWith("/en")) {
            toPath = toPath.replace("/en", "");
        } else if (toPath.startsWith("/jp")) {
            toPath = toPath.replace("/jp", "");
        }
        if (toPath.endsWith("/")) {
            toPath = toPath.slice(0, -1);
        }


        if (toLang === 'zh') {
            toPath = "/";
        } else {
            toPath = "/" + toLang + toPath;
        }
        return toPath;
    }
}
export default routerUtils;