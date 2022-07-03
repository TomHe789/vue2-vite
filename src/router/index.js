import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import HomeList from './../views/HomeList.vue'
import HomeNews from './../views/HomeNews.vue'
import About from './../views/About.vue'
import User from './../views/User.vue'
import NotFound from './../views/404.vue'

const router = new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: Home,
			name: 'home',
			children: [
				{
					path: 'list',
					component: HomeList,
					name: 'home-list',
				},
				{
					path: 'news',
					component: HomeNews,
					name: 'home-news',
				},
			],
		},
		{
			path: '/about',
			component: About,
			name: 'about',
			// 路由独享守卫
			beforeEnter(to, from, next) {
				console.log('about独享路由守卫', to, from)
				next()
			},
		},
		{
			// 动态路由匹配
			path: '/user/:id',
			component: User,
			name: 'user',
		},
		{
			path: '*',
			component: NotFound,
			name: '404',
		},
	],
	mode: 'hash',
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
	console.log('前置守卫')
	console.log(to, from)
	next()
})

// 全局后置钩子
router.afterEach((to, from) => {
	console.log('后置钩子')
	console.log(to, from)
})

export default router
