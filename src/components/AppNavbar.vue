<template>
    <header :class="{ 'navbar-hidden': !showNav }">
        <nav>
            <div class="logo">
                <a href="#hero" class="hvr-grow">
                    <img src="@/assets/logo.svg" alt="logo" />
                </a>
            </div>
            <NavbarLinks v-if="width >= 768" />
            <span v-else>
                <div v-show="!showMenu" class="hamburger" @click="toggleMenu">
                    <FontAwesome icon="bars" class="fa-lg" />
                </div>
            </span>
        </nav>
        <teleport to="#app">
            <transition name="slide" mode="out-in">
                <div v-show="showMenu" class="menu">
                    <div class="hide-menu-btn-container">
                        <button @click="toggleMenu" class="hide-menu-btn">
                            <FontAwesome icon="times" class="fa-lg" />
                        </button>
                    </div>
                    <NavbarLinks />
                </div>
            </transition>
        </teleport>
    </header>
</template>

<script>
import FontAwesome from "@/components/utilities/FontAwesome.vue";
import NavbarLinks from "@/components/NavbarLinks.vue";

export default {
    name: "NavbarItem",
    components: {
        FontAwesome,
        NavbarLinks,
    },
    data() {
        return {
            showNav: true,
            lastScrollPosition: 0,
            width: window.innerWidth,
            showMenu: false,
        };
    },
    methods: {
        onScroll() {
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollPosition < 0) {
                return;
            }

            // Stop executing this function if the difference between current scroll position and
            // last scroll position is less than some offset, 50 here
            if (
                Math.abs(currentScrollPosition - this.lastScrollPosition) < 50
            ) {
                return;
            }

            this.showNav = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    background-color: var(--ligth-transparent);
    z-index: 100;
    transform: translate3d(0, 0, 0);
    transition: 0.3s transform ease-out;
}
header.navbar-hidden {
    transform: translate3d(0, -100%, 0);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 80px;
}

.logo {
    height: 60px;
    width: 60px;
}
.logo img {
    width: 100%;
    height: 100%;
}

.menu {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 100;
    transform: translate3d(0, 0, 0);
    height: 100vh;
    background-color: var(--ligth-transparent);
    width: 50%;
}

.hide-menu-btn-container {
    display: flex;
    justify-content: flex-end;
}
.hide-menu-btn {
    background: none;
    border: none;
    padding: 1rem;
}

/* media queries */
@media (max-width: 1080px) {
    nav {
        padding: 0 40px;
    }
}

@media (max-width: 767px) {
    nav {
        padding: 0 25px;
        justify-content: center;
        position: relative;
    }
    .hamburger {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
    }
}

.slide-enter-active {
    transform: translate3d(100%, 0, 0);
    transition: transform 0.3s;
}
.slide-enter {
    transform: translate3d(100%, 0, 0);
}
.slide-enter-to {
    transform: translate3d(0, 0, 0);
}
.slide-leave-active {
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
}
.slide-leave {
    transform: translate3d(0, 0, 0);
}
.slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
