<template>
    <v-carousel hide-delimiters>
        <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "Carousels",
        data () {
            return {
                items: [
                    {
                        src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601644810391_5.jpg',
                    },
                    {
                        src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601644969581_6.jpg',
                    },
                    {
                        src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601643628737_3.jpg',
                    },
                    {
                        src: 'https://jcaiot.s3-ap-northeast-1.amazonaws.com/posts/1601643719558_4.jpeg',
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>