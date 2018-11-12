import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import { state, mutations } from "./mutations";
import vuetron from "vuetron";
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  plugins: [vuetron.VuetronVuex()]
});
