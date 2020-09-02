<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list dense>
        <v-list-item v-for="(menu,index) in menus" :key="index" link @click="link2pageAdmin(menu.link)">
          <v-list-item-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="teal"
        dark
    >
      <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      <v-toolbar-title>管理画面</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed @click="link2page('/')">Home→</v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view name="dashboard"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import routerUtils from "../utils/routerUtils";

export default {
  name: "AdminLayout",
  data: () => ({
    drawer: null,
    menus: null,
  }),
  methods: {
    link2pageAdmin: routerUtils.link2pageAdmin,
    link2page: routerUtils.link2page,
  },
  created() {
    let self = this;
    this.$api.menu.listMenus().then((res) => {
          console.log(res)
          self.menus = res.data;
        }
    )
  }
}
</script>


<style scoped>

</style>