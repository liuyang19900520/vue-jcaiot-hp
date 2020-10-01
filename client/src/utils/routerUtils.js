const routerUtils = {
    link2page(url) {
        let toLang = this.$store.state.message.lang;
        if (toLang === "zh") {
            url = "/" + url;
        } else {
            url = "/" + toLang + url;
        }
        if (url.startsWith("//")) {
            url = url.substr(1);
        }
        if (url !== "/" && url.endsWith("/")) {
            url = url.slice(0, -1);
        }
        this.$router.push(url);
    },
    link2pageAdmin(url) {
        this.$router.push(url);
    },
    createLangUrl() {
        let toLang = this.$store.state.message.lang;
        let toPath = this.$route.path;
        if (toPath.startsWith("/en")) {
            toPath = toPath.replace("/en", "");
        } else if (toPath.startsWith("/jp")) {
            toPath = toPath.replace("/jp", "");
        }
        if (toLang !== 'zh') {
            toPath = "/" + toLang + toPath;
        } else {
            toPath = "/" + toPath;
        }
        if (toPath.endsWith("/") && toPath !== "/") {
            toPath = toPath.slice(0, -1);
        }
        if (toPath.startsWith("//") ) {
            toPath = toPath.slice(1);
        }
        return toPath;
    }
};
export default routerUtils;