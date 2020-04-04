<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>


                <v-list-item v-for="(menu,index) in menus" :key="index" link @click="link2pageAdmin(menu.link)">
                    <v-list-item-content>
                        <v-list-item-title>{{menu.title}}++++{{index}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link @click="link2pageAdmin('/admin/banner')">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
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
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
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
            listMenus() {

            }
        }, created() {
            let self = this;
            this.$api.auth.listMenus().then((res) => {
                    console.log(res)
                    self.menus = res.data;
                }
            )
        }
    }
</script>


<style scoped>

</style>