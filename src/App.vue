<template>
	<div style="margin-bottom: 10px"><Logo /></div>
	<div class="title">Example 1</div>
	<VueCurseur
		:transitionSpeed="300"
		:autoPlay="_play"
		:autoPlaySpeed="2000"
		class="slider1"
	>
		<template v-slot:default>
			<CurseurSlide v-for="(s, i) in slides" :key="i">
				<div>
					<img class="image" :src="s.img" :alt="s.alt" />
				</div>
			</CurseurSlide>
		</template>
		<!-- <template v-slot:nextButton="{ next }">
			<button @click="next">Next From Main</button>
		</template> -->
	</VueCurseur>

	<div @click="play" class="playButton">
		<template v-if="!_play">
			<svg
				class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
				focusable="false"
				aria-hidden="true"
				viewBox="0 0 24 24"
				data-testid="PlayCircleIcon"
			>
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"
				></path>
			</svg>
		</template>
		<template v-else>
			<svg
				class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
				focusable="false"
				aria-hidden="true"
				viewBox="0 0 24 24"
				data-testid="PauseCircleIcon"
			>
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
				></path>
			</svg>
		</template>
	</div>
	<div>Play button is not a part of slider default layout</div>
</template>

<script setup lang="ts">
	import VueCurseur from "./components/Slider.vue";
	import CurseurSlide from "./components/Slide.vue";
	import Logo from "./icons/Logo.vue";
	import { ref } from "vue";
	const _play = ref(false);
	const play = () => {
		_play.value = !_play.value;
	};
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
	.playButton {
		margin: 10px auto;
		padding: 5px 10px;
		width: 40px;
		cursor: pointer;
	}
</style>
