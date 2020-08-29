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
                id="photoupload"
                v-model="mainPicture"
                label="选择上传文章缩略图片"
                filled
                prepend-icon="mdi-camera"
                @change="upload"
        ></v-file-input>
        <v-img :src="this.mainPicture"></v-img>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-4 align-center" @click="submit">submit</v-btn>
    </div>
</template>

<script>
    import s3Utils from "../../../utils/s3Utils";
    export default {
        name: "AssociationEditView",
        data: () => ({
            title: '',
            summary: '',
            mainPicture: '',
            content: null,
            _id: null,
            post: {},
        }),
        methods: {
            upload() {
                const files = document.getElementById("photoupload").files;
                if (files.length) {
                    let url = s3Utils.addPhoto("posts");
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
                }else{
                    this.createPost();
                }
            },
            findAssociation: function (id) {
                this.$api.association.findAssociationById(id).then(res => {
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
            this.findAssociation(this.$route.params.postId);
        }
    }
</script>

<style scoped>

</style>