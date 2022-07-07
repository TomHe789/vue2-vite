<template>
	<div>
		<p>List Compoent</p>
		<div>{{ formattList }}</div>
		<div>store.state.count: {{ count }}</div>
		<div>store.state.todos: {{ todos }}</div>
		<button @click="clickHandle">add count</button>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			listData: [1, 2, 3],
		}
	},
	computed: {
		formattList() {
			return this.listData.filter(item => item >= 2)
		},
    // mapState辅助函数
		...mapState(['count', 'todos']),
		// ...mapState({
		// count: state => state.count,
		// count1111: 'count',
		// }),
	},
	mounted() {
		// console.log(this.$store.state.count)
	},
	methods: {
		clickHandle() {
			this.$store.commit('increment')
		},
	},
}
</script>

<style></style>
