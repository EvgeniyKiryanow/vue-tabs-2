import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import Vue from 'vue/dist/vue.esm';

import HkInterface from "hk-interface";
import "hk-interface/dist/hkInterface.css";

Vue.use(HkInterface);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
