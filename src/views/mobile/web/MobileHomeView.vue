<template>
    <div>{{banner}}<span>这是我们的Mobile Home组件</span></div>
</template>

<script>
    export default {
        props: {
            source: String
        },
        data: () => ({
            banner: null
        }),
        created() {
            this.getBanner();
        },
        methods: {
            getBanner: function () {
                let lang = this.$store.state.message.lang;
                console.log("lang==========", lang);
                this.$api.banner.selectBanner(lang).then(res => {
                    console.log(res);
                    this.banner = res.data.banner;
                });
            }
        },
        watch: {
            "$route.path": "getBanner"
        }
    };
</script>
