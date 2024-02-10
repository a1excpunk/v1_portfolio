let burger_menu = document.querySelector(".burger_menu");
let side_menu_close = document.querySelector(".side_menu_close");
let side_menu = document.querySelector(".side_menu");
let modal = document.querySelector(".modal");
let bubbles = document.querySelector(".bubbles");
let canvas1 = document.getElementById("canvas1");
function closeSideBar() {
  side_menu.style.transform = "translateX(-100%)";
  modal.style.display = "none";
}

burger_menu.addEventListener("click", () => {
  side_menu.style.transform = "translateX(0)";
  modal.style.display = "block";
});
side_menu_close.addEventListener("click", closeSideBar);
modal.addEventListener("click", closeSideBar);

let bubbles_on = false;

function turnOnBubbles() {
  bubbles_on = true;
  canvas1.style.zIndex = 0;
  bubbles.textContent = "turn off bubbles";
  bubbles.style.zIndex = 1;
  bubbles.classList.replace("bubbles_off", "bubbles_on");
}
function turnOffBubbles() {
  bubbles_on = false;
  canvas1.style.zIndex = -1;
  bubbles.textContent = "turn on bubbles";
  bubbles.classList.replace("bubbles_on", "bubbles_off");
}

bubbles.addEventListener("click", () => {
  !bubbles_on ? turnOnBubbles() : turnOffBubbles();
});
