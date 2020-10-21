<template>
  <AppNavbar />
  <main class="container">
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>
  <FooterItem />
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/projectsSection/ProjectsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterItem from "@/components/FooterItem.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    HeroSection,
    ProjectsSection,
    AboutSection,
    ContactSection,
    FooterItem,
  },
};
</script>