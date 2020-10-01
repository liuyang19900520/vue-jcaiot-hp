
<template>
  <div>
    <v-expansion-panels
        v-model="panel"
        multiple
    >
      <v-expansion-panel
          v-for="(item,i) in experts"
          :key="i"
      >
        <v-img :src="item.picture"></v-img>
        <v-expansion-panel-header>
          <h2>
            {{ item.name }}
          </h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.detail }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>

export default {
  name: "MemberExpertView",
  data: () => ({
    panel: [],
    experts: [],
  }),
  methods: {
    all() {
      for (let m = 0; m < this.experts.length; m++) {
        if (!this.panel.includes(m)) {
          this.panel.push(m);
        }
      }
    },
    // Reset the panel
    none() {
      this.panel = []
    },
    findExperts: function () {
      this.$api.expert.selectExperts().then(res => {
        this.experts = res.data;
        this.all();
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