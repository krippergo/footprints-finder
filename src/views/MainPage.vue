<script>
import axios from 'axios';

export default {
	data() {
		return {
			subtitleText: 'Качественная нейросеть для поиска людей и авто',
			switched: false
		};
	},
	methods: {
		switchToV1() {
			this.subtitleText = 'Быстрейшая нейросеть для поиска людей и авто';
			this.switched = true;
		},
		switchToV2() {
			this.subtitleText = 'Качественная нейросеть для поиска людей и авто';
			this.switched = false;
		},
		goRegistration() {
			this.$router.push({
				name: 'registration'
			});
		},
		async authentication() {
			const response = await axios.get('/server/account/authentication');

			if(response.data.ok) {
				this.$router.push({
					name: 'v2'
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
	<main class="main">
		<div class="switch-box">
			<button class="switch-buttons" :class="{ 'active': !switched }" @click="switchToV2">Finder v2</button>
			<button class="switch-buttons" :class="{ 'active': switched }" @click="switchToV1">Finder v1</button>
		</div>
		<h2 class="subtitle">{{ subtitleText }}</h2>
		<button class="button" @click="goRegistration" v-if="!switched">Быстрый старт</button>
		<button class="button" @click="goRegistration" v-if="switched">Быстрый старт</button>
	</main>
</template>

<style>
</style>