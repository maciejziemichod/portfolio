<template>
    <section id="projects">
        <h1>Projects</h1>
        <ProjectItem v-for="(project, index) in projects" :key="project.title" :data="project"
            :orientation="index % 2 === 0 ? 'left' : 'right'" />
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
                    title: "Northwestern Media - radio stations",
                    description:
                        "Rebuild proccess is in progress. The project involves rebuilding big legacy radio stations multisite, live radio updates, websockets, node servers and mobile apps. I've also created custom client side routing library to make the radio player persistent across page loads.",
                    labels: ["Websockets", "Node.js", "Client side routing"],
                    pageLink:
                        "https://myktis.com/",
                    image: "nwm.png",
                },
                {
                    title: "Huumans",
                    description:
                        "Previously known as Wellonomics. It's a web app for employers and employees to track and improve their personal wellbeing. It's built on top of WordPress with a lot of customizations, external integrations and unusual solutions. I architected the wellbeing visual reports system for employers.",
                    labels: ["React.js", "Chart.js", "LMS"],
                    pageLink:
                        "https://www.huumans.io/",
                    image: "huumans.png",
                },
                {
                    title: "Columbia Threadneedle Investments",
                    description:
                        "Merging two big financial websites - CTI and BMO. It was tricky to prepare everything for migration and do it well without making the multisite slower.",
                    labels: ["Elementor", "WordPress", "Data layer"],
                    pageLink:
                        "https://www.columbiathreadneedle.co.uk/",
                    image: "cti.png",
                },
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