<template>
    <div>
        <SecondNavbar />
        <main class="container">
            <h1>More about me</h1>

            <p>
                If you wish to know more personal stuff about me, visit my
                <a
                    href="https://maciejziemichod.github.io/digital-garden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link hvr-underline-from-center"
                    >digital garden</a
                >. It's something similar to blog, but less strict.
            </p>
            <p>
                You can see view my CV as a
                <a
                    href="./Maciej_Ziemichod_CV.pdf"
                    target="_blank"
                    class="link hvr-underline-from-center"
                >
                    PDF
                </a>
                or on
                <a
                    href="https://www.notion.so/Maciej-Ziemich-d-c37b14c2f8844399bce21861ce804872"
                    target="_blank"
                    class="link hvr-underline-from-center"
                    >Notion</a
                >.
            </p>
            <p>
                I have made a reusable custom directive for Vue 3, which makes
                adding tooltips really easy. You can check it out
                <a
                    href="https://github.com/maciejziemichod/v-tooltip"
                    target="_blank"
                    class="link hvr-underline-from-center"
                    >here</a
                >.
            </p>
            <p>
                This page is made enterily in Vue + Vue Router. You can see the
                code
                <a
                    href="https://github.com/maciejziemichod/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link hvr-underline-from-center"
                    >here</a
                >.
            </p>
            <p>
                Current job status: Working as media analyst, trying to become
                professional web developer, most preferably remote one.
            </p>
            <p>
                All the technologies and tools I've used so far (in random
                order):
                <ListItem :items="technologies" />
            </p>
            <p>
                Life goals: get some commercial dev experience; live as digital
                nomad; simply be happy and less stressed out; learn TypeScript,
                Rust, GraphQL and PostgreSQL.
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
                "CSS3",
                "Sass",
                "HTML5",
                "React",
                "Redux",
                "Vue",
                "Vuex",
                "Nuxt",
                "PHP",
                "Node",
                "Express",
                "Python",
                "Materialize",
                "MySQL",
                "WordPress",
                "Figma",
                "Bootstrap",
                "BEM",
                "REST API",
                "Git",
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