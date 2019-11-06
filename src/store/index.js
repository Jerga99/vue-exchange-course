import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import exchange from './modules/exchange'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exchange,
    auth
  },
  actions: {
    test() {
      alert('Hello Vuex')
    }
  },
  mutations: {
    ...vuexfireMutations
  }
})








