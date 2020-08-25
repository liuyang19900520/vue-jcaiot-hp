<template>
  <div class="expert-card">
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
    <ExpertCard></ExpertCard>
  </div>
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
.expert-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>