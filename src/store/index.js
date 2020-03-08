import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    created: false,
    user: {
      id: "",
      displayName: "",
      email: "",
      password: "",
      address: "",
      postalCode: "",
      complementInfo: "",
      state: "",
      city: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_CREATED(state, payload) {
      state.created = payload;
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post(`/usuario`, payload);
    },
    updateCreated() {
      this.$store.commit("UPDATE_CREATED", true);
    }
  },
  modules: {}
});
