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

// let main_ = document.querySelector('#main_');
// let main_1 = document.querySelector('#main_1');
// let main_2 = document.querySelector('#main_2');
// let main_3 = document.querySelector('#main_3');
// let main_4 = document.querySelector('#main_4');
// let main_5 = document.querySelector('#main_5');
// let main_6 = document.querySelector('#main_6');

// let main_active = () => main_.getBoundingClientRect().top;
// let static = () => document.querySelector('#static').getBoundingClientRect().top;
// let widthOne = () => String(main_1.offsetWidth) + 'px';

// let main_active1 = () => main_1.getBoundingClientRect().top;
// let static1 = () => document.querySelector('#static1').getBoundingClientRect().top;
// let widthOne1 = () => String(main_2.offsetWidth) + 'px';

// let body_main = document.querySelector('nav');
// let active_Y = () => Math.abs(document.querySelector('.menu_logo').getBoundingClientRect().top);

// // window.addEventListener('scroll', i => {
// //     console.log('he')
// // })


// let scroll_menu = () => {
//     console.log('hi')
//     if (active_Y() > main_active()) {
//         main_.style.position = 'fixed';
//         main_.style.width = widthOne();
//         main_.style.top = 0;
//         main_.style.zIndex = '1000';
//     } else if (active_Y() < static()) {
//         main_.style.position = 'static';
//     }
//     if (active_Y() > main_active1()) {
//         main_1.style.position = 'fixed';
//         main_1.style.width = widthOne1();
//         main_1.style.top = 0;
//         main_1.style.zIndex = '1001';
//     } else if (active_Y() < static1()) {
//         main_1.style.position = 'static';
//     }
// }

// body_main.addEventListener('scroll', scroll_menu)