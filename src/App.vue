<template>
	<div style="margin-bottom: 10px"><Logo /></div>
	<div class="title">Example 1</div>
	<Slider
		:transitionSpeed="500"
		:autoPlay="false"
		:autoPlaySpeed="2000"
		class="slider1"
	>
		<template v-slot:default>
			<Slide v-for="(s, i) in slides" :key="i">
				<div>
					<img class="image" :src="s.img" :alt="s.alt" />
				</div>
			</Slide>
		</template>
		<!-- <template v-slot:nextButton="{ next }">
			<button @click="next">Next From Main</button>
		</template> -->
	</Slider>
</template>

<script setup lang="ts">
	import Slider from "./components/Slider.vue";
	import Slide from "./components/Slide.vue";
	import Logo from "./icons/Logo.vue";
	const slides = [
		{ img: "https://picsum.photos/id/237/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/811/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/892/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/1002/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/316/1800/500", alt: "Random Image" },
		{ img: "https://picsum.photos/id/757/1800/500", alt: "Random Image" },
	];
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.title {
		padding: 10px;
	}
	.image {
		width: 100%;
	}
</style>
