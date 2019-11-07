
import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import FaqPage from '@/pages/Faq'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import ProfilePage from '@/pages/Profile'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
	routes: [
		{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/faq',
      name: 'FaqPage',
      component: FaqPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      meta: { onlyGuestUser: true }
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: { onlyGuestUser: true }
    },
    {
      path: '/users/me',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: { onlyAuthUser: true }
    }
	],
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser
  debugger

  if (to.meta.onlyAuthUser) {
    if (authenticatedUser) {
      next()
    } else {
      // TODO: Navigate to page for non authenticated users
      next({name: 'LoginPage'})
    }
  } else if (to.meta.onlyGuestUser) {
    if (authenticatedUser) {
      next({name: 'HomePage'})
    } else {
      next()
    }
  } else {
    next()
  }
})


















export default router








