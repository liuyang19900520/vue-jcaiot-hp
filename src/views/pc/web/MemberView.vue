<template>
  <div>Members</div>
</template>

<script>
export default {
  name: "MemberView",
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
