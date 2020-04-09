<template>
    <div>
        <div dense class="center80">
            <h2>{{item.title}}</h2>


        </div>


    </div>
</template>

<script>
    export default {
        name: "PostView",
        data: () => ({
            page: 1,
            item:
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: '刘劲博士组织2020年IOT协会赏樱会',
                    date: '2020/04/09',
                    summary: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。Java可运行于多个平台，如Windows, Mac' +
                        'OS，及其他多种U NIX版本的系统。本教程通过简单的实例将让大家更好的了解JAVA编程语言。'
                }
        }),
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