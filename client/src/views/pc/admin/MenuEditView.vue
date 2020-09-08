<template>
  <div>
    <v-text-field
        v-model="menu.title"
        label="Please enter the menu name"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="menu.link"
        label="Please enter the menu name"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-text-field
        v-model="menu.icon"
        label="Please enter the menu name"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-text-field
        v-model="menu.order"
        label="Please enter the menu name"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <br/>
    <v-img :src="pictureUrl"></v-img>
    <v-spacer></v-spacer>
    <v-btn color="primary" class="mr-4 align-center" @click="submit">submit</v-btn>
  </div>
</template>

<script>
import s3Utils from "../../../utils/s3Utils";
import storage from "@/store/storage";

export default {
  name: "MenuEditView",

  data: () => ({
    menu: {},
    uploadFile: '',
    pictureUrl: '',
  }),

  methods: {
    upload() {
      const file = this.uploadFile
      if (file) {
        s3Utils.addPhoto("menus", file).then((value) => {
          this.pictureUrl = value;
        });
      }
    },
    submit() {
      this.getForm();
      this.menu._id = this.$route.params.menuId;
      if (this.menu._id) {
        this.updateMenu();
      } else {
        this.createMenu();
      }
    },
    findMenu: function (id) {
      this.$api.menu.findMenuById(id).then(res => {
        this.menu = res.data;
        this.pictureUrl = res.data.picture
      })
    },
    createMenu: function () {
      this.$api.menu.createMenu(this.menu).then(res => {
        console.log(res.data);
        this.$router.push("/admin/menus");
      })
    },
    updateMenu: function () {
      this.$api.menu.updateMenu(this.menu).then(res => {
        console.log(res.data);
        this.$router.push("/admin/menus");
      })
    },
    getForm: function () {
      this.menu.picture = this.pictureUrl;
      this.menu.updateUser = storage.get("username");
      this.menu.updateTime = new Date();
      console.log(this.menu)
    }
  },

  created() {
    if (this.$route.params.menuId) {
      this.findMenu(this.$route.params.menuId);
    }

  }
}
</script>

<style scoped>

</style>