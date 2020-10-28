import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
    // return { x: 0, y: 0 };
  },
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     if (from.name === "Projects") {
  //       console.log("here");
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           console.log("timeout");
  //           resolve({ selector: to.hash });
  //         }, 400);
  //       });
  //     }
  //     return {
  //       selector: to.hash,
  //     };
  //   } else if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

export default router;
