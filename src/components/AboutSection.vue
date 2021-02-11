<template>
    <section id="about">
        <h1>About me</h1>
        <article>
            <div>
                <p>
                    Hello! My name is Maciej, I’m a web developer based in
                    Lublin.
                </p>
                <p>
                    I enjoy building modern things that live on the internet. My
                    goal is to provide unique experiences to the user.
                </p>
                <p class="technologies-title">
                    Technologies I’ve been working with recently:
                </p>
                <ListItem :items="technologies" />
                <!-- <div
          ref="moreTechnologies"
          class="more-technologies"
          :style="[
            showAllTech
              ? { height: computedHeight, paddingBottom: '10px' }
              : {},
          ]"
        >
          <ListItem :items="moreTechnologies" />
        </div> -->
                <router-link to="/about" class="about-btn mt-25">
                    <ButtonItem size="sm">More</ButtonItem>
                </router-link>
            </div>
            <div class="image-container">
                <figure>
                    <img src="" alt="photo of myself" />
                    <div class="decoration"></div>
                    <div class="background"></div>
                </figure>
            </div>
        </article>
    </section>
</template>

<script>
import ListItem from "./utilities/ListItem.vue";
import ButtonItem from "./utilities/ButtonItem.vue";

export default {
    name: "AboutSection",
    components: {
        ListItem,
        ButtonItem,
    },
    data() {
        return {
            technologies: [
                "JavaScript (ES6+)",
                "Nuxt",
                "Vue 3",
                "HTML5 & CSS3",
                "Vuex",
                "Figma",
            ],
            // moreTechnologies: ["TypeScript", "NodeJS", "Express", "React"],
            // showAllTech: false,
            computedHeight: "0px",
        };
    },
    // methods: {
    //   initHeight: function () {
    //     this.$refs["moreTechnologies"].style.height = "auto";
    //     this.$refs["moreTechnologies"].style.position = "absolute";
    //     this.$refs["moreTechnologies"].style.visibility = "hidden";
    //     this.$refs["moreTechnologies"].style.display = "block";

    //     const height = getComputedStyle(this.$refs["moreTechnologies"]).height;
    //     const numHeight = parseFloat(height.replace(/[px]/, ""));
    //     this.computedHeight = numHeight + 10 + "px";

    //     this.$refs["moreTechnologies"].style.position = null;
    //     this.$refs["moreTechnologies"].style.visibility = null;
    //     this.$refs["moreTechnologies"].style.display = null;
    //     this.$refs["moreTechnologies"].style.height = 0;
    //   },
    // },
    // mounted() {
    //   this.initHeight();
    // },
};
</script>

<style scoped>
p {
    font-size: 20px;
    padding-bottom: 25px;
}

article {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
}

article > div {
    width: calc(100% - 400px);
}

figure {
    width: 300px;
    height: 300px;
    position: relative;
}
figure .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 3;
}
figure .decoration {
    z-index: 1;
    position: absolute;
    top: 25px;
    left: 25px;
    width: 300px;
    height: 300px;
    border: 1px solid var(--gray);
    z-index: 1;
}
figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 4;
}

.image-container {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.more-technologies {
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 0.4s;
}

.about-btn > * {
    margin-top: 2rem;
}

@media (max-width: 1000px) {
    article > div,
    .image-container {
        width: 50%;
    }

    .image-container {
        align-items: flex-start;
    }

    figure,
    figure .decoration {
        width: 200px;
        height: 200px;
    }
}

@media (max-width: 767px) {
    article {
        flex-direction: column-reverse;
    }
    article > div,
    .image-container {
        width: 100%;
    }

    figure {
        width: 100%;
    }

    figure .decoration {
        display: none;
    }

    .image-container {
        padding-bottom: 2rem;
    }

    .about-btn {
        display: block;
        width: fit-content;
        margin: 2rem auto 0;
    }

    .about-btn > * {
        margin-top: 0;
    }
}
</style>
