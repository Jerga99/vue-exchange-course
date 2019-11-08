
import { db } from '@/db'
import { firestoreAction } from 'vuexfire'

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions: {
    getExchanges() {
      // Here you want to make a call to firebase and ask for data
      db.collection('exchanges')
        .doc('GLgLUAMHu7mZDkseRIqi')
        .get()
        .then(snapshot => {
          debugger
          const exchange = snapshot.data()
          return exchange
        })

      // commit('setExchanges', exchanges)
    },
    bindExchanges: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('items', db.collection('exchanges'))
    }),
    createExchange({rootState}, exchange) {
      exchange.status = 'active'
      exchange.price = parseInt(exchange.price, 10)

      const userRef = db.collection('profiles').doc(rootState.auth.user.uid)
      exchange.user = userRef

      // TODO: After exchange is created then add exchange to user profile on Firestore and also localy in Vue Store
      return db.collection('exchanges').add(exchange)
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges
    }
  }
}























