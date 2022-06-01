import { RenderObject } from "../types/slider";
import { ref } from "vue";
export const useRender = ({
	items,
	sliderMain,
	sliderTrack,
	itemsList,
}: RenderObject) => {
	const trackW = ref(0);
	const render = () => {
		if (items.value && sliderMain.value && sliderTrack.value) {
			const sliderRoot = sliderMain.value as HTMLElement;
			const itemsRoot = items.value as HTMLElement;
			sliderRoot.innerHTML = "";
			itemsList.value = [];
			const TmpList = [];
			//create Tmp list
			for (const i in itemsRoot.children) {
				const node = itemsRoot.children[i];
				if (
					typeof node == "object" &&
					"nodeType" in node &&
					node.nodeType === 1 &&
					node.cloneNode
				) {
					if (
						node.classList.contains("curseur--slide") &&
						node.hasAttribute("vue-curseur--slide")
					) {
						const item = node.cloneNode(true) as HTMLElement;
						TmpList.push(item);
					}
				}
			}
			if (!TmpList.length) return;
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

			for (const i in itemsList.value) {
				itemsList.value[i].setAttribute("vue-curseur--slide", i);
				sliderRoot.append(itemsList.value[i]);
			}
			setItemWidth(_trackWidth());
		}
	};
	const setItemWidth = (width: number) => {
		itemsList.value.forEach(e => {
			e.style.width = `${width}px`;
		});
	};
	const _trackWidth = () => {
		if (!sliderTrack.value) return 0;
		const trackRoot = sliderTrack.value as HTMLElement;
		return trackRoot.offsetWidth;
	};
	const trackWidth = () => {
		const tw = _trackWidth();
		if (trackW.value !== tw) {
			setItemWidth(tw);
		}
		return tw;
	};
	return [render, trackWidth];
};
