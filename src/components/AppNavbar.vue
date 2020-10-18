<template>
  <header :class="{ 'navbar-hidden': !showNav }">
    <nav>
      <div class="logo">
        <a href="#hero" class="hvr-grow">
          <img src="../assets/logo.svg" alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#projects" class="hvr-underline-from-center"> Projects </a>
        </li>
        <li>
          <a href="#about" class="hvr-underline-from-center"> About </a>
        </li>
        <li>
          <a href="#contact" class="hvr-underline-from-center"> Contact </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavbarItem",
  data() {
    return {
      showNav: true,
      lastScrollPosition: 0,
    };
  },
  methods: {
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

      this.showNav = currentScrollPosition < this.lastScrollPosition;
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
header {
  position: fixed;
  width: 100%;
  background-color: var(--ligth-transparent);
  z-index: 100;
  transform: translate3d(0, 0, 0);
  transition: 0.3s transform ease-out;
}
header.navbar-hidden {
  transform: translate3d(0, -100%, 0);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 80px;
}

.logo {
  height: 60px;
  width: 60px;
}
.logo img {
  width: 100%;
  height: 100%;
}

ul {
  display: flex;
}

li:not(:first-child) {
  padding-left: 50px;
}

a.hvr-underline-from-center {
  padding: 5px 0;
}

/* media queries */
@media (max-width: 1080px) {
  nav {
    padding: 0 40px;
  }

  li:not(:first-child) {
    padding-left: 40px;
  }
}
@media (max-width: 768px) {
  nav {
    padding: 0 25px;
  }

  li:not(:first-child) {
    padding-left: 25px;
  }
}
</style>
