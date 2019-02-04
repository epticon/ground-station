import Vue from "vue";
import Vuikit from "vuikit";
import "vuikit/dist/vuikit";
import VuikitIcons from "@vuikit/icons";
import "@vuikit/theme";
import Mapbox from "mapbox-gl-vue";
import "@/assets/scss/main.scss";

import App from "@/App.vue";
import router from "@/router/";
import store from "@/store/";
import "@/serviceworkers/registerServiceWorker";

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.component("mapbox", Mapbox);
Vue.config.productionTip = false;
// import "mapbox-gl/dist/mapbox-gl.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
