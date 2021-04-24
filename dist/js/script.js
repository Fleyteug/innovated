'Use strict'

document.addEventListener('DOMContentLoaded', function () {

    //burgerMenu

    const iconMenu = document.querySelector('.menu__icon');

    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        }); 
    }


    //progressBar

    const counters = document.querySelectorAll('.statistics__counter'),
    lines = document.querySelectorAll('.statistics__line span');

    counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});































});