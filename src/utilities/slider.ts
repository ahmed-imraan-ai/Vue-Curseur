import { Ref, ref } from "vue";

import { SliderObject } from "../types/slider";
import { useRender } from "./render";
import { onResize } from "../utilities/screen";
export const useSlider = ({
	items,
	sliderMain,
	sliderTrack,
	transitionSpeed,
	autoPlaySpeed,
}: SliderObject) => {
	let itemsList: Ref<Array<HTMLElement>> = ref([]);
	let currentIndex = 1;
	const animate = ref(false);
	let sliding = false;
	let autoPlayInterval: number | undefined;
	//call render
	const [render, trackWidth] = useRender({
		items,
		sliderMain,
		sliderTrack,
		itemsList,
	});

	//resize slides to fit the track
	const resized = () => {
		const w = trackWidth();
		const translate = currentIndex * Number(w);
		sliderMain.value.style.transform = `translateX(-${translate}px)`;
		itemsList.value.forEach(e => {
			e.style.width = `${w}px`;
		});
	};

	//goto next slide
	const next = () => {
		if (!sliding) {
			sliding = true;
			animate.value = true;
			if (currentIndex == itemsList.value.length - 2) {
				const translate = (1 + currentIndex) * Number(trackWidth());
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				setTimeout(() => {
					animate.value = false;
					sliderMain.value.style.transform = `translateX(-${trackWidth()}px)`;
					sliding = false;
				}, transitionSpeed.value);

				currentIndex = 1;
			} else {
				const w = trackWidth();
				const translate = (1 + currentIndex) * Number(w);
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				currentIndex++;
				setTimeout(() => {
					animate.value = false;
					sliding = false;
				}, transitionSpeed.value);
			}
		}
	};

	//goto previous slide
	const previous = () => {
		if (!sliding) {
			sliding = true;
			animate.value = true;
			if (currentIndex == 1) {
				sliderMain.value.style.transform = `translateX(0px)`;
				setTimeout(() => {
					animate.value = false;
					const lastItem = itemsList.value.length - 2;
					const translate = lastItem * Number(trackWidth());
					sliderMain.value.style.transform = `translateX(-${translate}px)`;
					sliding = false;
				}, transitionSpeed.value);

				currentIndex = itemsList.value.length - 2;
			} else {
				const w = trackWidth();
				const translate = (currentIndex - 1) * Number(w);
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				currentIndex--;
				setTimeout(() => {
					animate.value = false;
					sliding = false;
				}, transitionSpeed.value);
			}
		}
	};
	const start = () => {
		autoPlayInterval = setInterval(() => {
			next();
		}, autoPlaySpeed.value + transitionSpeed.value);
	};
	const stop = () => {
		clearInterval(autoPlayInterval);
	};
	onResize(() => {
		resized();
	});
	return {
		render,
		trackWidth,
		resized,
		next,
		previous,
		start,
		stop,
		animate,
	};
};
