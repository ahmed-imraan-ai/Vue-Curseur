import { onMounted, onBeforeUnmount } from "vue";

export const onResize = ($callback: Function) => {
	const handleScreenSize = () => {
		$callback();
	};
	onMounted(() => {
		window.addEventListener("resize", handleScreenSize);
	});
	onBeforeUnmount(() => {
		window.removeEventListener("resize", handleScreenSize);
	});
};
