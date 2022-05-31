<template>
	<div>
		<div class="hidden">
			<div class="hidden">
				<div ref="items">
					<Slides @vnodeUpdated="reRender">
						<slot />
					</Slides>
				</div>
			</div>
		</div>
		<div ref="sliderTrack" class="curseur--track">
			<ul
				ref="sliderMain"
				class="curseur--list"
				:style="`--transition-speed:${transitionSpeed}ms`"
				:class="animate ? 'animate-transition' : ''"
			></ul>
			<slot name="navigation" :next="next" :previous="previous">
				<slot name="previousButton" :next="previous">
					<button @click="previous">Previous</button>
				</slot>
				<slot name="nextButton" :next="next">
					<button @click="next">Next</button>
				</slot>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Slides from "./Slides.vue";
	import { Ref, ref, onMounted, toRefs, watch } from "vue";
	import { useSlider } from "../utilities/slider";
	//variables
	const placeHolderElement = document.createElement("null");
	const items: Ref<HTMLElement> = ref(placeHolderElement);
	const slotItems: Ref<HTMLElement> = ref(placeHolderElement);
	const sliderMain: Ref<HTMLElement> = ref(placeHolderElement);
	const sliderTrack: Ref<HTMLElement> = ref(placeHolderElement);
	const props = defineProps({
		transitionSpeed: {
			type: Number,
			default: 500,
		},
		autoPlay: {
			type: Boolean,
			default: false,
		},
		autoPlaySpeed: {
			type: Number,
			default: 5000,
		},
	});

	const { transitionSpeed, autoPlay, autoPlaySpeed } = toRefs(props);
	//methods

	const { render, trackWidth, next, previous, start, stop, reset, animate } =
		useSlider({
			items,
			sliderMain,
			sliderTrack,
			transitionSpeed,
			autoPlaySpeed,
		});
	const reRender = () => {
		render();
		reset();
	};
	onMounted(() => {
		render();
		sliderMain.value.style.transform = `translateX(-${trackWidth()}px)`;
		if (autoPlay.value) {
			start();
		}
	});
</script>

<style scoped>
	.hidden {
		display: none;
	}
	.curseur--track {
		position: relative;
		z-index: 0;
		overflow: hidden;
	}
	.curseur--list {
		display: flex;
		margin: 0 !important;
		padding: 0 !important;
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
		will-change: transform;
	}
	.animate-transition {
		transition: all var(--transition-speed) ease-in-out;
	}
</style>
