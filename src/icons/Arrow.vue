<template>
	<svg
		focusable="false"
		aria-hidden="true"
		viewBox="-2 0 24 24"
		:width="width"
		:height="height"
		:style="`transform:${dir}`"
	>
		<path
			:fill="color"
			d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
		></path>
	</svg>
</template>

<script setup lang="ts">
	import { computed, toRefs } from "vue";
	const props = defineProps({
		width: {
			type: Number,
			default: 24,
		},
		height: {
			type: Number,
			default: 24,
		},
		color: {
			type: String,
			default: "#fff",
		},
		direction: {
			type: String,
			default: "right",
			enum: ["right", "left", "top", "bottom"],
		},
	});
	const { width, height, color, direction } = toRefs(props);
	const dir = computed(() => {
		if (direction.value == "top") return "rotate(-90deg);";
		if (direction.value == "bottom") return "rotate(90deg);";
		if (direction.value == "left") return "rotate(180deg);";
		return "rotate(0deg);";
	});
</script>
