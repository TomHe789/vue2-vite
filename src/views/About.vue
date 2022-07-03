<template>
	<div>
		<p>About Page...</p>
		<p>{{ msg }}</p>
		<button @click="clickFn">跳转到home</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'hello world',
		}
	},
	methods: {
		clickFn() {
			// this.$router.push('/home')

			this.$router.push({
				path: '/home',
			})
		},
	},
  watch: {
    
  }
}
</script>

<style></style>
