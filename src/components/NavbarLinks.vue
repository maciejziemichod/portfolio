<template>
    <ul>
        <li>
            <a href="#projects" class="hvr-underline-from-center"> Projects </a>
        </li>
        <li>
            <a href="#about" class="hvr-underline-from-center"> About </a>
        </li>
        <li>
            <a href="#contact" class="hvr-underline-from-center"> Contact </a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
}

li:not(:first-child) {
    padding-left: 50px;
}

a.hvr-underline-from-center {
    padding: 5px 0;
}

@media (max-width: 1080px) {
    li:not(:first-child) {
        padding-left: 40px;
    }
}

@media (max-width: 767px) {
    li:not(:first-child) {
        padding-left: 0;
    }
    li {
        padding-top: 2rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>