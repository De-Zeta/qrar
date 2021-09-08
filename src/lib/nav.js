// menu responsive
const mainMenu = document.querySelector(".main-menu")
const closeMenu = document.querySelector(".close-menu")
const openMenu = document.querySelector(".open-menu")
  


const show = () => {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';    
}

const close = () => {
    mainMenu.style.top = '-1000%'
    mainMenu.style.margin = '0'
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);
// End menu responsive