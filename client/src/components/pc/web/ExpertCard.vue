<template>
  <v-card
      class="mx-auto expert-card-view-margin"
      width="344"
  >
    <v-img :src="this.picture" height="200px"></v-img>
    <v-card-title>
      {{ this.name }}
    </v-card-title>
    <v-card-subtitle>
      {{ this.detail }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "ExpertCard",
  data: () => ({}),
  props: {
    name: null,
    detail: null,
    picture: {
      default: require('@/assets/default-pic.png')
    },
  }
}
</script>

<style scoped>

.expert-card-view-margin {
  margin-bottom: 2%;
}

</style>