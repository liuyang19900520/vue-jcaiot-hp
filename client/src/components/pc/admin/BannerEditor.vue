<template>
    <div class="out">
        <form>
            <br/>
            <v-text-field
                    v-model="bannerTitle"
                    label="标题"
                    required
            ></v-text-field>
            <br/>
            <v-textarea
                    clearable
                    clear-icon="cancel"
                    label="正文"
                    v-model="bannerContent"
                    auto-grow></v-textarea>
            <div>
                <v-spacer></v-spacer>
                <v-btn color="success"
                       class="mr-4" @click="submit">submit
                </v-btn>
            </div>


            <v-snackbar
                    v-model="snackbar"
            >
                {{ text }}
                <v-btn
                        color="pink"
                        text
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
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
            bannerTitle: null,
            bannerContent: null,
            snackbar: false,
            text: null,
        }),
        methods: {
            getBanner: function () {
                let self = this;
                this.$api.banner.selectBanner(this.tabLang).then(res => {
                    if (res.code == 0) {
                        self.bannerTitle = res.data.banner;
                        self.bannerContent = res.data.content;
                    }
                }).catch((e) => {
                    console.error(e)
                });
            },
            submit: function () {
                this.$api.banner.editBanner(this.tabLang, this.bannerTitle, this.bannerContent).then(res => {
                    if (res.code == 0) {
                        this.snackbar = true;
                        this.text = "保存成功";
                    }
                });
            }
        },
        created() {
            this.getBanner();
        }
    }
</script>

<style scoped>
    .out {
        margin: 2%;
    }

</style>