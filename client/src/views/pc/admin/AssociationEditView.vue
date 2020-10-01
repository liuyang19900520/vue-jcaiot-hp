<template>
  <div>
    <v-text-field
        v-model="association.name"
        label="Please enter the association name"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="association.detail"
        label="Please enter the association name"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-file-input
        v-model="uploadFile"
        label="Please upload the association picture"
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
  name: "AssociationEditView",

  data: () => ({
    association: {},
    uploadFile: '',
    pictureUrl: '',
  }),

  methods: {
    upload() {
      const file = this.uploadFile
      if (file) {
        s3Utils.addPhoto("associations", file).then((value) => {
          this.pictureUrl = value;
        });
      }
    },
    submit() {
      this.getForm();
      this.association._id = this.$route.params.associationId;
      if (this.association._id) {
        this.updateAssociation();
      } else {
        this.createAssociation();
      }
    },
    findAssociation: function (id) {
      this.$api.association.findAssociationById(id).then(res => {
        this.association = res.data;
        this.pictureUrl = res.data.picture
      })
    },
    createAssociation: function () {
      this.$api.association.createAssociation(this.association).then(res => {
        console.log(res.data);
        this.$router.push("/admin/associations");
      })
    },
    updateAssociation: function () {
      this.$api.association.updateAssociation(this.association).then(res => {
        console.log(res.data);
        this.$router.push("/admin/associations");
      })
    },
    getForm: function () {
      this.association.picture = this.pictureUrl;
      this.association.updateUser = storage.get("username");
      this.association.updateTime = new Date();
      // this.association.updateTime = dateNow.getFullYear() + '/'
      //     + (dateNow.getMonth() + 1 < 10 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1) + '/'
      //     + (dateNow.getDate() < 10 ? '0' + (dateNow.getDate()) : dateNow.getDate())
    }
  },

  created() {
    if (this.$route.params.associationId) {
      this.findAssociation(this.$route.params.associationId);
    }

  }
}
</script>

<style scoped>

</style>