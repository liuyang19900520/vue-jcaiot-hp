<template>
    <div>
        <form>
            <v-textarea
                    clearable
                    clear-icon="cancel"
                    :label="banner.banner"
                    v-model="banner.content"></v-textarea>
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
            banner: null,
        }),
        methods: {
            getBanner: function () {
                this.$api.banner.selectBanner(this.tabLang).then(res => {
                    console.log(res);
                    this.banner = res.data;
                });
            },
            submit: function () {

            }
        },
        created() {
            this.getBanner();

        }
    }
</script>

<style scoped>

</style>