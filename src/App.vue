<script>
import AppBackground from './components/AppBackground.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'

export default {
	components: {
		AppHeader,
		AppFooter,
		AppBackground
	}
}
</script>

<template>
	<AppHeader v-if="this.$route.name == 'main' || this.$route.name == 'v1' || this.$route.name == 'v2'" />
	<RouterView />
	<AppFooter v-if="this.$route.name == 'main' || this.$route.name == 'v1' || this.$route.name == 'v2'" />
	<AppBackground />
</template>

<style>
</style>