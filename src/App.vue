<script setup lang="ts">
	import Slider from "./components/Slider.vue";
	import Slide from "./components/Slide.vue";
</script>

<template>
	<Slider>
		<Slide style="background-color: red">
			<div>Slide 1</div>
		</Slide>
		<Slide style="background-color: blue">Slide 2</Slide>
		<Slide>Slide 3</Slide>
	</Slider>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
