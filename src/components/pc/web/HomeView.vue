<template>
  <div>{{banner}}</div>
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
    this.$vuetify.theme.dark = true;
    this.getBanner();
  },
  methods: {
    getBanner: function() {
      let lang = this.$store.state.message.lang;
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
