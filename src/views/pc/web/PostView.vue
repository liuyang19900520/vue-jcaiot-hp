<template>
    <div class="center80">

        <h1 class="center">刘社长出系我们的2020年的尚颖慧</h1>
        <br/>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="3"></v-img>
        <br/>
        <mavon-editor v-model="mkValue"/>

    </div>
</template>

<script>

    export default {

        props: {
            source: String
        },
        data: () => ({mkValue: null,}),
        created() {

        },
        methods: {},
        watch: {
            "$route.path": "getBanner"
        }
    };
</script>

<style scoped>
    .center80 {
        margin-left: 15%;
        margin-right: 15%;
    }

    .center {
        text-align: center;
        margin: 2% auto;
    }


</style>
