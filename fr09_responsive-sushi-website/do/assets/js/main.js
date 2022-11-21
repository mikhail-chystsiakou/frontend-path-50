function DOMLoaded() {
  const menuCloseBtn = document.getElementsByClassName('nav__close_btn')[0]
  const menuOpenBtn = document.getElementsByClassName('header__menu_btn')[0]
  const menuItems = document.querySelectorAll('.nav__link')
  
  menuCloseBtn.addEventListener('click', toggleMenuHandler)
  menuOpenBtn.addEventListener('click', toggleMenuHandler)
  menuItems.forEach(i => i.addEventListener('click', toggleMenuHandler))

  window.addEventListener('scroll', toggleMenuShadowOnScroll)
  window.addEventListener('scroll', toggleScrollUpOnScroll)

  setupDarkThemeFeature()
  setupLinkActivationOnScroll()
}
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMLoaded)
} else {
  DOMLoaded()
}

/*=============== SHOW MENU ===============*/
function toggleMenuHandler(e) {
  const headerMenu = document.getElementsByClassName('header__menu')[0]
  headerMenu.classList.toggle('active')
}
function toggleMenuShadowOnScroll(_) {
  const header = document.getElementsByClassName('header')[0]
  window.scrollY >= 50 ? header.classList.add('shadow')
                       : header.classList.remove('shadow')
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
function toggleScrollUpOnScroll(_) {
  const scrollUp = document.getElementsByClassName('scroll_up')[0]
  window.scrollY >= 200 ? scrollUp.classList.add('active')
                       : scrollUp.classList.remove('active')
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function setupLinkActivationOnScroll() {
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
      const scrollY = window.pageYOffset
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + '] li')
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active')
      }else{
        sectionsClass.classList.remove('active')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)
}


/*=============== DARK LIGHT THEME ===============*/ 
function setupDarkThemeFeature() {
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'ri-sun-line'

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
