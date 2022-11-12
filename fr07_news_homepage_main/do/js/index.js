if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMLoaded)
} else {
  DOMLoaded()
}

function DOMLoaded() {
  const menuBtns = document.querySelectorAll('[data-menu-action]')
  menuBtns.forEach(btn => {
    btn.addEventListener('click', _ => {
      toggleMenu(btn.dataset.menuAction === 'open')
    })
  })
  const navItems = document.querySelectorAll('.nav__curtain .nav__item')
  navItems.forEach(btn => {
    btn.addEventListener('click', _ => {
      toggleMenu(false)
    })
  })
  const shadowBox = document.getElementById('shadowBox')
  shadowBox.addEventListener('click', _ => {
    toggleMenu(false)
  })
}

function toggleMenu(isOpening) {
  const menuCurtain = document.getElementsByClassName('nav__curtain')[0]
  const shadowBox = document.getElementsByClassName('shadow-box')[0]
  if (isOpening) {
    menuCurtain.dataset.active = true
    shadowBox.classList.remove('hidden')
  } else {
    delete menuCurtain.dataset.active
    shadowBox.classList.add('hidden')
  }
}