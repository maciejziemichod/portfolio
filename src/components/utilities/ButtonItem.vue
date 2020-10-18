<template>
  <button :class="size">
    <slot>Click me</slot>
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    size: {
      default: "mid",
      validator: function (value) {
        return ["sm", "mid", "lg"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
button {
  color: var(--dark);
  background-color: var(--light);
  border: 1px solid var(--dark);
}
button:hover {
  cursor: pointer;
}
button.sm {
  width: 80px;
  height: 30px;
  font-size: 13px;
}
button.mid {
  width: 135px;
  height: 55px;
  font-size: 16px;
}
button.lg {
  width: 190px;
  height: 70px;
  font-size: 24px;
}
</style>