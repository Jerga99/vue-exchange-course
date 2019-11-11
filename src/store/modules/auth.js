
import firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '@/db'
import Vue from 'vue'


export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user
    }
  },
  actions: {
    signUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          // TODO: Create profile collection in Firestore
          return user
        }).catch(error => {
          const message = error.message
          return Promise.reject(message)
        })
    },
    signIn(_, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => Promise.reject(error.message))
    },
    signOut({commit}) {
      return firebase.auth().signOut()
        .then(_ => commit('setAuthUser', null))
    },
    createUserProfile(_, {uid, userProfile}) {
      return db
        .collection('profiles')
        .doc(uid)
        .set(userProfile)
    },
    storeAuthUser({commit}, user) {
      return db
        .collection('profiles')
        .doc(user.uid)
        .get()
        .then(snapshot => {
          const profile = snapshot.data()
          user.profile = profile

          if (!profile.exchanges) { user.profile.exchanges = [] }

          // Optional fetch user exchanges 
          commit('setAuthUser', user)
          return profile
        })
    },
    updateProfile({commit}, profile) {
      return db
        .collection('profiles')
        .doc(profile.user)
        .update(profile)
        .then(_ => {
          commit('setUserProfile', profile)
          return true
        })
    }
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user
    },
    setUserProfile(state, profile) {
      // state.user.profile = profile

      Vue.set(state.user, 'profile', profile)
    },
    addExchangeToUser(state, exchange) {
      state.user.profile.exchanges.push(exchange)
    }
  }
}













