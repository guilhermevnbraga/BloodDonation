const btnHamburgue = document.getElementsByClassName('header__hamburgue')[0];
const menu = document.getElementsByClassName('header-nav')[0];
const header = document.querySelector('.main__header')
console.log(header)

const outMenu = ()=>{
        menu.classList.toggle('is-none');
        header.classList.toggle('modal-height')
}

btnHamburgue.addEventListener('click', ()=>{
    outMenu()
});