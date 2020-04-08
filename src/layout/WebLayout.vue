<template>
    <v-app id="inspire">
        <v-app-bar app clipped-left color="primary">
            <v-toolbar-title class="white--text font-weight-bold"> {{$t("title")}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="link2page('/')">{{$t("home")}}</v-btn>
            <v-btn color="primary" depressed @click="link2page('/members')">{{$t("members")}}</v-btn>
            <v-menu offset-y color="primary">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" depressed v-on="on">
                        {{$t("lang")}}
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title @click="changeLang(item.name)">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn color="primary" depressed @click="link2pageLogin()">{{$t("signIn")}}</v-btn>
        </v-app-bar>
        <v-content>
            <v-container class="fill-height" fluid>
                <router-view name="pc-web"></router-view>
            </v-container>
        </v-content>
        <v-footer padless>
            <v-card class="flex primary" flat>

                <v-card-title class=" white--text">

                    <span class="subheading "> {{$t("footerText")}}</span>
                    <v-spacer></v-spacer>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            dark
                            icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="py-2 white--text text-center">
                    <h4>会刊公众号： 日本AI•IoT最前线(每周更新)</h4>
                    {{ new Date().getFullYear() }} — <strong>jcaiot.com (created by liuyang19900520)</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
    import routerUtils from "../utils/routerUtils";

    export default {
        name: "WebLayout",
        data: () => ({
            items: [
                {name: "en", title: "English"},
                {name: "jp", title: "日本語"},
                {name: "zh", title: "简体中文"}
            ], icons: [
                ' mdi-facebook',
                ' mdi-twitter',
                ' mdi-google-plus',
                ' mdi-linkedin',
                ' mdi-instagram',
            ],
        }),
        methods: {
            link2pageLogin: function () {
                this.$router.push("/login")
            },
            link2page: routerUtils.link2page,
            createLangUrl: routerUtils.createLangUrl,
            changeLang: function (lang) {
                this.$store.dispatch("message/setLang", lang);
                let toPath = this.createLangUrl();
                this.$router.push(toPath);
                this.$i18n.locale = lang;
            }
        },
        created() {
            this.$vuetify.theme.light = true;
        }
    };
</script>

<style scoped>

</style>