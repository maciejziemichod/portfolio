<template>
  <header>
    <nav>
      <div class="link">
        <router-link to="/">
          <span class="hvr-icon-back">
            <i class="fas fa-chevron-left fa-lg hvr-icon"></i>
          </span>
        </router-link>
      </div>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SecondNavbar",
};
</script>

<style scoped>
nav {
  height: 80px;
  position: relative;
}
.link {
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.logo {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.hvr-icon-back {
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
}
.hvr-icon-back .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-icon-back:hover .hvr-icon,
.hvr-icon-back:focus .hvr-icon,
.hvr-icon-back:active .hvr-icon {
  -webkit-transform: translateX(-4px);
  transform: translateX(-4px);
}

/* media queries */
@media (max-width: 1080px) {
  .link {
    left: 40px;
  }
}
@media (max-width: 768px) {
  .link {
    left: 25px;
  }
}
</style>