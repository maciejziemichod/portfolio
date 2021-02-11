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
                    title: "Digital Garden",
                    description:
                        "My own blog in the form of digital garden, which means that I drop thoughts there and don't try to polish them, they grow with time like plants. It's built with Nuxt and uses @nuxt/content module as a Git-based headless CMS.",
                    labels: ["Nuxt", "@nuxt/content", "Markdown"],
                    githubLink:
                        "https://github.com/maciejziemichod/digital-garden",
                    pageLink:
                        "https://maciejziemichod.github.io/digital-garden/",
                    image: "digital_garden-min.png",
                },
                {
                    title: "Schedule Scraper",
                    description:
                        "Web app that scrapes some radio schedules and displays only the important data: time and the program. I made it as a helper for me and my coworkers. Front built with Vue, informations are extracted with Cheerio and the schedules from previous days are saved to localStorage. There is also my own CORS proxy server which adds required headers to the request. ",
                    labels: ["Vue", "Cheerio", "localStorage"],
                    githubLink:
                        "https://github.com/maciejziemichod/schedule-scraper",
                    pageLink: "https://vibrant-booth-a8f0ef.netlify.app/",
                    image: "schedule_scraper-min.png",
                },
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