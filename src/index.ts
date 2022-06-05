import type { App } from "vue";
import VueCurseur from "./components/Slider.vue";
import CurseurSlide from "./components/Slide.vue";

export { VueCurseur, CurseurSlide };

export const plugin = {
	install: (app: App) => {
		app.component("vue-curseur", VueCurseur);
		app.component("curseur-slide", CurseurSlide);
	},
};

export default plugin;
