import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueNativeSock from "vue-native-websocket";
import "@/assets/scss/main.scss";

import App from "@/App.vue";
import router from "@/router/";
import store from "@/store/";
import "@/serviceworkers/registerServiceWorker";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueNativeSock, process.env.VUE_APP_SWARM_URL, {
  store: store,
  format: "json",
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionDelay: 3000
  // reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
});
new Vue({ router, store, render: h => h(App) }).$mount("#app");

// Vue.component("Var", {
//   render() {
//     return this.$scopedSlots.default(this.$attrs);
//   }
// });
