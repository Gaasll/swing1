<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)}
</script>

<template>
	<div class="sidebar">
		<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
			<!-- <div class="logo"></div> -->

			<div class="menu-toggle-wrap">
				<button class="menu-toggle" @click="ToggleMenu">
					<span class="material-icons"> navigate_next </span>
				</button>
			</div>
	
			
			<h3>Menu</h3>
			<div class="menu">
				<router-link to="/home" class="button">
					<span class="material-icons">home</span>
					<span class="text">Home</span>
				</router-link>
				<router-link to="/emotion" class="button">
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
				<router-link to="/history" class="button">
					<span class="material-icons">history</span>
					<span class="text">History</span>
				</router-link>
				<a href="">Sign out</a>
			</div>
		</aside>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  //height: 40%;
  z-index: 1;
}

aside {
	display: flex;
	margin-top: 0px;
	flex-direction: column;
	background: rgba(255, 253, 253, 0);
	color: var(--light);
	width: calc(3rem + 22px);
	overflow: hidden;
	//min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	button {
		margin: 0.5em;
		border-radius: 50%;
		border: none;
		height: 44px;
		width: 44px;
		outline: none;
		background: #7c7c7c2b;
		color: white;
		cursor: pointer;
		transition: 0.2s ease-in-out;
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
				transition: 0.2s ease-out;
                
			}
			
			&:hover {
				.material-icons {
					transform: translateX(0.5rem);
				}
			}
		}
	}
	.material-icons, .text {
		color: rgb(54, 54, 54);
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
        font-family: 'Didact Gothic';
	}
	h3 {
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
				transition: 0.2s ease-in-out;
			}
			.text {
				transition: 0.2s ease-in-out;
                font-family: 'Open Sans', sans-serif;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: rgb(153, 86, 143);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				
				.material-icons, .text {
					color: rgb(153, 86, 143);
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
		width: calc(5rem + 32px);
		.menu-toggle-wrap {
			top: -1rem;
			
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
		//position: absolute;
		z-index: 99;
	}
}
</style>