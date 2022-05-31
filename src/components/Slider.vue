<template>
	<div>
		<div class="hidden">
			<div class="hidden">
				<div ref="items" v-on:vnode-updated="render" class="hidden">
					<slot />
				</div>
			</div>
		</div>
		<div ref="sliderTrack" class="curseur--track">
			<ul ref="sliderMain" class="curseur--list"></ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import { onResize } from "../utilities/screen";

	//variables
	const items = ref(null);
	const sliderMain = ref(null);
	const sliderTrack = ref(null);
	let itemsList: Array<HTMLElement> = [];

	//methods
	const render = () => {
		if (items.value && sliderMain.value && sliderTrack.value) {
			const sliderRoot = sliderMain.value as HTMLElement;
			const itemsRoot = items.value as HTMLElement;
			sliderRoot.innerHTML = "";
			itemsList = [];
			for (const i in itemsRoot.children) {
				if (Number(i) >= 0) {
					const item = itemsRoot.children[i].cloneNode(
						true
					) as HTMLElement;
					item.style.width = trackWidth() + "px";
					sliderRoot.append(item);
					itemsList.push(item);
				}
			}
		}
	};
	const trackWidth = () => {
		if (!sliderTrack.value) return 0;
		const trackRoot = sliderTrack.value as HTMLElement;
		return trackRoot.offsetWidth;
	};
	const resized = () => {
		const w = trackWidth();
		itemsList.forEach(e => {
			e.style.width = `${w}px`;
		});
	};

	//dev
	onResize(resized);
	onMounted(() => {
		render();
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
</style>
