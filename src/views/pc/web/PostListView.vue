<template>
    <div>
        <v-row dense class="center80">
            <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
            >
                <v-card class="item-margin">
                    <div class="d-flex flex-no-wrap">
                        <v-avatar
                                class="ma-3"
                                size="180"
                                tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <div>
                            <v-card-title
                                    class="headline"
                                    v-text="item.title"
                            ></v-card-title>
                            <v-card-subtitle v-text="item.date"></v-card-subtitle>
                            <v-card-text class="text--primary">
                                <div>
                                    {{item.summary}}
                                </div>
                            </v-card-text>
                            <v-card-actions >
                                <v-spacer></v-spacer>
                                <v-btn
                                        text
                                        color="teal"
                                        @click="link2Page('/posts/123')"
                                >
                                    Learn More
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center">
            <v-pagination
                    v-model="page"
                    :length="4"
                    circle
            ></v-pagination>
        </div>
    </div>
</template>

<script>
    import routerUtils from "../../../utils/routerUtils";
    export default {
        name: "PostListView",
        data: () => ({
            page: 1,
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: '刘劲博士组织2020年IOT协会赏樱会',
                    date: '2020/04/09',
                    summary: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。Java可运行于多个平台，如Windows, Mac' +
                        'OS，及其他多种U NIX版本的系统。本教程通过简单的实例将让大家更好的了解JAVA编程语言。'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    date: '2020/04/09',
                    summary: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。Java可运行于多个平台，如Windows, Mac' +
                        'OS，及其他多种U NIX版本的系统。本教程通过简单的实例将让大家更好的了解JAVA编程语言。'

                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    date: '2020/04/09',
                    summary: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。Java可运行于多个平台，如Windows, Mac' +
                        'OS，及其他多种U NIX版本的系统。本教程通过简单的实例将让大家更好的了解JAVA编程语言。'

                },
            ],
        }),
        methods: {
            link2Page:routerUtils.link2page,
        },
    }
</script>

<style scoped>
    .center80 {
        margin-left: 10%;
        margin-right: 10%;
    }

    .item-margin {
        margin-bottom: 3%;
    }


</style>