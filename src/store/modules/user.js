import axios from "../../plugins/axios";

const state = {
  users: [],
};
const getters = {
  getAllUsers(state) {
    return state.users;
  },
  getUser(state) {
    return (id) => {
      const user = state.users.filter((user) => user.id == id)[0];
      return user;
    };
  },
};
const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  },
  createUser(state, payload) {
    state.users.push(payload);
  },
  updateUser(state, payload) {
    state.users[payload.id] = payload;
  },
  deleteUser(state, payload) {
    const index = state.users.indexOf((user) => (user.id = payload.id));
    state.users.splice(index, 0);
  },
};
const actions = {
  fetchUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users")
        .then((response) => {
          resolve(response.data);
          commit("setUsers", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  createUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/users", payload)
        .then((response) => {
          resolve(response.data);
          commit("createUser", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  updateUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/users/${payload.id}`, payload)
        .then((response) => {
          resolve(response.data);
          commit("updateUser", response.data);
        })
        .catch((err) => reject(err));
    });
  },
  deleteUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/users/${payload.id}`)
        .then((response) => {
          resolve(response.data);
          commit("deleteUser", response.data);
        })
        .catch((err) => reject(err));
    });
  },
};

const userModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default userModule;
