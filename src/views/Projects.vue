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
        <FooterItem />
    </div>
</template>

<script>
import SecondNavbar from "@/components/SecondNavbar.vue";
import ScrollTop from "@/components/ScrollTop.vue";
import ProjectItem from "@/components/projectsSection/ProjectItem.vue";
import ButtonItem from "@/components/utilities/ButtonItem.vue";
import FooterItem from "@/components/FooterItem.vue";

export default {
    name: "Projects",
    components: {
        ProjectItem,
        ButtonItem,
        SecondNavbar,
        ScrollTop,
        FooterItem,
    },
    data() {
        return {
            projects: [
                {
                    title: "Web Clipboard",
                    description:
                        "Web app made for personal use. It helps in my current job, when I have repetitive topics that day. Easy to use clipboard manager. Made with Vue 3.",
                    labels: ["Vue 3", "Local Storage", "Vuex"],
                    githubLink:
                        "https://github.com/maciejziemichod/web-clipboard",
                    pageLink:
                        "https://maciejziemichod.github.io/web-clipboard/",
                    image: "web_clipboard-min.png",
                },
                {
                    title: "Pomodoro Clock",
                    description:
                        "React pomodoro clock. It helps managing time, splitting it between work and breaks.",
                    labels: ["React", "Redux", "React\u00A0Hooks"],
                    githubLink:
                        "https://github.com/maciejziemichod/Pomodoro-Clock",
                    pageLink: "https://codepen.io/maciejziemichod/full/gOPZYMy",
                    image: "pomodoro_clock-min.png",
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
                    githubLink:
                        "https://github.com/maciejziemichod/File-Metadata",
                    pageLink: "https://sugary-lyrical-buttercup.glitch.me/",
                    image: "file_metadata_microservice-min.jpeg",
                },
                {
                    title: "Drum machine",
                    description:
                        "Online drums, it works both with mouse and keyboard.",
                    labels: ["React", "React\u00A0Hooks", "Bootstrap"],
                    githubLink:
                        "https://github.com/maciejziemichod/Drum-Machine",
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