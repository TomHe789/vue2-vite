import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import HomeList from './../views/HomeList.vue'
import HomeNews from './../views/HomeNews.vue'
import About from './../views/About.vue'
import User from './../views/User.vue'
import NotFound from './../views/404.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'list',
					component: HomeList,
				},
				{
					path: 'news',
					component: HomeNews,
				},
			],
		},
		{
			path: '/about',
			component: About,
		},
		{
			// 动态路由匹配
			path: '/user/:id',
			component: User,
		},
		{
			path: '*',
			component: NotFound,
		},
	],
	mode: 'history',
})
