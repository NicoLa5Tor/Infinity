function Carousel() {
  let slideNumber = 0;
  let intervalId;

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.slides');

    // Verificar la existencia de elementos y la longitud del array
    if (slides.length > 0 && index < slides.length) {
      const currentSlide = document.querySelector('.slides.current');
      
      // Verificar que currentSlide no sea nulo antes de manipular clases
      if (currentSlide) {
        currentSlide.classList.remove('current');
      }

      slides[index].classList.add('current');
    }
  };

  const nextSlide = () => {
    const slides = document.querySelectorAll('.slides');

    // Verificar la existencia de elementos y la longitud del array
    if (slides.length > 0) {
      if (slideNumber === slides.length - 1) {
        slideNumber = 0;
      } else {
        slideNumber = slideNumber + 1;
      }

      showSlide(slideNumber);
    }
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
