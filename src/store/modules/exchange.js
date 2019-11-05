
import { db } from '@/db'

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


export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions: {
    getExchanges({commit}) {
      // Here you want to make a call to firebase and ask for data
      db.collection('exchanges')
        .doc('GLgLUAMHu7mZDkseRIqi')
        .get()
        .then(snapshot => {
          debugger
          const exchange = snapshot.data()
          return exchange
        })

      commit('setExchanges', exchanges)
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges
    }
  }
}























