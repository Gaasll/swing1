<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)}

</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="logot.png" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons"> navigate_next </span>
			</button>
		</div>
    

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span ></span>
                <span class="material-icons">home</span>
                    <span class="text">Home</span>
           
			</router-link>
			<router-link to="/about" class="button">
				<span ></span>
                <span class="material-icons">add_reaction</span>
				<span class="text">Emotions</span>
			</router-link>
			<router-link to="/weather" class="button">
				<span class="material-icons">sunny</span>
				<span class="text">Weather</span>
			</router-link>
            <router-link to="/playing" class="button">
				<span class="material-icons">play_arrow</span>
				<span class="text">Playing now</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">history</span>
				<span class="text">History</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<style lang="scss" scoped>
aside {
	display: flex;
   
	flex-direction: column;
	background: #222;
	color: var(--light);
	width: calc(5rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 5rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
                
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
        font-family: 'Didact Gothic';
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
            
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
                font-family: 'Open Sans', sans-serif;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: rgb(108, 179, 214);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid rgb(35, 161, 224);
				.material-icons, .text {
					color: rgb(108, 179, 214);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
            font-family: 'Didact Gothic';
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>
