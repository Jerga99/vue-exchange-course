
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
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges
    }
  }
}























