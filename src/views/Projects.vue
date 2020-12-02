<template>
  <div>
    <SecondNavbar />
    <main class="container">
      <section>
        <ProjectItem
          v-for="(project, index) in projects"
          :key="project.title"
          :data="project"
          :orientation="index % 2 === 0 ? 'left' : 'right'"
        />
      </section>
      <div class="return">
        <router-link to="/">
          <ButtonItem size="sm"> Return </ButtonItem>
        </router-link>
      </div>
    </main>
    <ScrollTop />
  </div>
</template>

<script>
import SecondNavbar from "@/components/SecondNavbar.vue";
import ScrollTop from "@/components/ScrollTop.vue";
import ProjectItem from "@/components/projectsSection/ProjectItem.vue";
import ButtonItem from "@/components/utilities/ButtonItem.vue";

export default {
  name: "Projects",
  components: {
    ProjectItem,
    ButtonItem,
    SecondNavbar,
    ScrollTop,
  },
  data() {
    return {
      projects: [
        {
          title: "Web Clipboard",
          description:
            "Web app made for personal use. It helps in my current job, when I have repetitive topics that day. Easy to use clipboard manager. Made with Vue 3.",
          labels: ["Vue 3", "Local Storage", "Vuex"],
          githubLink: "https://github.com/maciejziemichod/web-clipboard",
          pageLink: "https://maciejziemichod.github.io/web-clipboard/",
          image: "web_clipboard-min.png",
        },
        {
          title: "Pomodoro Clock",
          description:
            "React pomodoro clock. It helps managing time, splitting it between work and breaks.",
          labels: ["React", "Redux", "React Hooks"],
          githubLink: "https://github.com/maciejziemichod/Pomodoro-Clock",
          pageLink: "https://codepen.io/maciejziemichod/full/gOPZYMy",
          image: "pomodoro_clock-min.png",
        },
        {
          title: "Random Quote Generator",
          description: "Nothing else to say, stay inspired.",
          labels: ["React", "API", "Bootstrap"],
          githubLink:
            "https://github.com/maciejziemichod/Random-Quote-Generator",
          pageLink: "https://codepen.io/maciejziemichod/full/YzyJmeG",
          image: "random_quote_generator-min.png",
        },
        {
          title: "File Metadata Microservice",
          description:
            "Microservice that analyses uploaded file and responses with JSON containing file's name and size.",
          labels: ["Express", "BEM", "Sass"],
          githubLink: "https://github.com/maciejziemichod/File-Metadata",
          pageLink: "https://sugary-lyrical-buttercup.glitch.me/",
          image: "file_metadata_microservice-min.jpeg",
        },
        {
          title: "Drum machine",
          description: "Online drums, it works both with mouse and keyboard.",
          labels: ["React", "React Hooks", "Bootstrap"],
          githubLink: "https://github.com/maciejziemichod/Drum-Machine",
          pageLink: "https://codepen.io/maciejziemichod/full/KKdOpyM",
          image: "drum_machine-min.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.return {
  width: fit-content;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>