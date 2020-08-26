<template>
  <div class="expert-card">

    <ExpertCard v-for="(expert, i) in experts" class="post-card-margin" :key="i"
                :name="expert.name"
                :detail="expert.detail"
                :picture="expert.picture"></ExpertCard>
  </div>
</template>
<script>
import ExpertCard from "../../../components/pc/web/ExpertCard";

export default {
  name: "MemberExpertView",
  components: {ExpertCard},
  data: () => ({
    experts: '',
  }),
  methods: {
    findExperts: function () {
      this.$api.expert.selectExperts().then(res => {
        this.experts = res.data;
      })
    },
  },
  mounted() {
    this.findExperts();

  }
}
</script>

<style scoped>
.expert-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 2%;
}
</style>