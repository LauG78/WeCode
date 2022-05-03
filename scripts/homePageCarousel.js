const carBtnPrev = document.querySelector('.home__carousel__button__container__prev');
const carBtnNext = document.querySelector('.home__carousel__button__container__next');
const carBtnWelcome = document.querySelector('.welcome__button')
const headerContainer = document.getElementById('introCarousel')
const headerUI = document.getElementById('introCarouselUI')
let navHeight = globalNav.offsetHeight;
carBtnNext.addEventListener('click', nextSlide);
carBtnPrev.addEventListener('click', prevSlide);
carBtnWelcome.addEventListener('click', scrollTillNavOnTop)
const carSlideshow = document.querySelector('.home__carousel__slideshow')
var carSlides = carSlideshow.children;
var carSlideIndex = 0;
var carAutoPlay = setInterval(autoplayCarSlides, 5000)
const navPosition = globalNav.getBoundingClientRect().top;
function scrollTillNavOnTop() {
    console.log(navPosition)
    window.scroll({
        top: navPosition,
        behavior: 'smooth'
    })
    headerUI.innerHTML='';
}
window.addEventListener("scroll",function(){
    /*--Take the header and move it with the page when scrolled--*/
    let distance = this.window.scrollY;
    console.log(distance)
    /*--Prevent scrolling up top, add reverse--*/
    headerContainer.style.transform = `translateY(${distance * 1}px)`;
    checkNavPosition();
    /*---RETURN THE CONTENT--*/
    if(navStickyOnTop){
        headerUI.innerHTML='';
    }else{
        headerUI.innerHTML='';
    }
})



function resetAutoplay() {
    clearInterval(carAutoPlay)
    carAutoPlay = setInterval(autoplayCarSlides, 8000)
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