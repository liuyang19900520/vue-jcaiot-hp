<template>
  <div>
    <v-text-field
        v-model="expert.name"
        label="Please enter the expert name"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="expert.detail"
        label="Please enter the expert details"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-file-input
        v-model="uploadFile"
        label="Please upload the expert picture"
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
import storage from "@/store/storage";

export default {
  name: "ExpertEditView",

  data: () => ({
    expert: {},
    uploadFile: '',
    pictureUrl: '',
  }),

  methods: {
    upload() {
      const file = this.uploadFile
      if (file) {
        s3Utils.addPhoto("experts", file).then((value) => {
          this.pictureUrl = value;
        });
      }
    },
    submit() {
      this.getForm();
      this.expert._id = this.$route.params.expertId;
      if (this.expert._id) {
        this.updateExpert();
      } else {
        this.createExpert();
      }
    },
    findExpert: function (id) {
      this.$api.expert.findExpertById(id).then(res => {
        this.expert = res.data;
        this.pictureUrl = res.data.picture
      })
    },
    createExpert: function () {
      this.$api.expert.createExpert(this.expert).then(res => {
        console.log(res.data);
        this.$router.push("/admin/experts");
      })
    },
    updateExpert: function () {
      this.$api.expert.updateExpert(this.expert).then(res => {
        console.log(res.data);
        this.$router.push("/admin/experts");
      })
    },
    getForm: function () {
      this.expert.picture = this.pictureUrl;
      this.expert.updateTime =new Date();
      this.expert.updateUser=storage.get("username");
      console.log(this.expert)
    }
  },

  created() {
    if (this.$route.params.expertId) {
      this.findExpert(this.$route.params.expertId);
    }

  }
}
</script>

<style scoped>

</style>