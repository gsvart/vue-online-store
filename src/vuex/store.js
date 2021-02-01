import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_LIST: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    }
  },
  actions: {
    GET_PRODUCTS_LIST({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_LIST', products.data);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    }
  },
  getters: {
    PRODUCTS_LIST(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;