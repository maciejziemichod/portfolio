<template>
    <div>
        <SecondNavbar />
        <main class="container">
            <h1>More about me</h1>

            <p>
                Here is my
                <a href="./CV.pdf" target="_blank" class="link hvr-underline-from-center">
                    CV
                </a>.
            </p>
            <p>
                I have made a reusable custom directive for Vue 3, which makes
                adding tooltips really easy. You can check it out
                <a href="https://github.com/maciejziemichod/v-tooltip" target="_blank"
                    class="link hvr-underline-from-center">here</a>.
            </p>
            <p>
                Currently I'm a big Go, VIM motions and DSA enthusiast, learning them in spare time. I'm having a lot of fun
                writing such a simple language to create my personal tools, while using only my keyboard and being able to
                specify my own keyboard shortcuts. On top of that I like math and puzzles so I'm learning more of data
                structures and algorithms.
            </p>
            <p>
                If you wish to know more personal stuff about me, visit my
                <a href="https://maciejziemichod.github.io/digital-garden/" target="_blank" rel="noopener noreferrer"
                    class="link hvr-underline-from-center">digital garden</a>. It's something similar to blog, but less
                strict.
            </p>
            <p>
                This page is made enterily in Vue + Vue Router. You can see the
                code
                <a href="https://github.com/maciejziemichod/portfolio" target="_blank" rel="noopener noreferrer"
                    class="link hvr-underline-from-center">here</a>.
            </p>
            <p>
                All the technologies, tools, concepts and other things I've used so far (that I remember) (in random
                order):
                <ListItem :items="technologies" />
            </p>
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
import ButtonItem from "@/components/utilities/ButtonItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import ListItem from "@/components/utilities/ListItem.vue";

export default {
    name: "Projects",
    components: {
        ButtonItem,
        SecondNavbar,
        ScrollTop,
        FooterItem,
        ListItem,
    },
    data() {
        return {
            technologies: [
                "JavaScript",
                "TypeScript",
                "Go",
                "Svelte",
                "Java",
                "CSS",
                "Chart.js",
                "Sass",
                "Tailwind",
                "HTML",
                "React",
                "Twig",
                "Redux",
                "Vue",
                "Vuex",
                "Nuxt",
                "Cheerio",
                "PHP",
                "Node.js",
                "Express",
                "MySQL",
                "WordPress",
                "Figma",
                "Bootstrap",
                "REST APIs",
                "Git",
                "Parcel",
                "Webpack",
                "GSAP",
                "Adobe Experience Manager",
                "GTM",
                "GA",
                "Hubspot CMS",
                "Hotjar",
                "CSR",
                "LMS",
                "Agile",
                "Jira",
                "jQuery",
                "PM2",
                "Code reviewing",
                "Webinars",
                "Websockets",
                "WordPress plugins development",
                "SSH",
                "Forms",
                "PAAPI5",
                "Pardot",
            ],
        };
    },
};
</script>

<style scoped>
.return {
    width: fit-content;
    margin: 0 auto;
    padding: 2.5rem 0 0;
}

.ml-1 {
    margin-left: 1rem;
}

main {
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 2rem;
    min-height: calc(100vh - 80px - 7rem);
}

h1 {
    padding-bottom: 2.5rem;
}

.link {
    font-weight: 600;
}

.hvr-underline-from-center {
    vertical-align: initial;
    overflow: initial;
}

p {
    padding: 1.4rem 0 0;
}

ul {
    padding-top: 1rem;
}
</style>