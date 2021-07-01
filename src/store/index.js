import { createStore } from "vuex";

export default createStore({
  state: {
    userChoices: {
      height: null,
      area: null,
    },
  },
  mutations: {
    setUserChoices: (state, payload) => (state.userChoices[payload.key] = payload.waarde),
  },
  actions: {},
  modules: {},
});
