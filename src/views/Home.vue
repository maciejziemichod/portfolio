<template>
    <div>
        <AppNavbar />
        <SideFloats />
        <main class="container">
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
        </main>
        <FooterItem :hideIconsOnBigScreens="true" />
    </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/projectsSection/ProjectsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterItem from "@/components/FooterItem.vue";
import SideFloats from "@/components/SideFloats.vue";

export default {
    name: "Home",
    components: {
        AppNavbar,
        HeroSection,
        ProjectsSection,
        AboutSection,
        ContactSection,
        FooterItem,
        SideFloats,
    },
};
</script>