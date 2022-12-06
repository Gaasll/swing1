<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	
	
	--light: #222;
	--sidebar-width: 300px;
	margin-top: 0px;
	margin-left: 0px;
	max-width: 10000px
}
* {
	margin: 10;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
	
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 5rem;
		@media (max-width: 5000px) {
			padding-left: 10rem;
		}
	}
}
</style>