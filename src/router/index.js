import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import * as ENDPOINTS from "./endpoints";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: ENDPOINTS.HOME.path,
      name: ENDPOINTS.HOME.name,
      component: Home
    }
  ]
});

export { ENDPOINTS };
