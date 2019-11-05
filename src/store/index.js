import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const exchanges = [{
  id: "ad7asdsa68dasd",
  type: "product", // service or product
  title: "I have Driller",
  description: "I will exchange this super driller...",
  value: 20, // value per hour in case of service,
  user: "2398173193",
  image: "https://images.unsplash.com/photo-1458829549177-e9a8f3db5b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  country: "Germany",
  city: "Berlin",
  status: "active",
  tags: ["tools", "helping"] // can be active/inactive,
},
{
  id: "f7ds6d7f8ds6f76ds7f67d8s",
  type: "service", // service or product
  title: "I will teach programming",
  description: "I will make you super programmer",
  value: 20, // value per hour in case of service,
  user: "2398173193",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  country: "Germany",
  city: "Berlin",
  status: "active",
  tags: ["programming", "pc"] // can be active/inactive
}]

export default new Vuex.Store({
  // state of vuex store, you can specify any data here
  state() {
    return {
      exchanges: []
    }
  },
  // you have access to the state and you can create getters to return modified state
  getters: {

  },
  // methods where you can perform different tasks, most usualy you want to fetch data from here
  // actions most of the time resolves into some data
  // Api calls, access database and so on...
  actions: {
    test() {
      alert('Hello Vuex')
    },
    getExchanges({commit}) {
      // Here you want to make a call to firebase and ask for data
      commit('setExchanges', exchanges)
    }
  },
  // You will get a data and you will set them to the state
  mutations: {
    setExchanges(state, exchanges) {
      state.exchanges = exchanges
    }
  }
})








