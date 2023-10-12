const btnHamburger = document.querySelector(".hamburger-icon");
const navListMobile = document.querySelector(".nav-list-mobile");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("close");
  navListMobile.classList.toggle("close");
});
