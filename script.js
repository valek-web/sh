let open_menu = () => {
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.close').style.display = 'block';
    document.querySelector('.background').style.display = 'block';
}

let close_menu = () => {
    document.querySelector('nav').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.background').style.display = 'none';
}

/********
 * *****
 * stiky
 */

let main_ = document.querySelector('#main_');
let main_active = () => main_.getBoundingClientRect().top;
let main_1 = document.querySelector('#main_1');
let main_2 = document.querySelector('#main_2').pageYOffsetTop;
let main_3 = document.querySelector('#main_3').pageYOffset;
let main_4 = document.querySelector('#main_4').pageYOffset;
let main_5 = document.querySelector('#main_5').pageYOffset;
let main_6 = document.querySelector('#main_6');

let body_main = document.querySelector('.main_menu');
let active_Y = () => Math.abs(document.querySelector('.menu_logo').getBoundingClientRect().top);

window.addEventListener('scroll', i => {
    console.log('he')
})

let scroll_menu = () => {
    console.log('hi')
    if (active_Y() > main_active()) {
        main_.style.position = 'fixed';
    }
}

body_main.addEventListener('scroll', scroll_menu)