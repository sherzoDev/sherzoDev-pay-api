let elBurgerOpen = document.querySelector(".site-header__burger");
let elBurgerClose = document.querySelector(".site-header-close");
let siteNav = document.querySelector(".site-nav__wrapper");

elBurgerOpen.addEventListener("click" , function(){
  siteNav.classList.add("shownav")
})

elBurgerClose.addEventListener("click" , function(){
  siteNav.classList.remove("shownav")
})