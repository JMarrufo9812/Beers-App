import baseApi from "../../api/base.api";

const state = () => ({
  beers: [],
});

// getters
const getters = {
  beers: (state) => {
    return state.beers;
  },
};

// actions
const actions = {
  async getAllBeers({ commit }) {
    const { status, data } = await baseApi.get("beers");
    if (status === 200) {
      console.log(data);
      console.log;
      commit("SET_beers", data);
    }
  },
};

// mutations
const mutations = {
  SET_beers(state, beers) {
    console.log("mutation", beers);
    state.beers = beers;
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
