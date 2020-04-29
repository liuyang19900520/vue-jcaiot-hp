<template>
  <div>Members mobile</div>
</template>

<script>
export default {
  name: "HelloI18n",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  created() {
  }
};
</script>
