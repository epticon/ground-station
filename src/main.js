import Vue from "vue";
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import "@vuikit/theme";

import App from "@/App.vue";
import router from "@/router/";
import store from "@/store/";
import "@/serviceworkers/registerServiceWorker";

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
