import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import vuetron from "vuetron";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(http, { store });
Vue.use(vuetron.VuetronVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
