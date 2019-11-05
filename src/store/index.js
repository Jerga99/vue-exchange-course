import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import exchange from './modules/exchange'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exchange
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








