<template>
    <div>
        <form>
            <span>{{tabLang}}</span>
            <v-textarea
                    clearable
                    clear-icon="cancel"
                    label="Text"
                    value="this.banner"
            ></v-textarea>
            <div>
                <v-spacer></v-spacer>
                <v-btn color="success"
                       class="mr-4" @click="submit">submit
                </v-btn>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "BannerEditor",
        props: {
            tabLang: {
                type: String,
            }
        },
        data: () => ({
            tabLang: null,
            banner: null,
        }),
        methods: {
            getBanner: function () {
                this.$api.banner.selectBanner(this.tabLang).then(res => {
                    console.log(res);
                    this.banner = res.data.banner;
                });
            },
        },
        created() {
            this.getBanner();
        },
        watch: {
            'tabLang': function (val) { //监听props中的属性
                this.tabLang = val;
            }
        },
    }
</script>

<style scoped>

</style>