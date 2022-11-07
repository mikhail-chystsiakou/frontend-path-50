

const DOMContentLoadedHandler = () => {
  console.log('adding listener');
  const carouselButtons = Array.from(document.getElementsByClassName("carousel__right"))
  console.log(carouselButtons);
  carouselButtons.forEach(carousel => {
    carousel.addEventListener('mouseenter', _ => {
      carousel.classList.remove('a-soar')
      carousel.classList.remove('a-soar')
    })
    carousel.addEventListener('mouseleave', _ => {
      carousel.classList.add('a-soar')
    })
  });
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', DOMContentLoadedHandler)
} else {
  DOMContentLoadedHandler()
}