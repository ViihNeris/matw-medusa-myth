const HAMB_MENU = document.querySelector("#checkbox-menu");
const CLOSE_MENU = document.querySelector(".close-menu");
let mobile_navigation = document.querySelector(".nav-mob");

const NAVIGATION_MOBILE_HISTORY = document.querySelector(
  '.history-mobile a[href^="#"]'
);
const NAVIGATION_MOBILE_CURIOSITIES = document.querySelector(
  '.curiosities-mobile a[href^="#"]'
);
const NAVIGATION_MOBILE_ABOUT = document.querySelector(
  '.about-dev-mobile a[href^="#"]'
);

function activeMenu() {
  HAMB_MENU.checked
    ? (mobile_navigation.style.display = "flex")
    : (mobile_navigation.style.display = "none");
}

function minimizedMenu() {
  HAMB_MENU.checked = false;
  mobile_navigation.style.display = "none";
}

function setListeners() {
  HAMB_MENU.addEventListener("click", activeMenu);
  CLOSE_MENU.addEventListener("click", minimizedMenu);
  NAVIGATION_MOBILE_HISTORY.addEventListener("click", smoothScrollHistoryMob);
  NAVIGATION_MOBILE_CURIOSITIES.addEventListener("click", smoothScrollCurMob);
  NAVIGATION_MOBILE_ABOUT.addEventListener("click", smoothScrollAboutDevMob);
}

function smoothScrollHistoryMob(e) {
  e.preventDefault();
  smoothScrollMob(NAVIGATION_MOBILE_HISTORY, 20);
  setTimeout (function (){minimizedMenu()}, 450);
}

function smoothScrollCurMob(e) {
  e.preventDefault();
  smoothScrollMob(NAVIGATION_MOBILE_CURIOSITIES, 20);
  setTimeout (function (){minimizedMenu()}, 550);
}

function smoothScrollAboutDevMob(e) {
  e.preventDefault();
  smoothScrollMob(NAVIGATION_MOBILE_ABOUT, -1600);
  setTimeout (function (){minimizedMenu()}, 680);
}

function smoothScrollMob(typeNavigation, distance) {
  const SECTION_MOB = typeNavigation.getAttribute("href");
  const TO_SECTION_1 = document.querySelector(SECTION_MOB).offsetTop;

  window.scroll({
    top: TO_SECTION_1 - distance,
    behavior: "smooth",
  });
  console.log(TO_SECTION_1);
}

function initMenu() {
  setListeners();
}

initMenu();
