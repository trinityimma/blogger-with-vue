import axios from "../../plugins/axios";

const state = {
  topics: [],
};
const getters = {
  getAllTopics(state) {
    return state.topics;
  },
  getTopic(state) {
    return (id) => {
      const topic = state.topics.filter((topic) => topic.id == id)[0];
      return topic;
    };
  },
};
const mutations = {
  setTopics(state, payload) {
    state.topics = payload;
  },
  createTopic(state, payload) {
    state.topics.push(payload);
  },
  updateTopic(state, payload) {
    state.topics[payload.id] = payload;
  },
  deleteTopic(state, payload) {
    const index = state.topics.indexOf((topic) => (topic.id = payload.id));
    state.topics.splice(index, 0);
  },
};
const actions = {
  fetchTopics({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/topics")
        .then((response) => {
          resolve(response.data);
          commit("setTopics", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  createTopic({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/topics", payload)
        .then((response) => {
          resolve(response.data);
          commit("createTopic", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  updateTopic({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/topics/${payload.id}`, payload)
        .then((response) => {
          resolve(response.data);
          commit("updateTopic", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  deleteTopic({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/topics/${payload.id}`)
        .then((response) => {
          resolve(response.data);
          commit("deleteTopic", response.data);
        })
        .catch((err) => reject(err));
    });
  },
};

const topicModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default topicModule;
