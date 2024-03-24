<script>
import axios from 'axios';

export default {
	data() {
		return {
			login: '',
			password: '',
			verification: '',
			errmsg: ''
		}
	},
	methods: {
		async authentication() {
			const response = await axios.get('/server/account/authentication');

			if(response.data.ok) {
				this.$router.push({
					name: 'v2'
				});
			}
		},
		async registartion(evt) {
			evt.preventDefault();

			if(
				this.login.length > 0 &&
				this.password.length > 0 &&
				this.verification.length > 0
			) {
				if(this.password.length >= 8) {
					if(this.password == this.verification) {
						const response = await axios.post('/server/account/registration', {
							login: this.login,
							password: this.password
						});

						if(response.data.ok) {
							this.login = '';
							this.password = '';
							this.verification = '';

							this.$router.push({
								name: 'v2'
							});
						} else {
							this.errmsg = response.data.msg;
						}
					} else {
						this.errmsg = 'Пароли не совпадают'
					}
				} else {
					this.errmsg = 'Пароль должен быть не короче 8 символов'
				}
			} else {
				this.errmsg = 'Заполните все поля!'
			}
		}
	},
	mounted() {
		this.authentication();
	}
}
</script>

<template>
	<form @submit="registartion">
		<router-link to="/">
			<p class="text">&lt; назад</p>
		</router-link>
		<h2 class="form-title">Регистрация</h2>
		<div class="block">
			<p>Логин:</p>
			<input type="text" class="input" v-model="login">
		</div>
		<div class="block">
			<p>Пароль:</p>
			<input type="password" class="input" v-model="password">
		</div>
		<div class="block">
			<p>Подтвердите пароль:</p>
			<input type="password" class="input" v-model="verification">
		</div>
		<p class="error">{{ errmsg }}</p>
		<button class="button">Зарегистрироваться</button>
		<div class="text-container">
			<router-link to="/login">
				<p class="text">Войти</p>
			</router-link>
		</div>
	</form>
</template>

<style>
</style>