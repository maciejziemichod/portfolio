<template>
  <article :class="orientation">
    <div class="about-project">
      <h2>
        {{ data.title }}
      </h2>
      <p>
        {{ data.description }}
      </p>
      <div>
        <LabelItem v-for="label in data.labels" :key="label" :text="label" />
      </div>
      <div class="icons-container">
        <IconItem icon="github" :link="data.githubLink" />
        <IconItem icon="link" :link="data.pageLink" />
      </div>
    </div>
    <figure>
      <a :href="data.pageLink" target="_blank" rel="noopener noreferrer">
        <img :src="require(`../../assets/${data.image}`)" alt="project image" />
      </a>
    </figure>
  </article>
</template>

<script>
import LabelItem from "../utilities/LabelItem.vue";
import IconItem from "../utilities/IconItem.vue";

export default {
  name: "ProjectItem",
  props: {
    data: {
      required: true,
      validator: function ({
        title,
        description,
        labels,
        image,
        pageLink,
        githubLink,
      }) {
        if (!title || typeof title !== "string") return false;
        if (!description || typeof description !== "string") return false;
        if (!labels || typeof labels !== "object") return false;
        if (!image || typeof image !== "string") return false;
        if (!pageLink || typeof pageLink !== "string") return false;
        if (!githubLink || typeof githubLink !== "string") return false;
        return true;
      },
    },
    orientation: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
  components: {
    LabelItem,
    IconItem,
  },
};
</script>

<style scoped>
h2 {
  font-size: 28px;
  font-weight: normal;
}

article {
  display: flex;
  justify-content: space-between;
}
article:not(:first-of-type) {
  padding-top: 150px;
}
article.left {
  flex-direction: row;
  text-align: left;
}
article.left p {
  padding-right: 40px;
}
article.right {
  flex-direction: row-reverse;
  text-align: right;
}
article.right p {
  padding-left: 40px;
}
article > * {
  width: 50%;
}

h2 {
  padding-bottom: 40px;
}

img {
  box-shadow: 0 10px 30px -15px var(--dark);
  width: 100%;
  object-fit: cover;
  height: 340px;
  transition: 0.3s box-shadow;
}
img:hover {
  box-shadow: 0 20px 40px -15px var(--dark);
}

p {
  font-size: 18px;

  padding-bottom: 20px;
}

.icons-container {
  padding-top: 20px;
  font-size: 20px;
}
.icons-container > *:first-child {
  padding-right: 10px;
}

.about-project {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>