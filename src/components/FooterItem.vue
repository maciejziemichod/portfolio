<template>
  <footer>
    <div class="icons" :class="{ 'icons-hide': hideIconsOnBigScreens }">
      <FontAwesome icon="github" link="https://github.com/maciejziemichod" class="fa-lg" />
      <FontAwesome icon="linkedin" link="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/" class="fa-lg" />
      <FontAwesome icon="twitter" link="https://twitter.com/Maciej84900684" class="fa-lg" />
    </div>
    <a href="https://github.com/maciejziemichod/portfolio" target="_blank" rel="noopener noreferrer" class="owner">
      <p>Designed & built by Maciej Ziemichód</p>
    </a>
  </footer>
</template>
<script>
import FontAwesome from "@/components/utilities/FontAwesome.vue";
export default {
  name: "FooterItem",
  components: {
    FontAwesome,
  },
  props: {
    hideIconsOnBigScreens: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.icons {
  margin: 0 auto 10px;
  width: fit-content;
}

.icons>* {
  padding: 0 10px;
}

.icons>*:hover {
  color: var(--gray);
}

.icons-hide {
  display: none;
}

p {
  display: block;
  width: fit-content;
  margin: 0 auto 0;
  font-size: 13px;
  padding-bottom: 25px;
  /* position: relative;
  bottom: 25px;
  height: 0; */
}

.owner:hover {
  color: var(--gray);
}

footer {
  padding-top: 3rem;
}

@media (max-width: 768px) {
  .icons-hide {
    display: block;
  }
}
</style>