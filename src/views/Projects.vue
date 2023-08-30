<template>
    <div>
        <SecondNavbar />
        <main class="container">
            <section>
                <ProjectItem v-for="(project, index) in projects" :key="project.title" :data="project"
                    :orientation="index % 2 === 0 ? 'left' : 'right'" />
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
                    title: "Embraer Webinar Centre",
                    description: "WordPress based platform for recorded and live webinars. It includes custom integration with Clickmeeting platform where client can host their webinars and provide the access on the website.",
                    labels: ["Webinars", "Clickmeeting", "WordPress"],
                    pageLink: "https://events.embraercommercialaviation.com/",
                    image: "embraer.png",
                },
                {
                    title: "Lux Research",
                    description: "Creating new components and then doing a rebrand of the website. The website is created with Hubspot CMS.",
                    labels: ["Hubspot CMS", "JavaScript"],
                    pageLink: "https://www.luxresearchinc.com/",
                    image: "lux.png",
                },
                {
                    title: "Expleo",
                    description: "I was responsible for creating pretty complex header and rebuild of the landing page. The new landing page has semi-full page transitions created with GSAP.",
                    labels: ["GSAP", "Animations", "CSS"],
                    pageLink: "https://expleo.com/",
                    image: "expleo.png",
                },
                {
                    title: "VIP$ COIN",
                    description: "The main highlight of this project is that it was created fully in a few days as the timeline was very tight.",
                    labels: ["Rapid development", "WordPress"],
                    pageLink: "https://www.vipscoin.com/",
                    image: "vipscoin.png",
                },
                {
                    title: "BMO GAM",
                    description: "I've helped during the Kurtosys replatform. It involved migrating from Elementor version 2 to 3 which introduced many breaking changes. Soon after the european BMO was merged with CTI.",
                    labels: ["Elementor", "GTM", "Migration"],
                    pageLink: "https://www.bmogam.com/",
                    image: "bmo.png",
                },
                {
                    title: "Jensen Investment Management",
                    description: "On my first project as professional developer I was thrown in at the deep end. The project was about migrating everything from Kurtosys platform built on top of WordPress and Elementor to a different hosting with different major Elementor version. I had to fill in the gaps of missing plugins from the previous platform and was mostly the only dev on the project. I had the opportunity prove my value and it turned out great - I was promoted to main developer after about 3 months.",
                    labels: ["WordPress", "Plugins", "Migration"],
                    pageLink: "https://www.jenseninvestment.com/",
                    image: "jensen.png",
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