<template>
  <v-card
      class="mx-auto margin-card"
      max-width="400"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        :src="postImg"
    >
      <v-card-title>{{ postTitle }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ postTime |moment}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ postSummary }}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange" text @click="link2Page('/posts/'+postId)">
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import routerUtils from "@/utils/routerUtils";
import moment from "moment";

export default {
  name: "HomePostCard",
  data: () => ({}),
  props: {
    postTitle: null,
    postImg: {
      default: require('@/assets/default-pic.png')
    },
    postTime: null,
    postSummary: null,
    postId: null,
  },
  methods:{
    link2Page: routerUtils.link2page,
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss');
    }
  }
}
</script>

<style scoped>
.margin-card {
  margin: 2%;
}


</style>