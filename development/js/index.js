const next = document.querySelector('.nextSlide');
const prev = document.querySelector('.prevSlide');
const slides = document.querySelectorAll('ul.slider li');
let currentSlides = 0;

slides[currentSlides].classList.add('visible');

next.addEventListener('click', function() {
    slides[currentSlides].classList.remove('visible');
    currentSlides = currentSlides === slides.length-1 ? 0 : currentSlides + 1;
    slides[currentSlides].classList.add('visible');
});

prev.addEventListener('click', function () {
    slides[currentSlides].classList.remove('visible');
    currentSlides = currentSlides === 0 ? slides.length - 1 : currentSlides - 1;
    slides[currentSlides].classList.add('visible');
});