<template>
  <div>
    <v-text-field
        v-model="title"
        label="请输入标题"
        prepend-icon="mdi-table"
        required
    ></v-text-field>
    <v-text-field
        v-model="summary"
        label="请输入梗概"
        prepend-icon="mdi-bookmark-minus-outline"
        required
    ></v-text-field>
    <v-file-input
        v-model="uploadFile"
        label="选择上传文章缩略图片"
        filled
        prepend-icon="mdi-camera"
        @change="upload"
    ></v-file-input>
    <v-img :src="this.mainPicture"></v-img>
    <mavon-editor ref=md v-model="content" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    <br>
    <v-spacer></v-spacer>
    <v-btn color="primary" class="mr-4 align-center" @click="submit">submit</v-btn>
  </div>
</template>

<script>
import s3Utils from "../../../utils/s3Utils";

export default {
  name: "PostEditView",
  data: () => ({
    title: '',
    summary: '',
    mainPicture: '',
    content: null,
    _id: null,
    post: {},
    uploadFile: null,
  }),
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      s3Utils.addPictureInsidePost($file).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, url);
      })
    },
    $imgDel(pos, $file) {
      s3Utils.addPictureInsidePost($file).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, url);
      })
    },
    upload() {
      const file = this.uploadFile;
      alert(file);
      if (file) {
        let url = s3Utils.addPhoto("posts", file);
        url.then((value) => {
          this.mainPicture = value;
        });
      }
    },
    submit() {
      this.getPostForm();
      this.post._id = this.$route.params.postId;
      if (this.post._id) {
        this.updatePost();
      } else {
        this.createPost();
      }
    },
    findPost: function (id) {
      this.$api.post.findPostById(id).then(res => {
        console.log(res.data);
        this.title = res.data.title;
        this.summary = res.data.summary;
        this.mainPicture = res.data.mainPic;
        this.content = res.data.content;
      })
    },
    createPost: function () {
      this.$api.post.createPost(this.post).then(res => {
        console.log(res.data);
        alert("成功")
        this.$router.push("/admin/posts");
      })
    },
    updatePost: function () {
      this.$api.post.updatePost(this.post).then(res => {
        console.log(res.data);
        alert("成功")
        this.$router.push("/admin/posts");
      })
    },
    getPostForm: function () {
      this.post.title = this.title;
      this.post.summary = this.summary;
      this.post.mainPicture = this.mainPicture;
      this.post.content = this.content;
      let dateNow = new Date();
      this.post.updateTime = dateNow.getFullYear() + '/'
          + (dateNow.getMonth() + 1 < 10 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1) + '/'
          + (dateNow.getDate() < 10 ? '0' + (dateNow.getDate()) : dateNow.getDate())
      console.log(this.post)
    }
  },
  created() {
    this.findPost(this.$route.params.postId);
  }
}
</script>

<style scoped>

</style>