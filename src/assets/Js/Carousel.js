function Carousel() {
  let slideNumber = 0;
  let intervalId;
  const showSlide = (index) => {
    const slides = document.querySelectorAll('.slides');
    const currentSlide = document.querySelector('.slides.current');
    currentSlide.classList.remove('current');
    slides[index].classList.add('current');
  };
  const nextSlide = () => {
    const slides = document.querySelectorAll('.slides');
    if (slideNumber === slides.length - 1) {
      slideNumber = 0;
    } else {
      slideNumber = slideNumber + 1;
    }
    showSlide(slideNumber);
  };
  const startAutoSlide = () => {
    intervalId = setInterval(() => {
      nextSlide();
    }, 5000); 
  };

  return {
    startAutoSlide
  };
}
window.onload = function () {
  const carousel = Carousel();
  carousel.startAutoSlide();
};
