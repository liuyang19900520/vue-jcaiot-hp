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
        <v-btn color="primary"
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

import storage from "@/store/storage";

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
      this.$api.banner.selectBanner(this.tabLang).then(res => {
        if (res.code === '0') {
          this.bannerTitle = res.data.banner;
          this.bannerContent = res.data.content;
        }else {
          console.error(res)
        }
      }).catch((e) => {
        console.error(e)
      });
    },
    submit: function () {
      this.$api.banner.editBanner(this.tabLang, this.bannerTitle, this.bannerContent,Date.now(),storage.get("username")).then(res => {
        if (res.code === '0') {
          this.snackbar = true;
          this.text = "Success";
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