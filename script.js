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