import { BeersRequests } from '@/services/beers.service'

const beersService = new BeersRequests()

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
    beersService.getBeers(page, 24).then((data) => {
      commit("SET_beers", data);
    }).catch((err) => {
      console.log('Error:', err)
    })
  },
  // async getSearchBeers({ commit }, { value, filter }) {
    // const { status, data } = await baseApi.get(`beers?${filter}=${value}`);
    // if (status === 200) {
    //   commit("SET_beers", data);
    // }
  // },
};

// mutations
const mutations = {
  SET_beers(state, beers) {
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
