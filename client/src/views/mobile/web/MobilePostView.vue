<template>

    <div>
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
                    this.title = res.data.title;
                    this.mainPicture = res.data.mainPic;
                    this.mkValue = res.data.content;
                })
            },
        },
        mounted() {
            this.findPost(this.$route.params.postId);

        }
    };
</script>

<style scoped>
    .center {
        text-align: center;
        margin: 2% auto;
    }

    .mk {
        width: 100%;
        z-index: 1 !important;
    }


</style>
