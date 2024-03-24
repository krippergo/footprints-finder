<script>
import EditForm from '@/components/EditForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
	components: {
		EditForm,
		LoginForm,
		RegistrationForm
	}
}
</script>

<template>
	<main class="forms">
		<div class="form-container">
			<EditForm v-if="$route.name == 'edit'" />
			<LoginForm v-if="$route.name == 'login'" />
			<RegistrationForm v-if="$route.name == 'registration'" />
		</div>
		<div class="right-block">
			<img src="@/assets/icon.svg" class="icon">
			<img src="@/assets/subtitle.svg" class="subtitle">
		</div>
	</main>
</template>

<style>

</style>