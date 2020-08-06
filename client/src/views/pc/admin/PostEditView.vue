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
                v-model="mainPicture"
                label="选择上传文章缩略图片"
                filled
                prepend-icon="mdi-camera"
        ></v-file-input>
        <mavon-editor v-model="content"></mavon-editor>
        <br>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-4 align-center" @click="submit">submit</v-btn>

    </div>

</template>

<script>
    export default {
        name: "PostEditView",
        data: () => ({
            title:'',
            summary:'',
            mainPicture:'',
            content:null,
            post:{},
        }),
        methods: {
            submit () {
                this.post.title=this.title;
                this.post.summary=this.summary;
                this.post.mainPicture=this.mainPicture;
                this.post.content=this.content;
                let dateNow=new Date();
                this.post.updateTime=dateNow.getFullYear()+'/'
                    +(dateNow.getMonth()+1 < 10 ? '0'+(dateNow.getMonth()+1) : dateNow.getMonth()+1) +'/'
                    +(dateNow.getDate() < 10 ? '0'+(dateNow.getDate()) : dateNow.getDate())
                console.log(this.post)
                this.$api.post.createPost(this.post).then(res => {
                    console.log(res.data);
                    alert("成功")
                })
            }
        },
    }
</script>

<style scoped>

</style>