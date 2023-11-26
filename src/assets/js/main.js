import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import MenuModule from "./module/MenuModule.js";
import MatchHeightModule from "./module/MatchHeightModule.js";

window.addEventListener("DOMContentLoaded", () => {
  // Animation
  AosModule();
  // Component
  SwiperModule();
  MenuModule();
  MatchHeightModule();
});
