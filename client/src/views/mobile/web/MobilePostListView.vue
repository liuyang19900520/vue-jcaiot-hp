<template>
  <div>
    <v-row dense>
      <v-col
          v-for="(item, i) in posts"
          :key="i"
          cols="12"
      >
        <v-card class="item-margin">

          <v-img :src="item.mainPic"></v-img>

          <div class="d-flex flex-no-wrap">

            <div>
              <v-card-title
                  class="headline"
                  v-text="item.title"
              ></v-card-title>
              <v-card-subtitle>{{ item.updateTime| moment }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  {{ item.summary }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    text
                    color="orange"
                    @click="link2Page('/posts/'+item._id)"
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
          v-model="pageNo"
          :length="pageCount"
          circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import routerUtils from "../../../utils/routerUtils";
import moment from "moment";

export default {
  name: "PostListView",
  data: () => ({
    pageNo: 1,
    pageCount: null,
    posts: null,
  }),
  methods: {
    link2Page: routerUtils.link2page,
    findPostsList: function (pageNo, pageCount) {
      this.$api.post.selectPostsByPage(pageNo, pageCount).then(res => {
        console.log(res.data.content);
        this.posts = res.data.content;
        this.pageCount = res.data.countAll;
      })
    },
  },
  created() {
    this.pageNo = 1;
    this.findPostsList(this.pageNo - 1, 3);
  },
  watch: {
    pageNo: function () {
      this.findPostsList(this.pageNo - 1, 3);
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD');
    }
  }
}
</script>

<style scoped>

.item-margin {
  margin-bottom: 3%;
}


</style>