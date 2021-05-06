import "es6-promise/auto";
import { createStore } from "vuex";
import articlesModule from "./modules/article";
import topicModule from "./modules/topic";
import userModule from "./modules/user";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {},
});

// export default store;
export default createStore({
  modules: {
    articlesModule,
    topicModule,
    userModule,
    store,
  },
});
