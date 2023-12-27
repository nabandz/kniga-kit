import activateMobileMenu from "./modules/menu.js";
import activateTabContent from "./modules/tabcontent.js";
import slider from "./modules/slider.js";
import activateVideo from "./modules/video.js";

if (location.pathname.indexOf("/privacy-policy.html") === -1) {
  import("./modules/email.js").then((obj) => obj.default);
  activateTabContent();
  slider();
  activateVideo();
}
activateMobileMenu();
