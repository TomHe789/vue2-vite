<template>
	<div>
		<p>home page</p>
		<router-link to="/about">about</router-link> <br />
		<router-link to="/home/list">list</router-link> <br />
		<router-link to="/home/news">news</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [1, 2, 3],
		}
	},
	beforeRouteEnter(to, from, next) {
		//console.log('组件守卫 进入')
		//console.log(to, from)
		next(vm => {
			//console.log('home组件', vm.list)
		})
	},
	beforeRouteLeave(to, from, next) {
		//console.log('组件守卫 离开')
		const answer = window.confirm(
			'Do you really want to leave? you have unsaved changes!'
		)
		if (answer) {
			next()
		} else {
			next(false)
		}
	},
}
</script>

<style></style>
