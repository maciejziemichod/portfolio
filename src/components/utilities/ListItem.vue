<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
}

li {
  display: inline-block;
  width: 50%;
  position: relative;
  padding-left: 20px;
}
li::before {
  position: absolute;
  left: 0px;
  content: "▹";
}
</style>