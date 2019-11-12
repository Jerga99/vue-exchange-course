
import { db, Timestamp } from '@/db'


export default {
  namespaced: true,
  state: {
    sendOpportunities: [],
    opportunities: []
  },
  actions: {
    createOpportunity({commit}, opportunity) {
      opportunity.status = "pending"
      opportunity.createdAt = Timestamp.fromDate(new Date())

      return db
        .collection('opportunities')
        .add(opportunity)
        .then(docRef => {
          opportunity.id = docRef.id
          commit('auth/addOpportunityToUser', opportunity, { root: true })
          return true
        })
    },
    getOpportunities({rootState, commit}) {
      const { uid } = rootState.auth.user
      if (!uid) return Promise.reject('User is not logged in!')

      const userRef = db.collection('profiles').doc(uid)

      return db
        .collection('opportunities')
        .where('toUser', "==", userRef)
        .get()
        .then(snapshot => {
          const opportunities = 
            snapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id }
            })

          commit('setOpportunities', {resource: 'opportunities', opportunities})
          return opportunities
        })
    }
  },
  mutations: {
    setOpportunities(state, { resource, opportunities }) {
      state[resource] = opportunities
    }
  }
}










