<template>
	<li class="curseur--slide">
		<slot />
	</li>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
</script>

<style scoped>
	.curseur--slide {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		box-sizing: border-box;
		list-style-type: none !important;
		margin: 0;
		flex-shrink: 0;
		position: relative;
		outline: none;
	}
</style>
