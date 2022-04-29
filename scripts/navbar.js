const burger = document.querySelector('.burger__container');
const navList = document.querySelector('.global__nav__list');

let menuOpen = false;

burger.addEventListener('click',triggerNav)

function triggerNav() {
    if (menuOpen == false) {
        navList.classList.add('active')
        menuOpen = true;
    }else if(menuOpen == true){
        navList.classList.remove('active')
        menuOpen = false;
    }
}