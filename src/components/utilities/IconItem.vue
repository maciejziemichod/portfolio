<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <i :class="iconClass"></i>
  </a>
</template>

<script>
export default {
  name: "IconItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass() {
      const icons = {
        link: "fas fa-external-link-alt",
        github: "fab fa-github",
      };

      return icons[this.icon];
    },
  },
};
</script>

<style scoped>
a:hover {
  color: var(--gray);
}
</style>