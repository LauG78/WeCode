const burger = document.querySelector('.burger__container');
const navList = document.querySelector('.global__nav__list');
var screenWidth = document.documentElement.clientWidth;
let globalNav = document.querySelector('.global__nav');
let menuOpen = false;
let navStickyOnTop = false;
burger.addEventListener('click',triggerNav)
triggerOnResize();
window.addEventListener('resize', triggerOnResize)
function triggerNav() {
    if (menuOpen == false) {
        navList.classList.add('active')
        burger.classList.add('active')
        menuOpen = true;
    }else if(menuOpen == true){
        navList.classList.remove('active')
        burger.classList.remove('active')
        menuOpen = false;
    }
}
function triggerOnResize() {
    if (screenWidth < 769) {
        window.addEventListener('scroll', checkNavPosition)
    }
}
function checkNavPosition() {
    if (globalNav.getBoundingClientRect().top <= 1) {
        navStickyOnTop = true;
        toggleNavList();
    } else if (globalNav.getBoundingClientRect().top >= 1) {
        navStickyOnTop = false;
        toggleNavList();
    }
}
function toggleNavList() {
    if (!navStickyOnTop) {
        navList.classList.add('display__none');
        burger.classList.add('display__none');
    } else if (navStickyOnTop) {
        navList.classList.remove('display__none');
        burger.classList.remove('display__none');
    }
}
