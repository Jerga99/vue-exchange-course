
import { db, Timestamp } from '@/db'


export default {
  namespaced: true,
  state: {

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
    }
  }
}