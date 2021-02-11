<template>
    <section id="projects">
        <h1>Projects</h1>
        <ProjectItem
            v-for="(project, index) in projects"
            :key="project.title"
            :data="project"
            :orientation="index % 2 === 0 ? 'left' : 'right'"
        />
        <div class="button-container">
            <router-link to="/projects">
                <ButtonItem size="mid">Show more</ButtonItem>
            </router-link>
        </div>
    </section>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import ButtonItem from "../utilities/ButtonItem.vue";

export default {
    name: "ProjectsSection",
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
                    image: "javascript_calculator-min.png",
                },
                {
                    title: "Exercise Tracker",
                    description:
                        "Microservice with UI that holds information about users' exercises. Built with Express, Mongoose and Materialize CSS. An API project, part of freeCodeCamp's APIs and Microservices Certification.",
                    labels: ["Express", "MongoDB", "Materialize"],
                    githubLink:
                        "https://github.com/maciejziemichod/Exercise-Tracker",
                    pageLink: "https://quill-near-waxflower.glitch.me/",
                    image: "exercise_tracker-min.png",
                },
                {
                    title: "Markdown Previewer",
                    description:
                        "App that displays markdown preview live. Project done with React as a part of freeCodeCamp's Front End Libraries Certification.",
                    labels: ["React", "Markdown", "JavaScript"],
                    githubLink:
                        "https://github.com/maciejziemichod/Markdown-Previewer",
                    pageLink: "https://codepen.io/maciejziemichod/full/jObQKao",
                    image: "react_markdown_previewer-min.png",
                },
            ],
        };
    },
    components: {
        ProjectItem,
        ButtonItem,
    },
};
</script>

<style scoped>
h1 {
    padding-bottom: 150px;
}
.button-container {
    padding-top: 100px;
    text-align: center;
}
@media (max-width: 1080px) {
    h1 {
        padding-bottom: 5rem;
    }
}
</style>