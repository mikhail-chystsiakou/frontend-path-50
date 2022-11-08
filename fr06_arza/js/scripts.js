

const DOMContentLoadedHandler = () => {
  const carouselButtons = document.querySelectorAll("[data-carousel_button]")

  const carouselRight = Array.from(document.getElementsByClassName("carousel__right"))[0]
  const carouselLeft = Array.from(document.getElementsByClassName("carousel__left"))[0]

  const carouselDots = Array.from(document.getElementsByClassName("carousel__button"))

  carouselButtons.forEach(button => {
    const offset = button.dataset.carousel_button === "next" ? 1 : -1

    button.addEventListener('click', _ => {
      const activeItem = document.querySelector(".carousel__item[data-active]")
      const carouselDots = document.querySelectorAll(".carousel__dot")
      const allItems = Array.from(document.querySelectorAll(".carousel__item"))
      const selectedIndex = allItems.indexOf(activeItem)
      let newIndex = selectedIndex + offset

      if (newIndex < 0) newIndex = allItems.length - 1
      if (newIndex >= allItems.length) newIndex = 0

      console.debug("new carousel index: " + newIndex)
      delete allItems[selectedIndex].dataset.active
      allItems[newIndex].dataset.active = true

      console.log(carouselDots);
      carouselDots[selectedIndex].src = 'img/carousel__dot_black.png'
      carouselDots[newIndex].src = 'img/carousel__dot_gold.png'
    });
  })
  
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMContentLoadedHandler)
} else {
  DOMContentLoadedHandler()
}