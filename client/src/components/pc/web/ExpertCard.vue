<template>
  <v-card
      class="mx-auto expert-card-view-margin"
      max-width="344"
  >
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

  </v-card>
</template>

<script>
export default {
  name: "ExpertCard", data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

.expert-card-view-margin {
  margin-bottom: 2%;
}

</style>