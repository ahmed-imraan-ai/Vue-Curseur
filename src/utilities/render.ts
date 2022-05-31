import { RenderObject } from "../types/slider";

export const useRender = ({
	items,
	sliderMain,
	sliderTrack,
	itemsList,
}: RenderObject) => {
	const render = () => {
		if (items.value && sliderMain.value && sliderTrack.value) {
			const sliderRoot = sliderMain.value as HTMLElement;
			const itemsRoot = items.value as HTMLElement;
			sliderRoot.innerHTML = "";
			itemsList.value = [];
			const TmpList = [];
			//create Tmp list
			for (const i in itemsRoot.children) {
				if (Number(i) >= 0) {
					const item = itemsRoot.children[i].cloneNode(
						true
					) as HTMLElement;
					item.style.width = trackWidth() + "px";
					TmpList.push(item);
				}
			}
			//create List with clones
			if (TmpList.length > 0) {
				const firstClone = TmpList[0].cloneNode(true) as HTMLElement;
				const SecondClone = TmpList[TmpList.length - 1].cloneNode(
					true
				) as HTMLElement;
				firstClone.classList.add("curseur--slide--clone");
				SecondClone.classList.add("curseur--slide--clone");
				itemsList.value.push(SecondClone);
				for (const i in TmpList) {
					itemsList.value.push(TmpList[i]);
				}
				itemsList.value.push(firstClone);
			}
			//attach list to html
			itemsList.value[1].classList.add("curseur--slide--active");
			itemsList.value.forEach(e => {
				sliderRoot.append(e);
			});
		}
	};
	const trackWidth = () => {
		if (!sliderTrack.value) return 0;
		const trackRoot = sliderTrack.value as HTMLElement;
		return trackRoot.offsetWidth;
	};
	return [render, trackWidth];
};
