import axios from "../../plugins/axios";

const state = {
  articles: [],
};

const getters = {
  getArticle(state) {
    return (id) => {
      const article = state.articles.filter((article) => article.id == id)[0];
      return article;
    };
  },
  getAllArticles(state) {
    return state.articles;
  },
};

const mutations = {
  setArticles(state, payload) {
    state.articles = payload;
  },
  createArticle(state, payload) {
    state.articles.push(payload);
  },
  updateArticle(state, payload) {
    state.articles[payload.id] = payload;
  },
  deleteArticle(state, payload) {
    const index = state.articles.indexOf(
      (article) => (article.id = payload.id)
    );
    state.articles.splice(index, 0);
  },
};

const actions = {
  fetchArticles({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/articles")
        .then((response) => {
          resolve(response.data);
          commit("setArticles", response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  createArticle({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/articles", payload)
        .then((response) => {
          resolve(response.data);
          commit("createArticle", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  updateArticle({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/articles/${payload.id}`, payload)
        .then((response) => {
          resolve(response.data);
          commit("updateArticle", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  deleteArticle({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/articles/${payload.id}`)
        .then((response) => {
          resolve(response.data);
          commit("deleteArticle", response.data);
        })
        .catch((err) => reject(err));
    });
  },
};

const articleModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default articleModule;
