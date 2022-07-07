import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [
			{ id: 1, text: '...', done: true },
			{ id: 2, text: '...', done: false },
		],
	},
	getters: {
		// 从state中派生出一些状态
		doneTodos(state) {
			return state.todos.filter(item => item.done)
		},
	},
	mutations: {
		increment(state, payload) {
			state.count++
		},
	},
	actions: {},
})

export default store
