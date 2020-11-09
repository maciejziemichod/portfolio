<template>
  <div
    class="hvr-grow"
    @click="goTop"
    :class="{ 'button-hidden': !showButton }"
  >
    <i class="fas fa-chevron-up fa-lg"></i>
  </div>
</template>

<script>
export default {
  name: "ScrollTop",
  data() {
    return {
      showButton: true,
      lastScrollPosition: 0,
    };
  },
  methods: {
    goTop() {
      scroll(0, 0);
    },

    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      // Stop executing this function if the difference between current scroll position and
      // last scroll position is less than some offset, 50 here
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return;
      }

      this.showButton = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
div {
  position: fixed;
  bottom: -50px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--gray);
  transition: 0.3s all ease-out;
}
.button-hidden {
  bottom: 50px;
}
</style>