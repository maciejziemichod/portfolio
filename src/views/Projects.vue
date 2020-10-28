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
      <router-link to="/">
        <ButtonItem size="sm"> Return </ButtonItem>
      </router-link>
    </main>
  </div>
</template>

<script>
import SecondNavbar from "@/components/SecondNavbar.vue";
import ProjectItem from "@/components/projectsSection/ProjectItem.vue";
import ButtonItem from "@/components/utilities/ButtonItem.vue";

export default {
  name: "Projects",
  components: {
    ProjectItem,
    ButtonItem,
    SecondNavbar,
  },
  data() {
    return {
      projects: [
        {
          title: "JavaScript Calculator",
          description:
            "JavaScript calculator using formula logic. Driven by React with neumorphism aesthetic. It's a part of freeCodeCamp's Front End Libraries Certification.",
          labels: ["React", "Neumorphism", "JavaScript"],
          githubLink:
            "https://github.com/maciejziemichod/Javascript-Calculator",
          pageLink: "https://codepen.io/maciejziemichod/full/ZEQxMVP",
          image: "javascript_calculator.png",
        },
        {
          title: "Exercise Tracker",
          description:
            "Microservice with UI that holds information about users' exercises. Built with Express, Mongoose and Materialize CSS. An API project, part of freeCodeCamp's APIs and Microservices Certification.",
          labels: ["Express", "MongoDB", "Materialize"],
          githubLink: "https://github.com/maciejziemichod/Exercise-Tracker",
          pageLink: "https://quill-near-waxflower.glitch.me/",
          image: "exercise_tracker.png",
        },
        {
          title: "Markdown Previewer",
          description:
            "App that displays markdown preview live. Project done with React as a part of freeCodeCamp's Front End Libraries Certification.",
          labels: ["React", "Markdown", "JavaScript"],
          githubLink: "https://github.com/maciejziemichod/Markdown-Previewer",
          pageLink: "https://codepen.io/maciejziemichod/full/jObQKao",
          image: "react_markdown_previewer.png",
        },
      ],
    };
  },
};
</script>