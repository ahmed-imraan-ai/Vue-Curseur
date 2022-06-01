import { Ref, ref, computed, onMounted, onBeforeUnmount } from "vue";

import { SliderObject } from "../types/slider";
import { useRender } from "./render";
import { onResize } from "../utilities/screen";
export const useSlider = ({
	items,
	sliderMain,
	sliderTrack,
	transitionSpeed,
	autoPlaySpeed,
	autoPlay,
}: SliderObject) => {
	let itemsList: Ref<Array<HTMLElement>> = ref([]);
	let currentIndex = ref(1);
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
	const _play = ref(false);
	const count = computed(() => {
		if (itemsList.value.length == 3) return 1;
		if (itemsList.value.length > 3) return itemsList.value.length - 2;
		return 0;
	});
	const currentSlide = computed(() => {
		return currentIndex.value;
	});
	//resize slides to fit the track
	const resized = () => {
		const w = trackWidth();
		const translate = currentIndex.value * Number(w);
		sliderMain.value.style.transform = `translateX(-${translate}px)`;
		itemsList.value.forEach(e => {
			e.style.width = `${w}px`;
		});
	};
	const gotoSlide = (a: number) => {
		if (!sliding) {
			if (
				currentIndex.value !== a &&
				a > 0 &&
				a < itemsList.value.length
			) {
				sliding = true;
				animate.value = true;
				const w = trackWidth();
				const translate = a * Number(w);
				currentIndex.value = a;
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				setTimeout(() => {
					animate.value = false;
					sliding = false;
					setActive();
				}, transitionSpeed.value + 100);
			}
		}
	};
	//goto next slide
	const next = () => {
		if (itemsList.value.length == 3 || itemsList.value.length == 0) return;
		if (!sliding) {
			sliding = true;
			animate.value = true;
			if (currentIndex.value == itemsList.value.length - 2) {
				const translate =
					(1 + currentIndex.value) * Number(trackWidth());
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				setActive("last");
				setTimeout(() => {
					animate.value = false;
					sliderMain.value.style.transform = `translateX(-${trackWidth()}px)`;
					sliding = false;
					setActive();
				}, transitionSpeed.value + 100);

				currentIndex.value = 1;
			} else {
				const w = trackWidth();
				const translate = (1 + currentIndex.value) * Number(w);
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				currentIndex.value++;
				setTimeout(() => {
					animate.value = false;
					sliding = false;
					setActive();
				}, transitionSpeed.value + 100);
			}
		}
	};

	//goto previous slide
	const previous = () => {
		if (itemsList.value.length == 3 || itemsList.value.length == 0) return;
		if (!sliding) {
			sliding = true;
			animate.value = true;
			if (currentIndex.value == 1) {
				sliderMain.value.style.transform = `translateX(0px)`;
				setActive("first");
				setTimeout(() => {
					animate.value = false;
					const lastItem = itemsList.value.length - 2;
					const translate = lastItem * Number(trackWidth());
					sliderMain.value.style.transform = `translateX(-${translate}px)`;
					sliding = false;
					setActive();
				}, transitionSpeed.value + 100);

				currentIndex.value = itemsList.value.length - 2;
			} else {
				const w = trackWidth();
				const translate = (currentIndex.value - 1) * Number(w);
				sliderMain.value.style.transform = `translateX(-${translate}px)`;
				currentIndex.value--;
				setTimeout(() => {
					animate.value = false;
					sliding = false;
					setActive();
				}, transitionSpeed.value + 100);
			}
		}
	};
	const setActive = (index: "first" | "last" | "current" = "current") => {
		itemsList.value.forEach(el => {
			el.classList.remove("curseur--slide--active");
		});
		if (index == "first")
			itemsList.value[0].classList.add("curseur--slide--active");
		else if (index == "last")
			itemsList.value[itemsList.value.length - 1].classList.add(
				"curseur--slide--active"
			);
		else
			itemsList.value[currentIndex.value].classList.add(
				"curseur--slide--active"
			);
	};

	const reset = () => {
		currentIndex.value = 1;
		sliderMain.value.style.transform = `translateX(-${trackWidth()}px)`;
	};
	//Auto play
	onMounted(() => {
		autoPlayInterval = setInterval(() => {
			if (autoPlay.value) {
				next();
			}
		}, autoPlaySpeed.value + transitionSpeed.value);
	});
	//stop autoplay before unmount
	onBeforeUnmount(() => {
		clearInterval(autoPlayInterval);
	});
	onResize(() => {
		resized();
	});
	return {
		render,
		trackWidth,
		resized,
		next,
		previous,
		reset,
		animate,
		count,
		currentSlide,
		gotoSlide,
	};
};
