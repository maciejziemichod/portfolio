<template>
  <footer>
    <div class="icons">
      <FontAwesome icon="github" link="https://github.com/maciejziemichod" />
      <FontAwesome icon="codepen" link="https://codepen.io/maciejziemichod" />
      <FontAwesome
        icon="linkedin"
        link="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"
      />
      <FontAwesome icon="twitter" link="https://twitter.com/Maciej84900684" />
    </div>
    <p>Designed & built by Maciej Ziemichód</p>
  </footer>
</template>
<script>
import FontAwesome from "@/components/utilities/FontAwesome.vue";
export default {
  name: "FooterItem",
  components: {
    FontAwesome,
  },
};
</script>
<style scoped>
.icons {
  display: none;
  margin: 0 auto 10px;
  width: fit-content;
}
.icons > * {
  padding: 0 10px;
}
.icons > *:hover {
  color: var(--gray);
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
@media (max-width: 768px) {
  .icons {
    display: block;
  }
}
</style>