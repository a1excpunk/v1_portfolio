let burger_menu = document.querySelector(".burger_menu");
let side_menu_close = document.querySelector(".side_menu_close");
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
side_menu_close.addEventListener("click", closeSideBar);
modal.addEventListener("click", closeSideBar);

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".on_scroll_header").style.display = "grid";
  }
  if (document.documentElement.scrollTop === 0) {
    document.querySelector(".on_scroll_header").style.display = "none";
  }
});
