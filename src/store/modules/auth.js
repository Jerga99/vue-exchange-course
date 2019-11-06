
import * as firebase from 'firebase'



export default {
  namespaced: true,


  actions: {
    signUp(context, {email, password}) {
      debugger
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          debugger
          return user
        }).catch(error => {
          console.log(error)
          debugger
        })
    }
  }
}