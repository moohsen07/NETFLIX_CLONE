import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "09b53b52c6571f10831dde15264bb96a",
    baseUrl: "https://api.themoviedb.org/3",
    baseImgUrl: "https://image.tmdb.org/t/p/original",
    genreList: [],
  },
  mutations: {
    SET_GENRE_LIST(state, payLoad) {
      state.genreList = payLoad;
    },
  },
  actions: {
    getGenreList({ commit, state }) {
      axios
        .get(`${state.baseUrl}/genre/movie/list?api_key=${state.apiKey}`)
        .then((response) => {
          commit("SET_GENRE_LIST", response.data.genres);
        });
    },
  },
  modules: {},
});
