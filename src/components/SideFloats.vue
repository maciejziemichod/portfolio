<template >
    <div class="float-left">
      <a href="mailto:maciej.ziemichod@gmail.com">maciej.ziemichod@gmail.com</a>
    </div>
    <div class="float-right">
      <ul>
        <li>
          <a
            href="https://github.com/maciejziemichod"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github"></i
          ></a>
        </li>
        <li>
          <a
            href="https://codepen.io/maciejziemichod"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-codepen"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a
            href="https://twitter.com/Maciej84900684"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "SideFloats",
  data() {
    return {
      offsetTop: 0,
      show: true,
    };
  },
  watch: {
    offsetTop() {
      this.callbackFunc();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) - 200
      );
    },
    callbackFunc() {
      const elem = document.querySelector("#contact");
      if (this.isElementInViewport(elem)) {
        console.log("visible");
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
</script>

<style scoped>
.float-right,
.float-left {
  width: 40px;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
}
.float-right::after,
.float-left::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: var(--gray);
}
.float-left a,
.float-right ul li a i {
  transition: all 0.25s;
}
.float-left a:hover,
.float-right ul li a i:hover {
  transform: translate3d(0, -3px, 0);
}

.float-left {
  left: 40px;
}
.float-left a {
  margin: 20px auto;
  padding: 10px;
  font-size: 12px;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  letter-spacing: 0.1em;
}

.float-right {
  right: 40px;
}
.float-right ul {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.float-right ul li {
  padding: 10px;
}
.float-right ul li:last-of-type {
  margin-bottom: 20px;
}
.float-right ul li a:hover {
  color: var(--gray);
}
</style>