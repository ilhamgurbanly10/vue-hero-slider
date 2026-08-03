import HeroSlider, {
  type HeroSliderProps,
  type HeroSlides
} from "./components/HeroSlider";

import type { App } from "vue";

export { HeroSlider };
export type { HeroSliderProps, HeroSlides };

export default {
  install(app: App) {
    app.component("HeroSlider", HeroSlider);
  }
};
