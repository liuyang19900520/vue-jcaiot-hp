<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed @click="link2page('/')">{{$t("home")}}</v-btn>
      <v-btn depressed @click="link2page('/members')">{{$t("members")}}</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn depressed dark v-on="on">
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
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <input type="text" v-model="$store.state.message.lang" />
        <router-view name="web"></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import routerUtils from "../../utils/routerUtils";

export default {
  name: "WebView",
  data: () => ({
    items: [
      { name: "en", title: "English" },
      { name: "jp", title: "日本語" },
      { name: "zh", title: "简体中文" }
    ]
  }),
  methods: {
    link2page: routerUtils.link2page,
    createLangUrl: routerUtils.createLangUrl,
    changeLang: function(lang) {
      this.$store.dispatch("message/setLang", lang);
      let toPath = this.createLangUrl();
      this.$router.push(toPath);
      this.$i18n.locale = lang;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
