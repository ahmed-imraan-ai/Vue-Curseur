import { Ref } from "vue";
export type SliderObject = {
	items: Ref<HTMLElement>;
	sliderMain: Ref<HTMLElement>;
	sliderTrack: Ref<HTMLElement>;
	transitionSpeed: Ref<number>;
	autoPlaySpeed: Ref<number>;
	autoPlay: Ref<boolean>;
};

export type RenderObject = {
	items: RRef<HTMLElement>;
	sliderMain: Ref<HTMLElement>;
	sliderTrack: Ref<HTMLElement>;
	itemsList: Ref<Array<HTMLElement>>;
};
