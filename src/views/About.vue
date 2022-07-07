<template>
	<div>
		<p>About Page...</p>
		<p>{{ msg }}</p>
		<p>{{ info }}</p>
		<button @click="clickHandle">添加数据</button>
		<button @click="clickFn">跳转到home</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'hello world',
			info: {
				name: 'tom',
				age: 22,
			},
		}
	},
	methods: {
		clickHandle(){
			// this.info.hobbies = 'ow'
			// this.info = Object.assign({}, this.info)


			// this.$set(this.info, 'hobbies', 'ow')

			
		},
		clickFn() {
			// this.$router.push('/home')

			this.$router.push({
				path: '/home',
			})
		},
	},
	watch: {},
}
</script>

<style></style>
