function DOMLoaded() {
  const menuCloseBtn = document.getElementsByClassName('nav__close_btn')[0]
  const menuOpenBtn = document.getElementsByClassName('header__menu_btn')[0]
  menuCloseBtn.addEventListener('click', toggleMenuHandler)
  menuOpenBtn.addEventListener('click', toggleMenuHandler)


}
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMLoaded)
} else {
  DOMLoaded()
}

/*=============== SHOW MENU ===============*/
function toggleMenuHandler(e) {
  const headerNav = document.getElementsByClassName('header__nav')[0]
  headerNav.classList.toggle('active')
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
