<template>

    <div>
        <v-toolbar flat>
            <template>
                <v-tabs v-model="tabs">
                    <v-tab>简体中文</v-tab>
                    <v-tab>日本語</v-tab>
                    <v-tab>English</v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
            <v-tab-item>
                中文
                <BannerEditor :tabLang="'zh'"></BannerEditor>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    日文
                    <BannerEditor :tabLang="'jp'"></BannerEditor>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    英文
                    <BannerEditor :tabLang="'en'"></BannerEditor>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    import BannerEditor from "../../../components/pc/admin/BannerEditor";

    export default {
        name: "BannerView",
        components: {BannerEditor},

        data() {
            return {
                tabs: null,
            }
        },
    }
</script>

<style scoped>

</style>