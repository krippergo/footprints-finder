import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './views/MainPage.vue';
import FormsPage from './views/FormsPage.vue';
import FinderPage from './views/FinderPage.vue';

export default createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'main',
			component: MainPage
		},
		{
			path: '/login',
			name: 'login',
			component: FormsPage
		},
		{
			path: '/registration',
			name: 'registration',
			component: FormsPage
		},
		{
			path: '/edit',
			name: 'edit',
			component: FormsPage
		},
		{
			path: '/finderv2',
			name: 'v2',
			component: FinderPage
		},
		{
			path: '/finderv1',
			name: 'v1',
			component: FinderPage
		},
		{
			path: '/:catchAll(.*)',
			redirect: '/'
		}
	]
})