const carBtnPrev = document.querySelector('.home__carousel__button__container__prev');
const carBtnNext = document.querySelector('.home__carousel__button__container__next');
const carBtnWelcome = document.querySelector('.welcome__button')
const headerContainer = document.getElementById('introCarousel')
let navHeight = globalNav.offsetHeight;
carBtnNext.addEventListener('click', nextSlide);
carBtnPrev.addEventListener('click', prevSlide);
carBtnWelcome.addEventListener('click', hideIntro)
const carSlideshow = document.querySelector('.home__carousel__slideshow')
var carSlides = carSlideshow.children;
var carSlideIndex = 0;
var carAutoPlay = setInterval(autoplayCarSlides, 5000)
function hideIntro() {
    fadeIntro()
    setTimeout(removeIntro, 5000)
}
function fadeIntro() {
    headerContainer.classList.add('opacity__zero')
}
function removeIntro() {
    headerContainer.classList.add('display__none')
    headerContainer.classList.add('remove__z-index')
}
function resetAutoplay(){
    clearInterval(carAutoPlay)
    carAutoPlay = setInterval(autoplayCarSlides, 5000)
}

function nextSlide() {
    if (carSlideIndex < carSlides.length - 1) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex + 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = 0;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    }
}
function prevSlide() {
    if (carSlideIndex > 0) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlides.length - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    }
}
function autoplayCarSlides() {
    if (carSlideIndex < carSlides.length - 1) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex + 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = 0;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
    }
}