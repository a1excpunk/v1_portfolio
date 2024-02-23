//#region  Side menu
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
//#endregion

//#region  on scroll menu
let on_scroll_header = document.querySelector(".on_scroll_header");
let on_scroll_header_elements = document.querySelectorAll(
  ".on_scroll_header_element"
);
let _side_menu_item_rotation_angles = [0, 0, 0, 0, 0];
let _lastScrollTop = 0;
let _rotationSpeed = 5;
window.addEventListener("scroll", () => {
  let st = document.documentElement.scrollTop;
  if (st > 100) {
    on_scroll_header.style.display = "grid";
  }
  if (st === 0) {
    on_scroll_header.style.display = "none";
  }
  if (st > _lastScrollTop) {
    // downscroll
    on_scroll_header.style.transform = `rotate(${(_side_menu_item_rotation_angles[0] +=
      _rotationSpeed)}deg)`;
    on_scroll_header_elements.forEach(
      (menu_item, index) =>
        (menu_item.style.transform = `rotate(${(_side_menu_item_rotation_angles[
          index + 1
        ] -= _rotationSpeed)}deg)`)
    );
  } else if (st < _lastScrollTop) {
    // upscroll
    on_scroll_header.style.transform = `rotate(${(_side_menu_item_rotation_angles[0] -=
      _rotationSpeed)}deg)`;
    on_scroll_header_elements.forEach(
      (menu_item, index) =>
        (menu_item.style.transform = `rotate(${(_side_menu_item_rotation_angles[
          index + 1
        ] += _rotationSpeed)}deg)`)
    );
  }
  (_lastScrollTop = st) <= 0 ? 0 : st;
});
//#endregion

//#region  music waves
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
//#endregion
