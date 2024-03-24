<script>
import axios from 'axios';

export default {
	methods: {
		async authentication() {
			const response = await axios.get('/server/account/authentication');

			if(!response.data.ok) {
				this.$router.push({
					name: 'main'
				});
			}
		}
	},
	mounted() {
		this.authentication();
	}
}
</script>

<template>
	<main class="finder">
		<h2 class="title">h2</h2>
	</main>
</template>

<style>
</style>