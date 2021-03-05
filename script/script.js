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



let noScrollSection = () => {
    document.querySelector('body').style.overflow = 'hidden'
}

let yesScrollSection = () => {
    document.querySelector('body').style.overflow = 'auto'
}


document.querySelector('nav').addEventListener('mouseover', noScrollSection)
document.querySelector('section').addEventListener('mouseover', yesScrollSection)