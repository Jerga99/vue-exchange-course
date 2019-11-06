
import firebase from 'firebase/app'
import 'firebase/auth'



export default {
  namespaced: true,


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
    }
  }
}