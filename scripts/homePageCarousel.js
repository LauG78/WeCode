const carBtnPrev = document.querySelector('.home__carousel__button__container__prev');
const carBtnNext = document.querySelector('.home__carousel__button__container__next');
carBtnNext.addEventListener('click', nextSlide);
carBtnPrev.addEventListener('click', prevSlide);
const carSlideshow = document.querySelector('.home__carousel__slideshow')
var carSlides = carSlideshow.children;
var carSlideIndex = 0;
var carAutoPlay = setInterval(autoplayCarSlides, 8000)
function nextSlide() {
    if (carSlideIndex < carSlides.length - 1) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex + 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')


    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = 0;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        clearInterval(carAutoPlay)
    }
}
function prevSlide() {
    if (carSlideIndex > 0) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        clearInterval(carAutoPlay)
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlides.length - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        clearInterval(carAutoPlay)
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