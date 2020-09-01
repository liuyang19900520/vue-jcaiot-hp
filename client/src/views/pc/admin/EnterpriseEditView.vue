<template>
  <div>
    <v-text-field
        v-model="enterprise.name"
        label="Please enter the enterprise name"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="enterprise.detail"
        label="Please enter the enterprise details"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-file-input
        v-model="uploadFile"
        label="Please upload the enterprise picture"
        filled
        prepend-icon="mdi-camera"
        @change="upload"
    ></v-file-input>
    <br/>
    <v-img :src="pictureUrl"></v-img>
    <v-spacer></v-spacer>
    <v-btn color="primary" class="mr-4 align-center" @click="submit">submit</v-btn>
  </div>
</template>

<script>
import s3Utils from "../../../utils/s3Utils";

export default {
  name: "EnterpriseEditView",

  data: () => ({
    enterprise: {},
    uploadFile: '',
    pictureUrl: '',
  }),

  methods: {
    upload() {
      const file = this.uploadFile
      if (file) {
        s3Utils.addPhoto("enterprises", file).then((value) => {
          this.pictureUrl = value;
        });
      }
    },
    submit() {
      this.getForm();
      this.enterprise._id = this.$route.params.enterpriseId;
      if (this.enterprise._id) {
        this.updateEnterprise();
      } else {
        this.createEnterprise();
      }
    },
    findEnterprise: function (id) {
      this.$api.enterprise.findEnterpriseById(id).then(res => {
        this.enterprise = res.data;
        this.pictureUrl = res.data.picture
      })
    },
    createEnterprise: function () {
      this.$api.enterprise.createEnterprise(this.enterprise).then(res => {
        console.log(res.data);
        this.$router.push("/admin/enterprises");
      })
    },
    updateEnterprise: function () {
      this.$api.enterprise.updateEnterprise(this.enterprise).then(res => {
        console.log(res.data);
        this.$router.push("/admin/enterprises");
      })
    },
    getForm: function () {
      this.enterprise.picture = this.pictureUrl;
      let dateNow = new Date();
      this.enterprise.updateTime = dateNow.getFullYear() + '/'
          + (dateNow.getMonth() + 1 < 10 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1) + '/'
          + (dateNow.getDate() < 10 ? '0' + (dateNow.getDate()) : dateNow.getDate())
      console.log(this.enterprise)
    }
  },

  created() {
    if (this.$route.params.enterpriseId) {
      this.findEnterprise(this.$route.params.enterpriseId);
    }

  }
}
</script>

<style scoped>

</style>