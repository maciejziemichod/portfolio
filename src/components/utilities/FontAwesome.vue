<template>
    <a
        v-if="link !== ''"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <i :class="iconClass"></i>
    </a>

    <i v-else :class="iconClass"></i>
</template>

<script>
export default {
    name: "FontAwesome",
    props: {
        icon: {
            required: true,
            validator: (value) => {
                return (
                    [
                        "github",
                        "twitter",
                        "codepen",
                        "linkedin",
                        "link",
                        "bars",
                        "times",
                    ].indexOf(value) !== -1
                );
            },
        },
        link: {
            default: "",
            type: String,
        },
    },
    computed: {
        iconClass() {
            const icons = {
                github: "fab fa-github",
                twitter: "fab fa-twitter",
                codepen: "fab fa-codepen",
                linkedin: "fab fa-linkedin-in",
                link: "fas fa-external-link-alt",
                bars: "fas fa-bars",
                times: "fas fa-times",
            };
            return icons[this.icon];
        },
    },
};
</script>