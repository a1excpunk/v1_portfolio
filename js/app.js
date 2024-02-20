// Side menu
let burger_menu = document.querySelector(".burger_menu");
let side_menu_close = document.querySelector(".side_menu_close");
let side_menu_items = document.querySelectorAll(".side_menu_item");
let side_menu = document.querySelector(".side_menu_wrapper");
let modal = document.querySelector(".modal");
function closeSideBar() {
  side_menu.style.transform = "translateX(-100%)";
  modal.style.display = "none";
}
burger_menu.addEventListener("click", () => {
  side_menu.style.transform = "translateX(0)";
  modal.style.display = "block";
});
side_menu_items.forEach((item) => {
  item.addEventListener("click", closeSideBar);
});
side_menu_close.addEventListener("click", closeSideBar);
modal.addEventListener("click", closeSideBar);

// Scroll menu
let test = 0;
let test1 = 0;
let test2 = 0;
let test3 = 0;
let test4 = 0;
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let st = document.documentElement.scrollTop;
  if (st > 100) {
    document.querySelector(".on_scroll_header").style.display = "grid";
  }
  if (st === 0) {
    document.querySelector(".on_scroll_header").style.display = "none";
  }
  if (st > lastScrollTop) {
    // downscroll
    document.querySelector(
      ".on_scroll_header"
    ).style.transform = `rotate(${(test += 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[0].style.transform = `rotate(${(test1 -= 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[1].style.transform = `rotate(${(test2 -= 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[2].style.transform = `rotate(${(test3 -= 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[3].style.transform = `rotate(${(test4 -= 5)}deg)`;
  } else if (st < lastScrollTop) {
    // upscroll
    document.querySelector(
      ".on_scroll_header"
    ).style.transform = `rotate(${(test -= 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[0].style.transform = `rotate(${(test1 += 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[1].style.transform = `rotate(${(test2 += 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[2].style.transform = `rotate(${(test3 += 5)}deg)`;
    document.querySelectorAll(
      ".on_scroll_header_element"
    )[3].style.transform = `rotate(${(test4 += 5)}deg)`;
  }
  lastScrollTop = st <= 0 ? 0 : st;
});

//music waves
function padWithZero(num) {
  return String(num).padStart(2, "0");
}
function audioSRCadjustment(keyNum) {
  let audionSrc;
  if (keyNum <= 9) {
    audionSrc = `./music/key${padWithZero(keyNum)}.mp3`;
  } else if (keyNum > 24 && keyNum < 34) {
    audionSrc = `./music/key${padWithZero(keyNum - 24)}.mp3`;
  } else if (keyNum >= 34) {
    audionSrc = `./music/key${keyNum - 24}.mp3`;
  } else {
    audionSrc = `./music/key${keyNum}.mp3`;
  }
  return audionSrc;
}
let keys = document.querySelectorAll(`.key`);
let key_audio = document.getElementById(`key_audio`);
keys.forEach((key) => {
  key.addEventListener("click", () => {
    let data_key_attr = key.getAttribute("data-key");
    key_audio.src = audioSRCadjustment(data_key_attr);
    key_audio.play();
    key_audio.currentTime = 0;
  });
});
