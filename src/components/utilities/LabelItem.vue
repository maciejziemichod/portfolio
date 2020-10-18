<template>
  <span>
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "LabelItem",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
span {
  background-color: var(--gray);
  padding: 3px 10px;
  border-radius: 100px;
  color: var(--light);
  font-size: 13px;
}
span:not(:last-child) {
  margin-right: 10px;
}
</style>