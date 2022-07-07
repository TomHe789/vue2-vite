<template>
	<div>
		<p>home news page...</p>
		<p>{{ $store.state.count }}</p>
		<p>{{ doneTodos }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

	computed: {
		...mapGetters(['doneTodos'])
	}

}
</script>

<style></style>
