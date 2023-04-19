<template>
		<div class="navbar">
		
			<div class="menu">
				<router-link to="/home" class="button">
					<span class="material-icons">home</span>
				</router-link>
				<router-link to="/emotion" class="button">
					<span class="material-icons">sentiment_very_satisfied</span>
				</router-link>
				<router-link to="/weather" class="button">
					<span class="material-icons">wb_sunny</span>
				</router-link>
				<router-link to="/playing" class="button">
					<span class="material-icons">play_arrow</span>
				</router-link>
				<router-link to="/history" class="button">
					<span class="material-icons">history</span>
				</router-link>
				<router-link to="/" class="button">
					<span v-if="isSignedIn()" class="material-icons" @click="signOut">exit_to_app</span>
					<button class="button" v-else v-on:click="login">login</button>
				</router-link>
			</div>
		</div>
</template>

<script>
import { ref } from 'vue'

export default {
	props: ["signOut", "isSignedIn"],
	setup() {
		const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
		const ToggleMenu = () => {
			is_expanded.value = !is_expanded.value
			localStorage.setItem("is_expanded", is_expanded.value)
		};
		return { is_expanded, ToggleMenu };
	},
}
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f9f9f9;
	padding: 10px;
	border-bottom: 1px solid #ddd;
	top: 0px;

	justify-content: center;

	@media (max-width: 600px) {
		justify-content: center;

		.material-icons{
			font-size: 14px;
		}
		.menu {
			flex-wrap: wrap;

			.button {
				font-size: 10px;
				margin: 5px;
			}
		}
	}

	.menu {
		display: flex;
		align-items: center;

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background-color: transparent;
			font-size: 10px;
			margin: 0 10px;
			cursor: pointer;
			transition: 0.2s ease-in-out;

			&:hover {
				color: #666;
			}
		}
	}
}
</style>