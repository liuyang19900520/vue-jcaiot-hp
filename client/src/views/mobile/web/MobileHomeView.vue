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
        <MobileHomePostCard v-for="(post, i) in posts" class="post-card-margin" :key="i"
                      :post-id="post._id"
                      :post-img="post.mainPic"
                      :post-summary="post.summary"
                      :post-time="post.updateTime"
                      :post-title="post.title"></MobileHomePostCard>
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
        <div class="join-us-item">
          <JoinUsForm></JoinUsForm>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Carousels from "../../../components/pc/web/Carousels";
import MobileHomePostCard from "../../../components/mobile/web/MobileHomePostCard";
import JoinUsForm from "../../../components/pc/web/JoinUsForm";
import routerUtils from '../../../utils/routerUtils';

export default {
  components: {Carousels, JoinUsForm, MobileHomePostCard},
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
    getPostMain: function (num) {
      this.$api.post.selectMainPosts(num).then(res => {
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
    let widthWindow = window.innerWidth;
    let num = Math.floor(widthWindow / 400);
    this.getPostMain(num);
  },
};
</script>

<style scoped>
.block {
  margin-left: 1%;
  margin-right: 1%;
  padding: 1%;
}

.center {
  text-align: center;
  margin: 0 auto;
}

.post-card-list {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}

.post-card-margin {
  flex: 1;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  /* width: 88px; */
  flex-basis: 30%;
  flex-shrink: 0;
}

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
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

}

</style>
