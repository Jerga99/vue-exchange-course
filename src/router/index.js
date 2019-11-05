
import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'

Vue.use(Router)

const router = new Router({
	routes: [
		{
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
	],
  mode: 'history'
})

export default router