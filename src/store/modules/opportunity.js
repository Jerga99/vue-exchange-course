
import { db, Timestamp } from '@/db'


const extractDataFromOpportunity = async ({id, opportunity}) => {
  if (opportunity.fromExchange) {
    const fromExchange = await opportunity.fromExchange.get()
    opportunity.fromExchange = fromExchange.data()
  }

  const toExchange = await opportunity.toExchange.get()
  opportunity.toExchange = toExchange.data()
  opportunity.id = id
  return opportunity
}


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
        .then(async snapshot => {
          const opportunities = await Promise.all(
            snapshot.docs.map(doc => 
              extractDataFromOpportunity({id: doc.id, opportunity: doc.data()})
            )
          )

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










