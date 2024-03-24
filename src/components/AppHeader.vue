<script>
import axios from 'axios';

export default {
	data() {
		return {
			settingsIsOpen: false
		};
	},
	methods: {
		goLogin() {
			this.$router.push({
				name: 'login'
			});
		},
		accountSettings() {
			this.settingsIsOpen = !this.settingsIsOpen;
		},
		authenticated() {
			if (this.$route.name == 'v1' || this.$route.name == 'v2' || this.$route.name == 'edit')
				return true;
			else
				return false;
		},
		async accountExit() {
			this.accountSettings();

			await axios.get('/server/account/exit');

			this.$router.push({
				name: 'main'
			});
		},
	}
}
</script>

<template>
	<header class="header">
		<router-link to="/" class="title">
			<img src="@/assets/title.svg" alt="FootprintsFinder">
		</router-link>
		<button class="button" @click="goLogin" v-if="!authenticated()">Войти</button>
		<button class="button" @click="accountSettings" v-if="authenticated()">Аккаунт</button>
		<div class="settings" v-if="authenticated() && settingsIsOpen">
			<router-link to="/edit">
				<div class="settings-text" @click="accountSettings">
					<p>Изменить пароль</p>
				</div>
			</router-link>
			<router-link to="/finderv2">
				<div class="settings-text" @click="accountSettings">
					<p>FootprintsFinder v2</p>
				</div>
			</router-link>
			<router-link to="/finderv1">
				<div class="settings-text" @click="accountSettings">
					<p>FootprintsFinder v1</p>
				</div>
			</router-link>
			<div class="settings-text" @click="accountExit">
				<p>Выйти</p>
			</div>
		</div>
	</header>
</template>

<style>
</style>