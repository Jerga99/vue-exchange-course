
import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import FaqPage from '@/pages/Faq'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'

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
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
	],
  mode: 'history'
})

export default router