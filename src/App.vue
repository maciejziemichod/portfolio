<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style>
/* global */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
}

:root {
  --light: #f3f4f4;
  --ligth-transparent: #f3f4f4cc;
  --dark: #3b333e;
  --gray: #9d9897;
}

#app {
  font-family: "Lora", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);
  background-color: var(--light);
  min-height: 100vh;
}

section {
  margin: 0 auto;
  min-height: 100vh;
  padding: 100px 0;
  max-width: 1000px;
}

button,
input,
textarea {
  font-family: "Lora", serif;
}

input,
textarea {
  border: 1px solid var(--gray);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

h1 {
  margin: 0 auto;
  width: fit-content;
  font-size: 32px;
}

.container {
  padding: 0 150px;
  margin: 0 auto;
}
@media (max-width: 1080px) {
  .container {
    padding: 0 100px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 50px;
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 25px;
  }
}

/* utilities */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: var(--gray);
  height: 1px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before,
.hvr-underline-from-center:focus:before,
.hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}
</style>
