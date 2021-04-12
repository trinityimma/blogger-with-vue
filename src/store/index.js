import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
});

export default store;
