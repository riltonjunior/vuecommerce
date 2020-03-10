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
    },
    user_products: null
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
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshift(payload);
    }
  },
  actions: {
    getUserProducts(context) {
      api.get(`/produto?user_id=${context.state.user.id}`).then(response => {
        context.commit("UPDATE_USER_PRODUCTS", response.data);
      });
    },
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
    updateCreated(context) {
      context.commit("UPDATE_CREATED", true);
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USER", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {}
});
