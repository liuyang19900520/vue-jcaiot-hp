<template>
  <v-carousel hide-delimiters class="card">
    <v-carousel-item ref="m" class="v-carousel_item" style="width: 350px"
                     v-for="(item,i) in items"
                     :key="i"
                     :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousels",
  data() {
    return {
      items: [
        {
          src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601644810391_5.jpg',
        },
        {
          src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601644969581_6.jpg',
        },
        {
          src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601643628737_3.jpg',
        },
        {
          src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601643719558_4.jpeg',
        },
      ],
    }
  },
  mounted() {
    this.$refs.m[0].$el.firstChild.style.cssText="height:250px";
    console.log(this.$refs.m)
  }
}
</script>

<style scoped>
.card {
  height: 250px !important;
  width: 350px !important;
  border: 1px solid black;
}

.v-carousel__item {
  width: 350px !important;
  height: 250px !important;
}


</style>