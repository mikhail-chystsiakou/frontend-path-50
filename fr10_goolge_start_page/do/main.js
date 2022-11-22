function DOMLoaded() {
  const appsBtn = document.getElementById('menu')
  appsBtn.addEventListener('click', toggleAppsMenu)
  console.log('lisetener added')
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMLoaded)
} else {
  DOMLoaded()
}

function toggleAppsMenu() {
  console.log('ok')
  const apps = document.getElementById('apps')
  apps.classList.toggle('active')
}