<template>
	<div class="vue-curseur--wrapper">
		<div class="vue-curseur curseur--body">
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
					<div class="curseur--slide--navigation">
						<slot name="previousButton" :next="previous">
							<div class="curseur--previous" @click="previous">
								<Arrow direction="left" />
							</div>
						</slot>
						<slot name="nextButton" :next="next">
							<div class="curseur--next" @click="next">
								<Arrow />
							</div>
						</slot>
					</div>
				</slot>
			</div>
			<slot
				name="pagination"
				:count="count"
				:current="currentSlide"
				:goto="gotoSlide"
			>
				<div class="curseur--pagination">
					<div
						class="curseur--pagination--wrapper"
						v-for="c in count"
						:key="c"
					>
						<div
							class="curseur--pagination--item"
							@click.prevent="gotoSlide(c)"
							:class="
								currentSlide == c
									? 'curseur--pagination--item--active'
									: ''
							"
						></div>
					</div>
				</div>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Slides from "./Slides.vue";
	import { Ref, ref, onMounted, toRefs, watch } from "vue";
	import { useSlider } from "../utilities/slider";
	//inons
	import Arrow from "../icons/Arrow.vue";
	//variables
	const placeHolderElement = document.createElement("null");
	const items: Ref<HTMLElement> = ref(placeHolderElement);
	const slotItems: Ref<HTMLElement> = ref(placeHolderElement);
	const sliderMain: Ref<HTMLElement> = ref(placeHolderElement);
	const sliderTrack: Ref<HTMLElement> = ref(placeHolderElement);
	const props = defineProps({
		transitionSpeed: {
			type: Number,
			default: 300,
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

	const {
		render,
		trackWidth,
		next,
		previous,
		reset,
		animate,
		count,
		currentSlide,
		gotoSlide,
	} = useSlider({
		items,
		sliderMain,
		sliderTrack,
		transitionSpeed,
		autoPlaySpeed,
		autoPlay,
	});
	const reRender = () => {
		console.log(1);
		render();
		reset();
	};
	onMounted(() => {
		render();
		sliderMain.value.style.transform = `translateX(-${trackWidth()}px)`;
	});
</script>

<style>
	.vue-curseur.curseur--body {
		position: relative;
	}
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
		position: relative;
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

	.curseur--slide--navigation {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
	.curseur--slide--navigation .curseur--next,
	.curseur--slide--navigation .curseur--previous {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		background-color: #3333339d;
		border-radius: 50%;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.5;
	}
	.curseur--slide--navigation .curseur--next:hover,
	.curseur--slide--navigation .curseur--previous:hover {
		opacity: 1;
	}
	.curseur--slide--navigation .curseur--next {
		right: 0;
		margin-right: 5px;
	}
	.curseur--slide--navigation .curseur--previous {
		left: 0;
		margin-left: 5px;
	}
	.curseur--pagination {
		display: flex;
		justify-content: center;
		column-gap: 2px;
	}
	.curseur--pagination .curseur--pagination--wrapper {
		width: 14px;
		height: 14px;
	}
	.curseur--pagination .curseur--pagination--item {
		width: 10px;
		height: 10px;
		cursor: pointer;
		background: #9f9f9f;
		border-radius: 50%;
		transition: all 200ms ease-in-out;
		margin-top: 2px;
		margin-left: 2px;
	}
	.curseur--pagination
		.curseur--pagination--item.curseur--pagination--item--active {
		width: 14px;
		height: 14px;
		margin-top: 0px;
		margin-left: 0px;
	}
	.curseur--list.animate-transition .curseur--slide {
		transform: scale(0.95);
	}
	.curseur--slide.curseur--slide--active {
		transform: scale(1);
	}
	.curseur--list .curseur--slide {
		transition: all var(--transition-speed) ease-in-out;
	}
</style>
