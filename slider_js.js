// JavaScript для полноценной работы слайдера

let currentSlide = 0;

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlide();
});

// Автопрокрутка слайдера
setInterval(() => {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
}, 5000);
