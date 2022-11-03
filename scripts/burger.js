const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__btn");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});
