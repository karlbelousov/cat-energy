let pageHeaderNav = document.querySelector(".page-header__nav");
let pageHeaderToggler = document.querySelector(".page-header__toggler");

pageHeaderToggler.addEventListener("click", function () {
  if (pageHeaderNav.classList.contains("page-header__nav--closed")) {
    pageHeaderNav.classList.remove("page-header__nav--closed");
    pageHeaderNav.classList.add("page-header__nav--opened");
  } else {
    pageHeaderNav.classList.add("page-header__nav--closed");
    pageHeaderNav.classList.remove("page-header__nav--opened");
  }
});
