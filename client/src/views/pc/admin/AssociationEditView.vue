<template>
  <div>
    <v-text-field
        v-model="association.name"
        label="请输入协会名称"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="association.detail"
        label="请输入协会简介"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-file-input
        v-model="uploadFile"
        label="选择上传缩略协会图片"
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
        alert("成功")
        this.$router.push("/admin/associations");
      })
    },
    updateAssociation: function () {
      this.$api.association.updateAssociation(this.association).then(res => {
        console.log(res.data);
        alert("成功")
        this.$router.push("/admin/associations");
      })
    },
    getForm: function () {
      this.association.picture = this.pictureUrl;
      let dateNow = new Date();
      this.association.updateTime = dateNow.getFullYear() + '/'
          + (dateNow.getMonth() + 1 < 10 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1) + '/'
          + (dateNow.getDate() < 10 ? '0' + (dateNow.getDate()) : dateNow.getDate())
      console.log(this.association)
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