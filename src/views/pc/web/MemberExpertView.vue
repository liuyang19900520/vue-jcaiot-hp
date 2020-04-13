<template>
    <ExpertCard v-for="index in 10" :key="index"></ExpertCard>
</template>
<script>
    import ExpertCard from "../../../components/pc/web/ExpertCard";

    export default {
        name: "MemberExpertView",
        components: {ExpertCard},
        data: () => ({
            show: false,
        }),
    }
</script>

<style scoped>

</style>