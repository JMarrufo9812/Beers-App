import Vue from "vue";
import Vuex from "vuex";
import beers from "./modules/beers";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    beers,
  },
});

export default store;
