<template>

    <div class="center80">
        <h1 class="center">{{title}}</h1>
        <br/>
        <v-img :src="this.mainPicture"></v-img>
        <br/>
        <mavon-editor class="mk"
                      :previewBackground="'#FFFFFFFF'"
                      :boxShadow="false"
                      :subfield="false"
                      :defaultOpen="'preview'"
                      :editable="false"
                      :toolbarsFlag="false"
                      v-model="mkValue"/>
    </div>

</template>

<script>
    export default {
        props: {
            source: String
        },
        data: () => ({
            title: null,
            mainPicture: '',
            mkValue: ''
        }),
        methods: {
            findPost: function (id) {
                this.$api.post.findPostById(id).then(res => {
                    console.log(res.data);
                    this.title = res.data.title;
                    this.mainPicture = res.data.mainPic;
                    this.mkValue = res.data.content;
                })
            },
        },
        mounted() {
            console.log(this.$route.params.postId)
            this.findPost(this.$route.params.postId);

        }


    };
</script>

<style scoped>
    .center80 {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }

    .center {
        text-align: center;
        margin: 2% auto;
    }

    .mk {
        width: 100%;
    }


</style>
