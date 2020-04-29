<template>

    <div class="center80">
        <h1 class="center">刘社长出系我们的2020年的尚颖慧</h1>
        <br/>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="3"></v-img>
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
            mkValue: "# vue-jcaiot-hp\n" +
                "\n" +
                "## Project setup\n" +
                "```\n" +
                "npm install\n" +
                "```\n" +
                "\n" +
                "### Compiles and hot-reloads for development\n" +
                "```\n" +
                "npm run serve\n" +
                "```\n" +
                "\n" +
                "### Compiles and minifies for production\n" +
                "```\n" +
                "npm run build\n" +
                "```\n" +
                "\n" +
                "### Lints and fixes files\n" +
                "```\n" +
                "npm run lint\n" +
                "```\n" +
                "\n" +
                "### Customize configuration\n" +
                "See [Configuration Reference](https://cli.vuejs.org/config/).\n",
        }),
        methods: {},

    };
</script>

<style scoped>
    .center80 {
        width: 100%;
        margin-left: 15%;
        margin-right: 15%;
    }

    .center {
        text-align: center;
        margin: 2% auto;
    }

    .mk {
        width: 100%;
    }


</style>
