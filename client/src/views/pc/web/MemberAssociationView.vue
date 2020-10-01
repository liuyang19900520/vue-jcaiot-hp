<template>
  <div class="center80">
    <v-expansion-panels
        v-model="panel"
        multiple
    >
      <v-expansion-panel
          v-for="(item,i) in associations"
          :key="i"
      >
        <v-expansion-panel-header>
          <v-avatar
              class="profile"
              color="grey"
              size="120"
              tile
          >
            <v-img :src="item.picture"></v-img>
          </v-avatar>
          <v-spacer></v-spacer>
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
  name: "MemberAssociationView",

  data() {
    return {
      panel: [],
      associations: [],
    }
  },
  methods: {
    all() {
      for (let m = 0; m < this.associations.length; m++) {
        if (!this.panel.includes(m)) {
          this.panel.push(m);
        }
      }
    },
    // Reset the panel
    none() {
      this.panel = []
    },
    findAssociations: function () {
      this.$api.association.selectAssociations().then(res => {
        this.associations = res.data;
        this.all();
      })
    },
  }
  ,
  mounted() {
    this.findAssociations();

  }
}
</script>

<style scoped>
.center80 {
  margin-left: 10%;
  margin-right: 10%;
}
</style>