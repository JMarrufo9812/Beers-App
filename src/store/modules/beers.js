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
  async getBeers({ commit }, { page }) {
    const { status, data } = await baseApi.get(
      `beers?page=${page}&per_page=24`
    );
    if (status === 200) {
      console.log(data);
      commit("SET_beers", data);
    }
  },
  async getSearchBeers({ commit }, { value, filter }) {
    const { status, data } = await baseApi.get(
      `beers?page=${1}&per_page=24&${filter}=${value}`
    );
    if (status === 200) {
      console.log(data);
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
