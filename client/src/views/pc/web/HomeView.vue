<template>
    <div>
        <div class="block">
            <h2 class="center">{{bannerTitle}}</h2>
            <br/>
            <Carousels class="carousels"></Carousels>
            <br/>
            <h4>{{bannerContent}}
            </h4>
        </div>
        <div class="block">
            <h3>最新信息</h3>
            <br/>
            <div class="post-card-list">
                <HomePostCard v-for="(post, i) in posts" class="post-card-margin" :key="i"
                              :post-img="post.mainpic"
                              :post-summary="post.summary"
                              :post-time="post.updatetime"
                              :post-title="post.title"></HomePostCard>
            </div>
            <br/>
            <div class="center">
                <v-btn class="ma-lg-12 post-more-button" outlined color="teal" @click="link2Page('/posts')">更多信息
                </v-btn>
            </div>
        </div>
        <div class="block">
            <h3>加入我们</h3>
            <br/>
            <div class="join-us-div">
                <v-img class="join-us-item" src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                <div class="join-us-item">
                    <JoinUsForm></JoinUsForm>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Carousels from "../../../components/pc/web/Carousels";
    import HomePostCard from "../../../components/pc/web/HomePostCard";
    import JoinUsForm from "../../../components/pc/web/JoinUsForm";
    import routerUtils from '../../../utils/routerUtils';

    export default {
        components: {Carousels, JoinUsForm, HomePostCard},
        data: () => ({
            bannerTitle: null,
            bannerContent: null,
            posts: null,
        }),
        methods: {
            getBanner: function () {
                let lang = this.$store.state.message.lang;
                this.$api.banner.selectBanner(lang).then(res => {
                    this.bannerTitle = res.data.banner;
                    this.bannerContent = res.data.content;
                });
            },
            getPostMain: function () {
                this.$api.post.selectPosts().then(res => {
                    console.log(res);
                    this.posts = res.data;
                })
            },
            link2Page: routerUtils.link2page,
        },
        watch: {
            "$route.path": "getBanner"
        },
        created() {
            this.getBanner();
            this.getPostMain();
        },
    };
</script>

<style scoped>
    .block {
        margin-left: 2%;
        margin-right: 2%;
        padding: 1%;
    }

    .center {
        text-align: center;
        margin: 0 auto;
    }

    .post-card-list {
        display: flex;
        flex-basis: 40%;
        white-space: nowrap;
        justify-content: center;
        overflow-x: auto;
        flex-shrink: 0;
    }

    .post-card-margin {
        flex: 1;
        width: 30%;

    }

    .join-us-div {
        display: flex;
        flex-direction: row;
    }

    .join-us-item {
        flex-grow: 1; /* default 0 */
        margin-left: 2%;
        margin-right: 2%;
    }

    .post-more-button {
        width: 15%;
    }

    .carousels {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }

</style>
