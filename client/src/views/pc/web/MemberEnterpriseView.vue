<template>
  <div class="center80">
    <v-expansion-panels
        v-model="panel"
        multiple
    >
      <v-expansion-panel
          v-for="(item,i) in enterprises"
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
            Header {{ item.name }}
          </h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>{{ item.detail }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "MemberEnterprise",

  data() {
    return {
      panel: [],
      enterprises: [],
    }
  },
  methods: {
    all() {
      for (let m = 0; m < this.enterprises.length; m++) {
        if (!this.panel.includes(m)) {
          this.panel.push(m);
        }
      }
    },
    // Reset the panel
    none() {
      this.panel = []
    },
    findEnterprises: function () {
      this.$api.enterprise.selectEnterprises().then(res => {
        this.enterprises = res.data;
        this.all();
      })
    },
  }
  ,
  mounted() {
    this.findEnterprises();

  }
}
</script>

<style scoped>
.center80 {
  margin-left: 10%;
  margin-right: 10%;
}
</style>